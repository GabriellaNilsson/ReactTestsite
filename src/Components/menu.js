import React from "react";
import {Link} from 'react-router-dom';

const Menu=()=>{
    return(
        <div classname='navbar'>
            <div classname='manu-container'>
                <ul classname='navbar-links'>
                    <li>
                        <link to="/" classname='navbar-links'>Home</link>
                    </li>
                    <li>
                        <link to="/about" classname='navbar-links'>About</link>
                    </li>
                    <li>
                        <link to="/contact" classname='navbar-links'>Contact</link>
                    </li>
                </ul>
            </div>
        </div>
    );
};
export default Menu;