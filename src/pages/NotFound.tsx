
import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center">
        <div className="max-w-md w-full px-6 py-12 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-cricket-ball/10 mb-4">
              <span className="text-4xl font-bold text-cricket-dark">404</span>
            </div>
            <h1 className="heading-secondary mb-2">Howzat?</h1>
            <p className="text-gray-600">
              The page you're looking for seems to have been caught out!
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
            <p className="text-cricket-dark mb-4">
              Just like a ball lost outside the boundary, this page can't be found.
            </p>
            <Link 
              to="/" 
              className="btn-primary bg-cricket-dark hover:bg-cricket-dark/90 w-full"
            >
              Return to Home Ground
            </Link>
          </div>
          
          <p className="text-sm text-gray-500">
            If you believe this is an error, please contact our team.
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
