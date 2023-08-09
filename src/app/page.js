'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './globals.css';

import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get('https://dummyjson.com/products'); 
        const data = response.data; 
        setProducts(data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className='gradient-background'>
      <ProductList products={products} setCartItems={setCartItems} setProducts={setProducts}/>
      <ShoppingCart cartItems={cartItems} setCartItems={setCartItems} />
    </div>
  );
};

export default Home;
