import { revalidatePath, revalidateTag } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret') || request.headers.get('x-revalidate-secret')
  const expectedSecret = process.env.SANITY_REVALIDATE_SECRET

  if (!secret || !expectedSecret) {
    return NextResponse.json(
      { message: 'Invalid or missing revalidation secret', received: !!secret, configured: !!expectedSecret },
      { status: 401 }
    )
  }

  if (secret !== expectedSecret) {
    return NextResponse.json(
      { message: 'Invalid or missing revalidation secret', expected: expectedSecret?.substring(0, 10) + '...', received: secret?.substring(0, 10) + '...' },
      { status: 401 }
    )
  }

  try {
    // Revalidate all Sanity-related pages and tags
    revalidateTag('sanity-siteSettings')
    revalidateTag('sanity-homepage')
    revalidateTag('sanity-about')
    revalidateTag('sanity-ministries')
    revalidateTag('sanity-giving')
    revalidateTag('sanity-beliefs')
    revalidateTag('sanity-sunday')
    revalidateTag('sanity-schedule')
    revalidateTag('sanity-buildingFund')
    revalidateTag('sanity-contact')

    // Also revalidate all page paths
    revalidatePath('/')
    revalidatePath('/about')
    revalidatePath('/ministries')
    revalidatePath('/giving')
    revalidatePath('/beliefs')
    revalidatePath('/sunday')
    revalidatePath('/schedule')
    revalidatePath('/building-fund')
    revalidatePath('/contact')

    return NextResponse.json({ revalidated: true, now: Date.now() })
  } catch (err) {
    return NextResponse.json(
      { message: 'Error revalidating', error: String(err) },
      { status: 500 }
    )
  }
}
