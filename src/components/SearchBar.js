import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import "./style.css"
const SearchBar = ()=>{
    return(
        <div>
            <input type="text" placeholder='Search for Products' className='search-bar'/>
            <button className='search-button'>Search</button>
        </div>
        
    );
};

export default SearchBar;