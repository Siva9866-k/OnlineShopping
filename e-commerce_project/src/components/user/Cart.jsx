import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Cart() {

    let cart = useSelector((state)=>state.cart.cart);
    let totalPrice = useSelector((state) => state.cart.totalPrice);
    let navigate = useNavigate();

    let result = cart.map((item) => {
        return(
            <div className='cart-item-card' key={item.id}>
                <div className='image-container'>
                    <img src={item.image} alt={item.title} />
                </div>
                <div className='cart-item-details'>
                    <h2>{item.title}</h2>
                    <p>{item.category}</p>
                </div>
                <div className='cart-item-price'>
                    Rs.{item.price}
                </div>
            </div>
        )
    });
  return (
    <div className='cart-page'>
      <div className='cart-list'>
        {result.length > 0 ? result : (
          <div className='empty-state'>Your cart is empty. Add some products first.</div>
        )}
      </div>
      <div className='cart-summary'>
        <div className='summary-card'>
          <h2>Order summary</h2>
          <p className='summary-total'>Total: Rs.{totalPrice.toFixed(2)}</p>
          <button className='checkout-btn'
            onClick={() => navigate('/userDashboard/payment')}
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart