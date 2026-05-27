import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { clearAuthSession } from '../../utils/auth'

function UserNav() {

    let navigate=useNavigate();

    function handleLogout() {
      clearAuthSession();
      navigate("/login");
    }

  return (
    <div className='nav'>
        <div className='logo'>OnlineShopping</div>
        <Link to="">Home</Link>
        <button
            onClick={() => navigate("/userDashboard/cart")}
        >
            Cart
        </button>
        <button className='logout-btn' onClick={handleLogout}>
            Logout
        </button>
    </div>
  )
}

export default UserNav