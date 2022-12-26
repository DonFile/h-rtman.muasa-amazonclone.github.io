import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const signIn = (e) => {
        e.preventDefault(e)
        console.log(email,password)

    }
    return (
        <div className='login'>
            <img className='login_logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png' alt='' />
            <div className='form_container'>
                <h1>Sign-in</h1>
                <form onSubmit={signIn}>
                    <div className='login_form'>
                        <label>Email:</label>
                        <input type='text' placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <label>Password:</label>
                        <input type='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button type='submit' onClick={signIn} className='submit_button'>Signin</button>
                    </div>
                </form>
                <div className='checkbox'>
                <button type='checkBox' className='checkbox'></button>
                <p>By signing in you agree to Amazon's Fake clone Conditions of Use & sale.
                        please see our Privacy Notice,our Cookies Notice and our interest based Ads Notice</p>
                    </div>
                <Link to='/signup'>
                    <button className='login_registerButton'>Create your Amazon account</button>
                </Link>
            </div>
        </div>
    )
}

export default Login