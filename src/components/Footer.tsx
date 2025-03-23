
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-cricket-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="text-2xl font-bold mb-4">Cricket<span className="text-cricket-accent">Insights</span></div>
            <p className="text-gray-300 mb-6 max-w-md">
              Comprehensive data analysis of IPL cricket (2008-2024), featuring interactive dashboards, 
              player statistics, and performance analytics.
            </p>
            <p className="text-sm text-gray-400">
              Data source: IPL Complete Dataset (2008-2024) from Kaggle
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/dashboards" className="text-gray-300 hover:text-white transition-colors">Dashboards</Link></li>
              <li><Link to="/teams" className="text-gray-300 hover:text-white transition-colors">Teams</Link></li>
              <li><Link to="/players" className="text-gray-300 hover:text-white transition-colors">Players</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">API Documentation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Dataset Info</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Methodology</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="py-6 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Cricket Insights. All rights reserved.
          </p>
          <div className="mt-4 sm:mt-0">
            <ul className="flex space-x-6">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
