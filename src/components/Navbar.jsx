import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // or use any icon library you prefer

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">Loja</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Clothes</li>
          <li className="cursor-pointer">Accessories</li>
          <li className="cursor-pointer">Appliances</li>
          <li className="cursor-pointer">Loja Products</li>
          <li className="cursor-pointer">About Us</li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-4 text-sm">
          <button className="hover:underline">Login / Register</button>
          <button className="hover:underline">Contact Us</button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 text-sm">
          <ul className="space-y-2">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Clothes</li>
            <li className="cursor-pointer">Accessories</li>
            <li className="cursor-pointer">Appliances</li>
            <li className="cursor-pointer">Loja Products</li>
            <li className="cursor-pointer">About Us</li>
          </ul>
          <div className="pt-2 border-t space-y-2">
            <button className="block w-full text-left">Login / Register</button>
            <button className="block w-full text-left">Contact Us</button>
          </div>
        </div>
      )}
    </nav>
  );
}
