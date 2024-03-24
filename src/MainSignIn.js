import react from 'react';
import SignIn from './SignIn'
import SearchBar from './components/SearchBarMain'
// import './SignIn.css'

const MainSignIn = ()=>{
    return(
        <div >
            <SearchBar showSearchBar={false}/>
            <SignIn />
        </div>  
    );
}

export default MainSignIn;