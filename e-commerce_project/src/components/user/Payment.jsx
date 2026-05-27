import React from 'react'
import { useNavigate } from 'react-router-dom'

function Payment() {
  let navigate = useNavigate();

  return (
    <div className='payment-page'>
      <div className='payment-card'>
        <div className='payment-header'>
          <h1>Checkout</h1>
          <p>Complete your purchase with a dummy payment flow.</p>
        </div>

        <div className='payment-section'>
          <label>Cardholder Name</label>
          <input type='text' placeholder='John Doe' />
        </div>

        <div className='payment-row'>
          <div className='payment-section'>
            <label>Card Number</label>
            <input type='text' placeholder='1234 5678 9012 3456' />
          </div>
          <div className='payment-group'>
            <div className='payment-section'>
              <label>Expiry</label>
              <input type='text' placeholder='MM/YY' />
            </div>
            <div className='payment-section'>
              <label>CVC</label>
              <input type='text' placeholder='123' />
            </div>
          </div>
        </div>

        <div className='payment-section'>
          <label>Billing Email</label>
          <input type='email' placeholder='you@example.com' />
        </div>

        <button className='checkout-btn' onClick={() => navigate('/userDashboard')}>Pay Now</button>
        <p className='payment-note'>This is a demo payment page. No real transactions are processed.</p>
      </div>
    </div>
  )
}

export default Payment
