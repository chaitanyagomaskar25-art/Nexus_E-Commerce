import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <Link>Home</Link> <br />
      <Link>Products</Link> <br />
      <Link>Cart</Link> <br />
      <Link>Admin Login</Link>
    </nav>
  )
}

export default Navbar
