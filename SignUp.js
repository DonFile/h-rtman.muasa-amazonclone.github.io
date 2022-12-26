import React,{useState} from 'react'
import './SignUp.css'
import { Link } from 'react-router-dom'
import { useStateValue } from '../StateProvider'


const SignUp = () => {
    const [{user},dispatch] = useStateValue()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    
    const createAccount = (e) => {
        e.preventDefault()
        dispatch ({
            type: 'SET_USER',
            user: user,
                
        })
        console.log(email,password)
    }
  return (
      <div>
          <div className='signup'>
            <img className='signup_logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png' alt='' />
            <div className='form_container'>
                <h1>Sign-up</h1>
                <form onSubmit={createAccount}>
                    <div className='signup_form'>
                        <label>Email:</label>
                        <input type='text' placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <label>Password:</label>
                        <input type='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button type='submit' onClick={createAccount} className='submit_button'>Signup</button>
                    </div>
                </form>
                <p>By signing in you agree to Amazon's Fake clone Conditions of Use & sale.
                      please see our Privacy Notice,our Cookies Notice and our interest based Ads Notice</p>
                  <Link to={'login'}  className='registerButton'>
                      SignIn
                  </Link>
                
            </div>
        </div>
    </div>
  )
}

export default SignUp