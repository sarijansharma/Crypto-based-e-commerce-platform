import React from 'react';
import Button from '@mui/material/Button';

const SignInButton = ({onClick})=>{
    return (
        <Button variant="contained" href="/signin" className='sign-in-button'>
            Sign In
        </Button>
    );
};

export default SignInButton;