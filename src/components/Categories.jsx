import React from 'react';

const categories = ['Clothing', 'Accessories', 'Loja Products'];

export default function Categories() {
  return (
    <section className="py-10 px-6">
      <h2 className="text-2xl font-semibold mb-6">Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div key={category} className="p-4 border rounded shadow-sm">
            <h3 className="text-lg font-medium">{category}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
