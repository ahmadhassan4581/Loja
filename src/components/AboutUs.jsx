import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-white min-h-screen py-12 px-6 sm:px-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 text-center mb-8 border-b-4 border-indigo-500 inline-block">
          About Loja
        </h1>

        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Welcome to <span className="font-semibold text-indigo-600">Loja</span> — your one-stop destination for the latest fashion trends, timeless classics, and everything in between. At Loja, we believe fashion is more than just clothing — it's a lifestyle and a way to express who you are.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Our Mission</h2>
        <p className="text-gray-700 mb-6">
          To empower individuals by offering high-quality, stylish, and affordable fashion for men, women, and everyone in between. We’re committed to delivering not just products, but a full shopping experience built on trust, quality, and care.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">What We Offer</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Curated collections for Men, Women, and Accessories</li>
          <li>Fast and secure delivery across the country</li>
          <li>Easy returns and dedicated customer support</li>
          <li>Affordable luxury without compromising on quality</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Why Choose Loja?</h2>
        <p className="text-gray-700 mb-10">
          We’re not just a brand — we’re a community. Our team works passionately to stay ahead of trends and provide you with a seamless shopping journey. Join thousands of happy customers who trust Loja to keep them looking and feeling great.
        </p>

        <div className="text-center">
          <p className="text-md text-gray-600">
            Thank you for choosing <span className="text-indigo-600 font-medium">Loja</span> — Where style meets simplicity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
