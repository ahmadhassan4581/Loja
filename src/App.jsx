import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Mens from './components/Mens';
import Womens from './components/Womens';
import ProductDetail from './components/ProductDetails'; // Make sure this file exists
import Cart from './components/Cart';
import { CartProvider } from './components/CartProvider'; // Updated path
import Footer from './components/Footer';
import Accessories from './components/Accessoriese';
import AboutUs from './components/AboutUs'

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mens" element={<Mens />} />
          <Route path="/womens" element={<Womens />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/about-us" element={<AboutUs />} />

          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
