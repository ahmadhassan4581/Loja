import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';

const Accessoriese = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-10 border-b-4 border-indigo-500 inline-block">
        Accessories
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {data.ACCESSORIES.map((item) => (
          <Link 
            key={item.id} 
            to={`/product/${item.id}`}
            className="bg-white shadow-lg rounded-xl p-5 hover:shadow-2xl transition duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.name}</h3>
            <p className="text-sm text-gray-600 mb-3">{item.description}</p>
            <p className="text-lg font-bold text-indigo-600">${item.price.toFixed(2)}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Accessoriese;
