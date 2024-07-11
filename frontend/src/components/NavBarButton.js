// src/components/NavBarButton.js
import React from 'react';
import { Link } from 'react-router-dom';

// Separate component for NavLinks to reduce repetition
const NavBarButton = ({ to, children }) => (
    <Link 
        to={to} 
        className="text-light-text text-lg font-bold hover:bg-burnt-orange hover:text-white px-4 py-2 rounded-full transition-all duration-300"
    >
        {children}
    </Link>
);

export default NavBarButton;
