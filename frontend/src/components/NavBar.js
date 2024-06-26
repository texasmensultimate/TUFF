import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { throttle } from 'lodash';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
      setIsHidden(scrollPosition > 200); // Adjust this value as needed
    }, 200); // Throttle the scroll event to run at most every 200ms

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-white shadow transition-all duration-300 ${
        isScrolled ? 'h-12' : 'h-20'
      } ${isHidden ? 'opacity-0' : 'opacity-100'}`}
      style={{ zIndex: 1000, paddingLeft: '1rem', paddingRight: '1rem' }}
    >
      <div className="container mx-auto flex justify-between items-center h-full transition-all duration-300 relative px-4">
        <Link to="/">
          <img
            src="/Texas Ultimate.jpeg"
            alt="Texas Ultimate"
            className={`h-12 transition-all duration-300 ${
              isScrolled ? 'opacity-0' : 'opacity-100'
            }`}
          />
        </Link>
        <div className={`space-x-4 flex transition-all duration-300 ${isScrolled ? 'opacity-0' : 'opacity-100'}`}>
          <Link to="/about" className="relative text-orange-600 text-xl font-bold hover:text-white hover:bg-orange-600 hover:rounded-full hover:px-4 hover:py-2 hover:font-extrabold transition-all duration-300">
            About
          </Link>
          <Link to="/roster" className="relative text-orange-600 text-xl font-bold hover:text-white hover:bg-orange-600 hover:rounded-full hover:px-4 hover:py-2 hover:font-extrabold transition-all duration-300">
            Roster
          </Link>
          <Link to="/schedule" className="relative text-orange-600 text-xl font-bold hover:text-white hover:bg-orange-600 hover:rounded-full hover:px-4 hover:py-2 hover:font-extrabold transition-all duration-300">
            Schedule
          </Link>
          <Link to="/interest" className="relative text-orange-600 text-xl font-bold hover:text-white hover:bg-orange-600 hover:rounded-full hover:px-4 hover:py-2 hover:font-extrabold transition-all duration-300">
            Interest
          </Link>
          <Link to="/news" className="relative text-orange-600 text-xl font-bold hover:text-white hover:bg-orange-600 hover:rounded-full hover:px-4 hover:py-2 hover:font-extrabold transition-all duration-300">
            News
          </Link>
          <Link to="/gallery" className="relative text-orange-600 text-xl font-bold hover:text-white hover:bg-orange-600 hover:rounded-full hover:px-4 hover:py-2 hover:font-extrabold transition-all duration-300">
            Gallery
          </Link>
          <Link to="/merch" className="relative text-orange-600 text-xl font-bold hover:text-white hover:bg-orange-600 hover:rounded-full hover:px-4 hover:py-2 hover:font-extrabold transition-all duration-300">
            Merch
          </Link>
          <Link to="/contact" className="relative text-orange-600 text-xl font-bold hover:text-white hover:bg-orange-600 hover:rounded-full hover:px-4 hover:py-2 hover:font-extrabold transition-all duration-300">
            Contact
          </Link>
        </div>
        <img 
          src="/Longhorn.png" 
          alt="Longhorn Logo" 
          className={`absolute left-1/2 transform -translate-x-1/2 h-32 transition-all duration-300 ${
            isScrolled ? 'top-2' : 'top-2'
          }`} 
          style={{ zIndex: 10, margin: 0, padding: 0 }}
        />
      </div>
    </nav>
  );
};

export default NavBar;
