
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-cricket-dark font-bold text-2xl">Cricket<span className="text-cricket-accent">Insights</span></span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-800 hover:text-cricket-accent transition-colors">Home</Link>
            <Link to="/dashboards" className="text-gray-800 hover:text-cricket-accent transition-colors">Dashboards</Link>
            <Link to="/teams" className="text-gray-800 hover:text-cricket-accent transition-colors">Teams</Link>
            <Link to="/players" className="text-gray-800 hover:text-cricket-accent transition-colors">Players</Link>
            <Link to="/about" className="text-gray-800 hover:text-cricket-accent transition-colors">About</Link>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800 hover:text-cricket-accent focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-cricket-accent" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/dashboards" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-cricket-accent" onClick={() => setIsMenuOpen(false)}>Dashboards</Link>
            <Link to="/teams" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-cricket-accent" onClick={() => setIsMenuOpen(false)}>Teams</Link>
            <Link to="/players" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-cricket-accent" onClick={() => setIsMenuOpen(false)}>Players</Link>
            <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-cricket-accent" onClick={() => setIsMenuOpen(false)}>About</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
