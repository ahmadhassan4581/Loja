import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 py-4 sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-2xl font-extrabold text-indigo-600">
          <Link to="/">Loja</Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          {[
            { label: 'Home', to: '/' },
            { label: 'Mens', to: '/mens' },
            { label: 'Womens', to: '/womens' },
            { label: 'Accessories', to: '/accessories' },
            { label: 'About Us', to: '/about-us' },
          ].map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className="hover:text-indigo-600 transition duration-200"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-4">
          <button className="text-sm text-gray-600 hover:text-indigo-600 transition">
            Login / Register
          </button>
          <button className="text-sm text-gray-600 hover:text-indigo-600 transition">
            Contact Us
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 px-4 py-3 bg-white rounded-md shadow space-y-3">
          <ul className="space-y-2 text-sm font-medium text-gray-700">
            <li>
              <Link to="/" onClick={() => setIsOpen(false)} className="block hover:text-indigo-600">
                Home
              </Link>
            </li>
            <li>
              <Link to="/mens" onClick={() => setIsOpen(false)} className="block hover:text-indigo-600">
                Mens
              </Link>
            </li>
            <li>
              <Link to="/womens" onClick={() => setIsOpen(false)} className="block hover:text-indigo-600">
                Womens
              </Link>
            </li>
            <li>
              <Link to="/accessories" onClick={() => setIsOpen(false)} className="block hover:text-indigo-600">
                Accessories
              </Link>
            </li>
            <li>
              <Link to="/about-us" onClick={() => setIsOpen(false)} className="block hover:text-indigo-600">
                About Us
              </Link>
            </li>
          </ul>
          <div className="pt-3 border-t text-sm text-gray-700 space-y-2">
            <button className="block w-full text-left hover:text-indigo-600">Login / Register</button>
            <button className="block w-full text-left hover:text-indigo-600">Contact Us</button>
          </div>
        </div>
      )}
    </nav>
  );
}
