// src/components/NavBarButton.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/mobile-nav-button.css';

const NavBarButton = ({ to, children }) => (
    <Link 
        to={to} 
        className="inline-block text-white text-md sm:text-base lg:text-lg font-bold py-2 px-2 mobile-nav-button relative group"
    >
        <span className="relative z-10">{children}</span>
        <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-burnt-orange transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
    </Link>
);

export default NavBarButton;
