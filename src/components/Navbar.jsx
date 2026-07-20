import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const Navbar = () => {
  const cart = useCart();

  const totalItems = cart.reduce((total, item)=> total+ item.quantity, 0)
  return (
    <nav>
      <Link to='/'>Home</Link> <br />
      <Link to='products'>Products</Link> <br />
      <Link to='cart'>Cart <span>{totalItems}</span></Link> <br />
      <Link to='login'>Admin Login</Link>
    </nav>
  )
}

export default Navbar
