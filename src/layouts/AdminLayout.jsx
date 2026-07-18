import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <>
     <div>
      <Link to="/admin">Dashboard</Link><br />
      <Link to="/admin/products">Products</Link><br />
      <Link>Add Products</Link>
     </div>
      <Outlet />
    </>
  )
}

export default AdminLayout
