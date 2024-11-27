import { LOGO_URL } from "../utils/constants";
import {useState} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = ({ setFilteredRestaurants, restaurants }) => {
    const [btnNameReact, setBtnNameReact] = useState('Login');
    const onlineStatus = useOnlineStatus();
    return (
        <div className="header">
            <div className='logo-container'>
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className='web_name-container'>
                <h1 className="web_name">Swiggitto</h1>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>
                        <Link to="/" onClick={() => setFilteredRestaurants(restaurants)}>
                            <i className="fas fa-home"></i>
                            <span className='nitems'>Home</span>
                        </Link>
                    </li>
                    <li>
                        Online Status : {onlineStatus ? <i className="fas fa-wifi" style={{color: "green"}}></i> : <i className="fas fa-wifi" style={{color: "red"}}></i>}
                    </li>
                    <li><Link to="/about"><i className="fas fa-info-circle"></i><span className='nitems'>About Us</span></Link></li>
                    <li><Link to="/contactus"><i className="fas fa-phone"></i><span className='nitems'>Contact Us</span></Link></li>
                    <li><Link to="/cart"><i className="fas fa-shopping-cart"></i><span className='nitems'> Cart</span></Link></li>
                    <li><span className='login' onClick={() => { btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login"); }}>{btnNameReact}</span></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;