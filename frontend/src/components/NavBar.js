// src/components/NavBar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBarButton from './NavBarButton';
import '../assets/styles/NavBar.css';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isMobile = windowWidth < 810; // Using the 'ipad' breakpoint

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="w-full bg-dark-card shadow relative z-10">
            <div className="container mx-auto px-4 py-0 ipad:max-w-none ipad:w-11/12">
                {/* Mobile header - always visible and sticky */}
                {isMobile && (
                    <div className="flex items-center justify-between fixed top-0 left-0 right-0 bg-dark-card z-50 px-4 py-4">
                        <Link to="/" className="flex items-center">
                            <img src="/Longhorn.png" alt="Logo" className="h-12 w-12" />
                        </Link>
                        <div
                            id="nav-icon4"
                            className={isMenuOpen ? 'open' : ''}
                            onClick={toggleMenu}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                )}

                {/* Desktop and iPad menu */}
                {!isMobile && (
                    <div className="flex justify-between items-center">
                        <div className="flex flex-1 justify-evenly items-center">
                            <NavBarButton to="/about">About</NavBarButton>
                            <NavBarButton to="/roster">Roster</NavBarButton>
                            <NavBarButton to="/schedule">Schedule</NavBarButton>
                            <NavBarButton to="/interest">Interest</NavBarButton>
                            <Link to="/" className="mx-4 flex-shrink-0 justify-between">
                                <div className="relative" style={{ width: '120px', height: '120px', marginTop: '-25px', marginBottom: '-25px'}}>
                                    <div className="absolute inset-0 rounded-full shadow-lg bg-dark-bg"></div>
                                    <div className="absolute inset-1 rounded-full overflow-hidden flex items-center justify-center">
                                        <img
                                            src="/Longhorn.png"
                                            alt="Longhorn Logo"
                                            className="w-10/12 h-10/12 object-contain"
                                        />
                                    </div>
                                </div>
                            </Link>
                            <NavBarButton to="/news">News</NavBarButton>
                            <NavBarButton to="/gallery">Gallery</NavBarButton>
                            <NavBarButton to="/merch">Merch</NavBarButton>
                            <NavBarButton to="/contact">Contact</NavBarButton>
                        </div>
                    </div>
                )}

                {/* Mobile menu - sticky and toggleable */}
                {isMobile && (
                    <div className={`fixed top-16 left-0 right-0 bg-dark-card shadow-md transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
                        <div className="flex flex-col items-center py-4">
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
                )}
            </div>
        </nav>
    );
};

export default NavBar;
