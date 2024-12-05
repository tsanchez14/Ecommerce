import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className='nav-container'>
      <nav className='navbar'>
        <Link to='/'>
          <h1 className='navbar-logo'>Shop</h1>
        </Link>
        <Link to='/cart'>
          <p className='navbar-cart'>Carrito</p>
        </Link>
      </nav>
    </div>
  )
}

export default NavBar

