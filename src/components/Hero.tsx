
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cricket-pitch/10 via-white to-cricket-sky/10">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-cricket-pitch/20 blur-3xl"></div>
        <div className="absolute top-1/3 -left-32 w-80 h-80 rounded-full bg-cricket-sky/20 blur-3xl"></div>
        <div className="absolute -bottom-32 right-1/4 w-64 h-64 rounded-full bg-cricket-ball/20 blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h1 className="animate-fade-in heading-primary mb-6 text-cricket-dark">
          Uncover <span className="text-cricket-accent">Cricket Insights</span> Like Never Before
        </h1>
        
        <p className="animate-slide-up text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          Dive into comprehensive data analysis of IPL cricket from 2008-2024, featuring interactive dashboards, player statistics, and winning strategies.
        </p>
        
        <div className="animate-slide-up flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/dashboards" className="btn-primary bg-cricket-dark hover:bg-cricket-dark/90">
            Explore Dashboards
          </Link>
          <Link to="/teams" className="btn-primary bg-cricket-accent hover:bg-cricket-accent/90">
            View Team Insights
          </Link>
        </div>
      </div>
      
      <button 
        onClick={scrollToContent} 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-soft"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-10 h-10 text-cricket-dark/70" />
      </button>
    </div>
  );
};

export default Hero;
