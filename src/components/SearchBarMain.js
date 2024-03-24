import SignInButton from "./SignInButton";
import DownloadButton from "./DownloadButton";
import SearchBar from "./SearchBar";
import logo from "./Images/MainLogo.png"
import ConnectWallet  from "./ConnectWallet";
import UserDropDown from "./UserDropDown";
import './style.css';

const Search= ({showSearchBar})=>{
    return(
        <div className="search-bar-container">
            <img src={logo} alt="My logo" style={{ width: '50px', height: '45px' }} />
            {showSearchBar && <SearchBar />}
            {/* <SignInButton /> */}
            <UserDropDown />
            <ConnectWallet />
            <DownloadButton />

        </div>
    );
};

export default Search;