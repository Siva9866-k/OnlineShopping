import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/cartSlice';
function UserHome() {

  const [products, setproducts] = useState([]);

  let navigate=useNavigate();
  let dispatch=useDispatch();

  async function getData(){
    let res=await axios.get("https://fakestoreapi.com/products");//2s
    // console.log(res.data);
    setproducts(res.data);
  }


  let result=products.map((item,ind)=>{
    return(
        <div className='card' key={item.id}>
            <img src={item.image} alt={item.title} className='image'/>
            <h2 className='product-title'>{item.title}</h2>
            <p className='product-category'>{item.category}</p>
            <div className='product-price'>Rs.{item.price}</div>
            <div className='actions'>
              <button className='action-btn add-btn'
                onClick={()=>{
                  dispatch(addItem(item));
                  alert("Item added to cart");
                }}
              >
                  Add to cart
              </button>
              <button className='action-btn details-btn' onClick={() => navigate(`/userDashboard/productDetails/${item.id}`)}>
                  View details
              </button>
            </div>
        </div>
    )
  });

  useEffect(()=>{
      getData();
  },[]);
  return (
    <div className='user-home-page'>
      <h1>Products</h1>
      <div className='container'>
        {result}
      </div>
    </div>
  )
}

export default UserHome