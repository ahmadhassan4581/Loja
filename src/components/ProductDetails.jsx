import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data';
import { useCart } from './CartProvider';
import { Link } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const allProducts = [...data.MENS, ...data.WOMENS, ...data.ACCESSORIES];
  const product = allProducts.find(item => item.id === id);

  if (!product) {
    return (
      <div className="py-10 px-6 text-center">
        <h2 className="text-2xl mb-4">Product not found</h2>
        <Link 
          to="/mens" 
          className="bg-black text-white px-4 py-2 rounded inline-block"
        >
          Return to Shop
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    addToCart(product, selectedSize, quantity);
    alert(`${product.name} added to cart!`);
  };

  return (
    <section className="py-10 px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="bg-gray-100 rounded-lg overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-2xl font-semibold">${product.price.toFixed(2)}</p>
          </div>
          
          <p className="text-gray-700 pb-4 border-b">Premium quality product with excellent craftsmanship.</p>

          {/* Size Selection */}
          <div className="pt-4">
            <h2 className="text-lg font-medium mb-4">Select Size</h2>
            <div className="flex gap-3">
              {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
                <button
                  key={size}
                  className={`w-12 h-12 flex items-center justify-center border-2 rounded-md transition-all
                    ${selectedSize === size 
                      ? 'border-black bg-black text-white' 
                      : 'border-gray-300 hover:border-gray-500'}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            className="w-full bg-black text-white py-4 rounded-md hover:bg-gray-800 text-lg font-medium"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>

          {/* Product Meta */}
          <div className="pt-6 border-t">
            <div className="flex gap-4 mb-2">
              <span className="font-medium">Category:</span>
              <span>{product.category.includes('Men') ? "Men's Clothing" : "Women's Clothing"}</span>
            </div>
            <div className="flex gap-4">
              <span className="font-medium">Tags:</span>
              <div className="flex gap-2">
                <span className="bg-gray-100 px-2 py-1 rounded text-sm">Modern</span>
                <span className="bg-gray-100 px-2 py-1 rounded text-sm">Latest</span>
                <span className="bg-gray-100 px-2 py-1 rounded text-sm">
                  {product.category.includes('Men') ? 'Masculine' : 'Feminine'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
