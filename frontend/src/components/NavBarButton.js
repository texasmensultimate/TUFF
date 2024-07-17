// src/components/NavBarButton.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavBarButton = ({ to, children }) => (
    <Link 
        to={to} 
        className="text-white text-lg font-bold px-4 py-2 relative group transition-all duration-300"
    >
        {children}
        <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-burnt-orange transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
    </Link>
);

export default NavBarButton;