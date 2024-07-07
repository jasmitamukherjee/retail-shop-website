import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="lg:hidden fixed top-0 right-0 z-50 p-4 text-gray-500 focus:outline-none"
        aria-label="Toggle navigation"
        onClick={toggleMenu}
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M5.293 5.293a1 1 0 0 1 1.414 0L10 8.586l3.293-3.293a1 1 0 1 1 1.414 1.414L11.414 10l3.293 3.293a1 1 0 0 1-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 1 1-1.414-1.414L8.586 10 5.293 6.707a1 1 0 0 1 0-1.414z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M2.75 4.75a.75.75 0 1 1 1.5 0v10.5a.75.75 0 1 1-1.5 0v-10.5zm5 0a.75.75 0 1 1 1.5 0v10.5a.75.75 0 1 1-1.5 0v-10.5zm5 0a.75.75 0 1 1 1.5 0v10.5a.75.75 0 1 1-1.5 0v-10.5zm5 0a.75.75 0 1 1 1.5 0v10.5a.75.75 0 1 1-1.5 0v-10.5z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50">
          <div className="flex justify-end p-4">
            <button
              className="text-gray-500 focus:outline-none"
              aria-label="Close navigation"
              onClick={toggleMenu}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5.293 5.293a1 1 0 0 1 1.414 0L10 8.586l3.293-3.293a1 1 0 1 1 1.414 1.414L11.414 10l3.293 3.293a1 1 0 0 1-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 1 1-1.414-1.414L8.586 10 5.293 6.707a1 1 0 0 1 0-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          {/* Menu content */}
          <div className="flex flex-col items-center justify-center h-screen">
            <ul className="text-center">
              <li className="mb-4">
                <Link
                  className="text-gray-300 hover:text-white text-lg py-2 px-4 block"
                  to='/our-shops'
                  onClick={toggleMenu}
                >
                  Our Shops
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  className="text-gray-300 hover:text-white text-lg py-2 px-4 block"
                  to='/products'
                  onClick={toggleMenu}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-300 hover:text-white text-lg py-2 px-4 block"
                  to='/contact-us'
                  onClick={toggleMenu}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Main Navbar */}
      <nav className="bg-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link className="text-xl font-bold text-gray-800 no-underline" to='/'>Rangoli</Link>

            {/* Desktop Navbar links (hidden on mobile) */}
            <div className="hidden lg:flex lg:flex-grow lg:items-center lg:w-auto">
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                <li className="nav-item">
                  <Link
                    className="block px-3 py-2 text-sm font-bold text-gray-700 hover:text-gray-900 no-underline"
                    aria-current="page"
                    to='/our-shops'
                  >
                    Our Shops
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="block px-3 py-2 text-sm font-bold text-gray-700 hover:text-gray-900 no-underline"
                    aria-current="page"
                    to='/products'
                  >
                    Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="block px-3 py-2 text-sm font-bold text-gray-700 hover:text-gray-900 no-underline"
                    to='/contact-us'
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
