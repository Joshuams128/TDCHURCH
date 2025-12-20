export default function Loading() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#000',
    }}>
      <div style={{
        width: '50px',
        height: '50px',
        border: '3px solid rgba(255, 255, 255, 0.3)',
        borderTop: '3px solid #fff',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
      }} />
    </div>
  )
}
