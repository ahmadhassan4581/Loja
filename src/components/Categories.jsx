import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const categoryData = {
  MENS: ['Formal Wear', 'Casual Wear', 'Sportswear', 'Loungewear'],
  WOMENS: ['Dresses', 'Jeans', 'Jackets', 'Activewear', 'Lingerie'],
  ACCESSORIES: ['Carried Accessories', 'Worn Accessories'],
};

export default function Categories() {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  return (
    <section className="py-10 px-6">
      <h2 className="text-2xl font-semibold mb-6">Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {Object.entries(categoryData).map(([category, subcategories]) => (
          <div key={category} className="p-4 border rounded shadow-sm">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleCategory(category)}
            >
              <h3 className="text-lg font-medium">{category}</h3>
              {openCategory === category ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
            {openCategory === category && (
              <ul className="mt-3 pl-4 list-disc text-sm text-gray-700">
                {subcategories.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
