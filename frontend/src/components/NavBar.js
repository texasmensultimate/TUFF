import React from 'react';
import { Link } from 'react-router-dom';
import NavBarButton from './NavBarButton';

const NavBar = () => {
    return (
        <nav className="w-full bg-black border-t-4 border-b-4 border-lighter-burnt-orange shadow relative z-10">
            <div className="container mx-auto flex items-center justify-between px-4 py-0">
                {/* Left side of the Navbar */}
                <NavBarButton to="/about">About</NavBarButton>
                <NavBarButton to="/roster">Roster</NavBarButton>
                <NavBarButton to="/schedule">Schedule</NavBarButton>
                <NavBarButton to="/interest">Interest</NavBarButton>

                {/* Center Logo as a button */}
                <Link to="/" className="mx-5 relative z-50 flex justify-center items-center">
                    <div className="relative" style={{ width: '180px', height: '180px', marginTop: '-40px', marginBottom: '-40px' }}>
                        <div className="absolute inset-0 rounded-full shadow-lg bg-black border-4 border-lighter-burnt-orange"></div>
                        <div className="absolute inset-2 rounded-full overflow-hidden flex items-center justify-center">
                            <img
                                src="/Longhorn.png"
                                alt="Longhorn Logo"
                                className="w-10/12 h-10/12 object-contain"
                            />
                        </div>
                    </div>
                </Link>

                {/* Right side of the Navbar */}
                <NavBarButton to="/news">News</NavBarButton>
                <NavBarButton to="/gallery">Gallery</NavBarButton>
                <NavBarButton to="/merch">Merch</NavBarButton>
                <NavBarButton to="/contact">Contact</NavBarButton>
            </div>
        </nav>
    );
};

export default NavBar;
