
import React, { useState } from 'react';

export default function PasswordReset(){

    const [emailAddress, setEmailAddress] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        // send an email to the user with a button
        console.log('hit the submit button for PasswordReset');
    }

    return (
        <div className="login-wrappper">
            <h1>Wall street Carrer</h1>

            <h2>Forgot Password</h2>

            <p>Enter your email address and we'll send you a link to reset your password</p>

            <form onSubmit={handleSubmit}>
                <label>
                    <p>Email Address</p>
                    <input type="text" onChange={e => setEmailAddress(e.target.value)}/>
                </label>
                
                <div>
                    <button type="submit">Send</button>
                </div>

                <div>
                    <button type="button">Cancal</button>
                </div>

   
            </form>
        </div>
    )
}