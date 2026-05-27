import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { hashPassword, getUsers, setAuthSession } from '../utils/auth'
import "./login.css";

function Login() {

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  let navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    if (email.trim() === "" || password === "") {
      alert("Please fill all details");
      return;
    }

    const users = getUsers();
    const user = users.find((item) => item.email === email.trim().toLowerCase());

    if (!user) {
      alert("No registered user found. Please register first.");
      return;
    }

    const hashedPassword = await hashPassword(password);
    if (hashedPassword !== user.password) {
      alert("Invalid email or password.");
      return;
    }

    setAuthSession(user);
    alert("Login Successful");

    navigate("/userDashboard");

    setemail("");
    setpassword("");
  }

  return (
    <div className='login-container'>

      <form className='form' onSubmit={handleSubmit}>

        <h1 className='title'>Login</h1>

        <div className='input-box'>
          <label>Email</label>
          <input
            type="email"
            placeholder='Enter Email'
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </div>

        <div className='input-box'>
          <label>Password</label>
          <input
            type="password"
            placeholder='Enter Password'
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>

        <p className='forgot'>Forgot Password?</p>

        <button className='btn'>LOGIN</button>

        <p className='social-text'>Or Sign Up Using</p>

        <div className='social-icons'>
          <div className='icon facebook'>F</div>
          <div className='icon twitter'>T</div>
          <div className='icon google'>G</div>
        </div>

        <p className='signup-text'>Or Sign Up Using</p>

        <Link to="/reg" className='signup-link'>
          SIGN UP
        </Link>

      </form>

    </div>
  )
}

export default Login