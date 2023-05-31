import React, { useState } from 'react';
import './Signup.css'
export default function SignupForm({setToken}) {


async function RegisterUser(credentials) {
    const awsLoginUrl = 'https://aaiiuxs4r8.execute-api.us-east-1.amazonaws.com/prod/registrations'
    console.log(`credentials: ${JSON.stringify(credentials, null, 4)}`)
    return fetch(awsLoginUrl, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(data => data.json())
}

// States for registration
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

// Handling the name change
const handleName = (e) => {
setName(e.target.value);
setSubmitted(false);
};

// Handling the email change
const handleEmail = (e) => {
setEmail(e.target.value);
setSubmitted(false);
};

// Handling the password change
const handlePassword = (e) => {
setPassword(e.target.value);
setSubmitted(false);
};

// Handling the form submission
const handleSubmit = async (e) => {
e.preventDefault();
if (name === '' || email === '' || password === '') {
    setError(true);
} else {
    const token = await RegisterUser({
        name,
        email,
        password
    });
    setToken(token);
    }
};


// Showing success message
const successMessage = () => {
return (
<div
className="success"
style={{
display: submitted ? '' : 'none',
}}>
<h1>User {name} successfully registered!!</h1>
</div>
);
};

// Showing error message if error is true
const errorMessage = () => {
return (
<div
className="error"
style={{
display: error ? '' : 'none',
}}>
<h1>Please enter all the fields</h1>
</div>
);
};

return (
<div className="Signup">
<div>
<h1>User Registration</h1>
</div>

{/* Calling to the methods */}
<div className="messages">
{errorMessage()}
{successMessage()}
</div>

<form onSubmit={handleSubmit}>
{/* Labels and inputs for form data */}
<label className="label">Name</label>
<input onChange={handleName} className="input"
value={name} type="text" />

<label className="label">Email</label>
<input onChange={handleEmail} className="input"
value={email} type="email" />

<label className="label">Confirm Email</label>
<input onChange={handleEmail} className="input"
value={email} type="email" />

<label className="label">Password</label>
<input onChange={handlePassword} className="input"
value={password} type="password" />

<label className="label">Confirm Password</label>
<input onChange={handlePassword} className="input"
value={password} type="password" />

<button className="btn" type="submit">
Submit
</button>
</form>
</div>
);
}