import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landingpage from './components/Landingpage'
import Home from './components/Home'
import './App.css';
import Reg from './components/Reg';
import Login from './components/Login';
import UserDashboard from './components/user/UserDashboard';
import UserHome from './components/user/UserHome';
import ProtectedRoute from './components/user/ProtectedRoute';
import ProductDetails from './components/user/ProductDetails';
import Cart from './components/user/Cart';
import Payment from './components/user/Payment';

function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Landingpage/>}>
                    <Route index element={<Home/>}/>
                    <Route path='/reg' element={<Reg />} />
                    <Route path='/login' element={<Login />} />
                </Route>
                
                  <Route path='/userDashboard' element={
                        <ProtectedRoute>
                            <UserDashboard />
                        </ProtectedRoute>}>

                    <Route index element={<UserHome/>}/>
                    <Route path='/userDashboard/productDetails/:id' element={<ProductDetails/>}/>
                    <Route path='/userDashboard/cart' element={<Cart/>}/>
                    <Route path='/userDashboard/payment' element={<Payment/>}/>
                    
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App