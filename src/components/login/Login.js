import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'

import './Login.css';

async function LoginUser(credentials) {
    const navigate = useNavigate();
    const awsLoginUrl = 'http://localhost:8080/login'
    return fetch(awsLoginUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
    .then(data => data.json())
}

export default function Login({setToken}){
    const navigate = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await LoginUser({
            email,
            password
        });
        setToken(token);
    }

    return (
        <div className="login-wrappper">
            <h1>Wall street Carrer</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Email </p>
                    <input type="text" onChange={e => setEmail(e.target.value)}/>
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)}/>
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>

                <Link to='/resetPassword'>Forget password?</Link>

                <div>
                    <button type="button" onClick={() => navigate("/createAccount")}>Create an account</button>
                </div>
            </form>
        </div>
    )
}