import React from 'react';
import './Header.css'
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <nav className='header'>
            <div>
                <img className='header-img' src={logo} alt="" />
            </div>
            <div>
            <h1>Yoga For Beginners</h1>
            </div>

        </nav>
    );
};

export default Header;