// src/components/NavBar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBarButton from './NavBarButton';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="w-full bg-dark-card shadow relative z-10">
            <div className="container mx-auto px-4 py-0">
                <div className="flex items-center justify-between">
                    {/* Mobile menu button */}
                    <button 
                        className="md:hidden text-white focus:outline-none"
                        onClick={toggleMenu}
                    >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                        </svg>
                    </button>

                    {/* Desktop menu */}
                    <div className="hidden md:flex items-center justify-between flex-grow">
                        <div className="flex items-center space-x-4">
                            <NavBarButton to="/about">About</NavBarButton>
                            <NavBarButton to="/roster">Roster</NavBarButton>
                            <NavBarButton to="/schedule">Schedule</NavBarButton>
                            <NavBarButton to="/interest">Interest</NavBarButton>
                        </div>
                        {/* Center Logo as a button */}
                    <Link to="/" className="mx-5 relative z-50 flex justify-center items-center">
                        <div className="relative" style={{ width: '120px', height: '120px', marginTop: '-20px', marginBottom: '-20px' }}>
                            <div className="absolute inset-0 rounded-full shadow-lg bg-dark-bg"></div>
                            <div className="absolute inset-2 rounded-full overflow-hidden flex items-center justify-center">
                                <img
                                    src="/Longhorn.png"
                                    alt="Longhorn Logo"
                                    className="w-10/12 h-10/12 object-contain"
                                />
                            </div>
                        </div>
                    </Link>
                        <div className="flex items-center space-x-4">
                            <NavBarButton to="/news">News</NavBarButton>
                            <NavBarButton to="/gallery">Gallery</NavBarButton>
                            <NavBarButton to="/merch">Merch</NavBarButton>
                            <NavBarButton to="/contact">Contact</NavBarButton>
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} pt-2 pb-4`}>
                    <NavBarButton to="/about">About</NavBarButton>
                    <NavBarButton to="/roster">Roster</NavBarButton>
                    <NavBarButton to="/schedule">Schedule</NavBarButton>
                    <NavBarButton to="/interest">Interest</NavBarButton>
                    <NavBarButton to="/news">News</NavBarButton>
                    <NavBarButton to="/gallery">Gallery</NavBarButton>
                    <NavBarButton to="/merch">Merch</NavBarButton>
                    <NavBarButton to="/contact">Contact</NavBarButton>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;