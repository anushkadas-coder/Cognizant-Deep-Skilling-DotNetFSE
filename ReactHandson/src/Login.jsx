import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    // Aligning with our backend JWT mock credentials
    if (username === 'admin' && password === 'password123') {
      localStorage.setItem('isAuthenticated', 'true')
      navigate('/dashboard') // Forwarding to live dashboard channel
    } else {
      setError('❌ Invalid credentials! Try admin / password123')
    }
  }

  const styles = {
    wrapper: { display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: '#F0F2F5', fontFamily: "'Inter', sans-serif" },
    card: { background: '#fff', padding: '32px', borderRadius: 12, border: '1px solid #E4E8EF', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', width: '100%', maxWidth: '360px' },
    title: { fontSize: '18px', fontWeight: 600, color: '#0D1117', margin: '0 0 4px 0', textAlign: 'center' },
    sub: { fontSize: '12px', color: '#7A8499', margin: '0 0 24px 0', textAlign: 'center' },
    group: { marginBottom: '16px' },
    label: { display: 'block', fontSize: '11px', fontWeight: 500, color: '#7A8499', textTransform: 'uppercase', marginBottom: '6px', letterSpacing: '0.03em' },
    input: { width: '100%', height: '36px', padding: '0 12px', border: '1px solid #D1D9E6', borderRadius: 7, background: '#F9FAFB', outline: 'none', boxSizing: 'border-box', fontSize: '13px', fontFamily: "'Inter', sans-serif" },
    btn: { width: '100%', height: '36px', background: '#0D1117', color: '#fff', border: 'none', borderRadius: 7, fontWeight: 600, cursor: 'pointer', marginTop: '8px', fontSize: '13px', transition: 'opacity 0.15s' },
    err: { color: '#DC2626', fontSize: '12px', textAlign: 'center', marginTop: '12px', fontWeight: 500 }
  }

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2 style={styles.title}>Secure Portal Gate</h2>
        <p style={styles.sub}>Cognizant Deep-Skilling Authentication</p>
        <form onSubmit={handleLogin}>
          <div style={styles.group}>
            <label style={styles.label}>Username</label>
            <input type="text" value={username} onChange={e => setUsername(e.target.value)} style={styles.input} placeholder="admin" required />
          </div>
          <div style={styles.group}>
            <label style={styles.label}>Password</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} style={styles.input} placeholder="••••••••" required />
          </div>
          <button type="submit" style={styles.btn} onMouseEnter={e => e.currentTarget.style.opacity = '0.85'} onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
            Verify Core Engine
          </button>
        </form>
        {error && <div style={styles.err}>{error}</div>}
      </div>
    </div>
  )
}

export default Login