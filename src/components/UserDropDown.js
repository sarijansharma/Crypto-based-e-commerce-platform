import react, { useState } from 'react';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import './style.css'
const UserDropDown= ()=>{

    const [isDroppedDown, setIsDroppedDown]= useState(false);
    const handleMouseEnter = () => {
        setIsDroppedDown(true);
    };

    const handleMouseLeave = () => {
        setIsDroppedDown(false);
    };

    const handleItemClick = (item) => {
    
        console.log("Clicked", item);
        
    };
   return (
     <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <p className='user-button' >
            <AccountCircleOutlinedIcon />
            User
        </p>
        {isDroppedDown &&
            <div className='dropped-menu'>
                <ul className='drop-list'>
                        <li onClick={() => handleItemClick("Profile")}>Profile</li>
                        <li onClick={() => handleItemClick("Wishlist")}>Wishlist</li>
                        <li onClick={() => handleItemClick("My Orders")}>My Orders</li>
                        <li onClick={() => handleItemClick("Logout")}>Logout</li>
                    </ul>
            </div>
            
        }
        
       

    </div>
    );
}

export default UserDropDown;