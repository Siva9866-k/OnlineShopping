import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { hashPassword, getUsers, saveUsers } from '../utils/auth'
import "./Reg.css"

function Reg() {

    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [number, setnumber] = useState("");
    const [password, setpassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");

    let navigate = useNavigate();

    async function handleSubmit(event) {

        event.preventDefault();

        if (
            name.trim() === "" ||
            email.trim() === "" ||
            number.trim() === "" ||
            password === "" ||
            confirmPassword === ""
        ) {
            alert("Please fill all details");
            return;
        }

        if (password !== confirmPassword) {
            alert("Password not matching");
            return;
        }

        const users = getUsers();
        const existingUser = users.find((user) => user.email === email.trim().toLowerCase());

        if (existingUser) {
            alert("This email is already registered. Please login instead.");
            return;
        }

        const hashedPassword = await hashPassword(password);
        const newUser = {
            name: name.trim(),
            email: email.trim().toLowerCase(),
            number: number.trim(),
            password: hashedPassword
        }

        users.push(newUser);
        saveUsers(users);

        alert("Registration Successful");
        navigate("/login");

        setname("");
        setemail("");
        setnumber("");
        setpassword("");
        setconfirmPassword("");
    }

    return (

        <div className='reg-container'>

            <form className='form' onSubmit={handleSubmit}>

                <h1 className='title'>Register</h1>

                <input
                    type="text"
                    placeholder='Enter Name'
                    onChange={(e) => setname(e.target.value)}
                    value={name}
                />

                <input
                    type="email"
                    placeholder='Enter Email'
                    onChange={(e) => setemail(e.target.value)}
                    value={email}
                />

                <input
                    type="number"
                    placeholder='Enter Number'
                    onChange={(e) => setnumber(e.target.value)}
                    value={number}
                />

                <input
                    type="password"
                    placeholder='Enter Password'
                    onChange={(e) => setpassword(e.target.value)}
                    value={password}
                />

                <input
                    type="password"
                    placeholder='Confirm Password'
                    onChange={(e) => setconfirmPassword(e.target.value)}
                    value={confirmPassword}
                />

                <button className='btn'>REGISTER</button>

                <p className='bottom-text'>
                    Already Registered?
                    <Link to="/login">Login</Link>
                </p>

            </form>

        </div>
    )
}

export default Reg