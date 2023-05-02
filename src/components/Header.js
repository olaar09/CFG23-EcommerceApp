import React from "react";
import Logo from './Home/beaute_logo_lb.svg'
import './Header.css';

const Header = () => {

    return(

        <div className="Header">
            <img src={Logo} className="App-logo" alt="logo" />  
        </div>
    )
}

export default Header
