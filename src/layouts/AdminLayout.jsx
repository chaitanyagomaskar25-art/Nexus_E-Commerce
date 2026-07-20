import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const AdminLayout = () => {
  const {logout} = useAuth()
  return (
    <>
     <div>
      <Link to="/admin">Dashboard</Link><br />
      <Link to="/admin/products">Products</Link><br />
      <Link>Add Products</Link> <br />
      <button onClick={logout}>Log Out</button>
     </div>
      <Outlet />
    </>
  )
}

export default AdminLayout
