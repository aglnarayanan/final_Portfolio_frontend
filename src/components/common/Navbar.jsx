import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../config/firebase';
import { signOut } from 'firebase/auth';

export default function Navbar() {
  const [log, setLog] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setLog(!!user);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setLog(false);
        navigate('/login');
      })
      .catch(error => console.error('Sign out error:', error));
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            
            <span className="ml-2 text-gray-800 font-semibold">Lakshmi Narayanan</span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6 items-center">
            <Link to="/home" className="text-gray-700 hover:text-indigo-600 font-medium">Home</Link>
            <Link to="/projects" className="text-gray-700 hover:text-indigo-600 font-medium">Projects</Link>
            <Link to="/blogs" className="text-gray-700 hover:text-indigo-600 font-medium">Blog</Link>
            <Link to="/contact" className="text-gray-700 hover:text-indigo-600 font-medium">Contact</Link>

            {log ? (
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium transition"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => navigate('/login')}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium transition"
              >
                Login
              </button>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="text-gray-800 hover:text-indigo-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden bg-white shadow-lg w-full absolute top-16 left-0">
          <nav className="flex flex-col space-y-4 p-4">
            <Link to="/home" onClick={() => setIsMobileOpen(false)} className="text-gray-700 hover:text-indigo-600">Home</Link>
            <Link to="/projects" onClick={() => setIsMobileOpen(false)} className="text-gray-700 hover:text-indigo-600">Projects</Link>
            <Link to="/blogs" onClick={() => setIsMobileOpen(false)} className="text-gray-700 hover:text-indigo-600">Blog</Link>
            <Link to="/contact" onClick={() => setIsMobileOpen(false)} className="text-gray-700 hover:text-indigo-600">Contact</Link>

            {log ? (
              <button
                onClick={() => {
                  handleLogout();
                  setIsMobileOpen(false);
                }}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-left w-full"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => {
                  navigate('/login');
                  setIsMobileOpen(false);
                }}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-left w-full"
              >
                Login
              </button>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
