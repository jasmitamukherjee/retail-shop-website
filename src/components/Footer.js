import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="row text-center md:text-left">
          {/* Footer Brand */}
          <div className="col-md-4 mb-4 md:mb-0">
            <h5 className="font-bold text-lg mb-2">Rangoli</h5>
            <p className="text-sm">Your one-stop shop for all kinds of items.</p>
          </div>
          {/* Footer Links */}
          <div className="col-md-4 mb-4 md:mb-0">
            <h5 className="font-bold text-lg mb-2">Quick Links</h5>
            <Link to="/" className="block text-sm text-gray-300 font-bold hover:text-white no-underline mb-2">Home</Link>
            <Link to="/our-shops" className="block text-sm text-gray-300 font-bold hover:text-white no-underline mb-2">Our Shops</Link>
            <Link to="/products" className="block text-sm text-gray-300 font-bold hover:text-white no-underline mb-2">Products</Link>
            <Link to="/contact-us" className="block text-sm text-gray-300 font-bold hover:text-white no-underline">Contact Us</Link>
          </div>
          {/* Footer Social Icons */}
          <div className="col-md-4">
            <h5 className="font-bold text-lg mb-2">Follow Us</h5>
            <div className="flex justify-center md:justify-end space-x-4">
              <Link to="/" className="text-gray-300 hover:text-white no-underline">
                <FaFacebook size="1.5em" />
              </Link>
              <Link to="/" className="text-gray-300 hover:text-white no-underline">
                <FaTwitter size="1.5em" />
              </Link>
              <Link to="/" className="text-gray-300 hover:text-white no-underline">
                <FaInstagram size="1.5em" />
              </Link>
              <Link to="/" className="text-gray-300 hover:text-white no-underline">
                <FaLinkedin size="1.5em" />
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="text-sm">&copy; 2024 Rangoli. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
