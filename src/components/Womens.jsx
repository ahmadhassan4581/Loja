// Mens.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';

const Womens = () => {
  const womensItems = data.WOMENS;

  return (
    <section className="py-10 px-6">
      <h2 className="text-2xl font-semibold mb-6">Women's Collection</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {womensItems.map((item) => (
          <Link key={item.id} to={`/product/${item.id}`} className="border rounded p-4 shadow-sm hover:shadow-md transition-shadow">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-60 object-cover rounded mb-4"
            />
            <h3 className="text-lg font-medium">{item.name}</h3>
            <p className="text-sm text-gray-500">{item.category}</p>
            <p className="mt-2 font-semibold">${item.price.toFixed(2)}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Womens;