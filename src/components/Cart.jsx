import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartProvider';

const Cart = () => {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice
  } = useCart();

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Shopping Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg mb-4">Your cart is empty</p>
          <Link
            to="/mens"
            className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cart.map((item) => (
              <div
                key={`${item.id}-${item.size}`}
                className="border-b pb-6 flex flex-col sm:flex-row gap-4"
              >
                <div className="w-full sm:w-32 h-32 bg-gray-100 rounded overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1">
                  <div className="flex justify-between">
                    <h2 className="text-xl font-medium">{item.name}</h2>
                    <button
                      onClick={() => removeFromCart(item.id, item.size)}
                      className="text-gray-500 hover:text-black"
                    >
                      ×
                    </button>
                  </div>

                  <p className="text-gray-600">Size: {item.size}</p>

                  {/* Total price per item */}
                  <p className="font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                    <span className="text-sm text-gray-500 ml-2">
                      (${item.price.toFixed(2)} x {item.quantity})
                    </span>
                  </p>

                  <div className="flex items-center mt-2">
                    <button
                      onClick={() =>
                        updateQuantity(
                          item.id,
                          item.size,
                          Math.max(1, item.quantity - 1)
                        )
                      }
                      className="px-3 py-1 border rounded-l hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="px-4 py-1 border-t border-b">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.size, item.quantity + 1)
                      }
                      className="px-3 py-1 border rounded-r hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="border p-6 h-fit">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal ({totalItems} items)</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>FREE</span>
              </div>
              <div className="border-t pt-4 flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
            </div>

            <button
              className="w-full bg-black text-white py-3 rounded mt-6 hover:bg-gray-800"
              onClick={() => alert('Proceeding to checkout!')}
            >
              Proceed to Checkout
            </button>

            <button
              onClick={clearCart}
              className="w-full border border-black py-3 rounded mt-4 hover:bg-gray-100"
            >
              Clear Cart
            </button>

            <Link
              to="/mens"
              className="block text-center mt-4 text-blue-600 hover:underline"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
