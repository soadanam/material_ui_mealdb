import React from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom';


const Navigation = () => {
    return (
        <nav>
            <NavLink to="/home" className='nav-item'>Home</NavLink>
            <NavLink to="/restaurant" className='nav-item'>Restaurant</NavLink>
            <NavLink to="/home/about" className='nav-item'>About Us</NavLink>
        </nav>
    );
};

export default Navigation;