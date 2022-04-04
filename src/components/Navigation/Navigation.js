import React from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom';


const Navigation = () => {

     let activeStyle = {
         textDecoration: 'underline',
         color: 'red',
         fontWeight: 'bold',
     };

    return (
        <nav>
            <NavLink to="/home/" className='nav-item' style={({isActive}) => isActive ? activeStyle : undefined}>Home</NavLink>
            <NavLink to="/restaurant" className='nav-item' style={({isActive}) => isActive ? activeStyle : undefined}>Restaurant</NavLink>
            <NavLink to="/home/about" className='nav-item' style={({isActive}) => isActive ? activeStyle : undefined}>About Us</NavLink>
        </nav>
    );
};

export default Navigation;