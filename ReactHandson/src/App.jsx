import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './Login'
import Dashboard from './Dashboard'

// Secured URL parameters routing guard mechanism
const ProtectedRoute = ({ children }) => {
  const isAuth = localStorage.getItem('isAuthenticated') === 'true'
  return isAuth ? children : <Navigate to="/" replace />
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Entry Point Root: Login Screen */}
        <Route path="/" element={<Login />} />

        {/* Encapsulated Authorization Route */}
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />

        {/* Catch-All Fallback Routing Loop */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}

export default App