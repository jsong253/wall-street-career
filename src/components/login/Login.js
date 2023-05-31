// https://www.digitalocean.com/community/tutorials/how-to-add-login-authentication-to-react-applications
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'

import './Login.css';
import axios from 'axios'

// async function LoginUser(credentials) {
//     const awsLoginUrl = 'https://aaiiuxs4r8.execute-api.us-east-1.amazonaws.com/prod/registrations'
//     console.log(`credentials: ${JSON.stringify(credentials, null, 4)}`)

//     return fetch(awsLoginUrl, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(credentials)
//     })
//     .then(data => data.json())
// }

async function LoginUser({email, password}) {               // destructuring the passin object
    const awsLoginUrl = `https://aaiiuxs4r8.execute-api.us-east-1.amazonaws.com/prod/registrations?email=${email}&password=${password}`
    //console.log(`credentials: ${JSON.stringify(credentials, null, 4)}`)
    console.log(`email: ${email}`)
    console.log(`password: ${password}`)
    const options = {
        method:'POST',
        url:awsLoginUrl,
        data:JSON.stringify({email, password}),
        // headers:{Authorization:`Bearer ${token}`}
    }

    try{
        await axios.request(options)                            // must use await to have the request completed otherwise you get cors missing origin error
        console.log(`success to call aws log in`)
    } catch (e)  {
        console.log(`failed to call aws log in with error: ${e}`)
    }
}


export default function Login(){
    const navigate = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        console.log(`before calling aws end point`)
        const token = await LoginUser({email, password});           // the same as {email:email, password:password}
        console.log(`after calling aws end point`)
        console.log(`token: ${JSON.stringify(token, null, 4)}`)
        // setToken(token);
    }

    return (
        <div className="login-wrappper">
            <h1>Wall street Carrer</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Email </p>
                    <input type="email"  name='email' required onChange={e => setEmail(e.target.value)}/>
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" required onChange={e => setPassword(e.target.value)}/>
                </label>
                <div>
                    <button disabled = {!email && !password} type="submit">Submit</button>
                </div>

                <Link to='/resetPassword'>Forget password?</Link>

                <div>
                    <button type="button"  onClick={() => navigate("/pricing")}>Create an account</button>
                </div>
            </form>
        </div>
    )
}