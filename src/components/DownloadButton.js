import React from 'react';
import Button from '@mui/material/Button';

const DownloadButton = ()=>{
    const HandleDownload= ()=>{
        const PdfPath= './FlipCoinTokenomics.pdf';
        const link= document.createElement('a');
        link.href= PdfPath;
        link.download='Tokenomics.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return(
        <Button  onClick={HandleDownload} variant="contained" href="#contained-buttons" className='sign-in-button'>
            Download Tokenomics
        </Button>
    );
};

export default DownloadButton;