import React from 'react';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md">
      <div className="text-xl font-bold">Loja</div>
      <ul className="flex gap-6 text-sm">
        <li>Home</li>
        <li>Clothes</li>
        <li>Accessories</li>
        <li>Appliances</li>
        <li>Loja Products</li>
        <li>About Us</li>
      </ul>
      <div className="flex gap-4 text-sm">
        <button>Login / Register</button>
        <button>Contact Us</button>
      </div>
    </nav>
  );
}
