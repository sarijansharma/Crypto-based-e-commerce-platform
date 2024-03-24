// src/components/SignIn.js
import React, { useState } from 'react';
import './SignIn.css'

const SignIn = () => {
  const [isSignIn, setIsSignIn]= useState(true);
  const [confirmPassword,setConfirmPassword]=useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const toggleForm= ()=>{
    setIsSignIn(!isSignIn);
  }

  const handleSignIn = () => {
    // Add your sign-in logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const HandleSignUp=()=>{
    console.log('Email:',email);
    console.log('Password:',password);
    console.log('confirmPassword', confirmPassword)
  }
  return (
    <div>
      <h2>{isSignIn ? 'Sign In' : 'Sign Up'}</h2>
      <div className='sign-in-container'>
      <form >
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{margin: '0 0 10px 37px'}}/>
        <br />
        <label>Password:</label> <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{margin: '0 0 10px 10px'}} />
        <br />
        {!isSignIn && (
        <>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </>
      )}
        <button onClick={isSignIn ? handleSignIn : HandleSignUp}>
          {isSignIn ? 'Sign In' : 'Sign Up'}
        </button>
        <p onClick={toggleForm} style={{cursor:'pointer' }}>{isSignIn ?'Make an account' : 'Already have an account? Log into your account'}</p>
      </form>
    </div>
    </div>
    
  );
};

export default SignIn;
