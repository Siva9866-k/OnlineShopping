

import React from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.css"

function NavBar() {

  return (

    <div className='navbar'>

      <div className='logo'>
        OnlineShopping
      </div>

      <div className='nav-links'>

        <Link to="/">Home</Link>

        <Link to="/login">Login</Link>

        <Link to="/products">Products</Link>

        <button className='logout-btn'>
          <Link to="/reg">Register</Link>
        </button>

      </div>

    </div>
  )
}

export default NavBar