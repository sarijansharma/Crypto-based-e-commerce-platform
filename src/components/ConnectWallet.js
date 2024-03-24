import React from 'react';
import Button from '@mui/material/Button';

const ConnectWallet = ({onClick})=>{
    return (
        <Button variant="contained" href="#contained-buttons" className='connect-wallet'>
            Connect Wallet
        </Button>
    );
};

export default ConnectWallet;