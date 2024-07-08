import React from 'react';
import { Link } from 'react-router-dom';

// Separate component for NavLinks to reduce repetition
const NavBarButton = ({ to, children }) => (
    <Link 
        to={to} 
        className="text-lighter-burnt-orange text-2xl hover:text-burnt-orange px-4 py-1 transition-all duration-300 font-anton"
    >
        {children}
    </Link>
);

export default NavBarButton;
