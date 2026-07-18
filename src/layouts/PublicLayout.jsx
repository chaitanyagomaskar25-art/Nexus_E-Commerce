import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const PublicLayout = () => {
  return (
    <>
     <Navbar />
      <Outlet />
      <h1>Footer</h1>
    </>
  )
}

export default PublicLayout
