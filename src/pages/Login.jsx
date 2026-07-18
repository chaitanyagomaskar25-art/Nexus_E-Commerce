import React from 'react'

const Login = () => {
  const handleLogin = ()=>{
    localStorage.setItem("isAdmin", "true")
    window.location.href = "/admin"
  }
  return (
    <div>
      <h1>Admin Login</h1>
      <button onClick={handleLogin}>Login as a admin</button>
    </div>
  )
}

export default Login
