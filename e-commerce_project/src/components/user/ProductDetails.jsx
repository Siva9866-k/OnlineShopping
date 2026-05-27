import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { addItem } from '../../store/cartSlice';

function ProductDetails() {
    const [product, setproduct] = useState({});
    let params = useParams();
    let navigate = useNavigate();
    let dispatch = useDispatch();

    console.log(params);

    async function getData() {
        let res = await axios.get(`https://fakestoreapi.com/products/${params.id}`);
        console.log(res.data);
        setproduct(res.data);
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <button onClick={() => navigate("/userDashboard")}>go back</button> <br />
            <img src={product.image} alt="" />
            <h1>{product.title}</h1>
            <h4>{product.category}</h4>
            <h1>Rs.{product.price}</h1>
            <p>
                {product.description}
            </p>

            <button
                onClick={() => {
                    dispatch(addItem(product));
                    alert("item added to cart");
                }}
            >
                AddTo cart
            </button>
        </div>
    )
}

export default ProductDetails