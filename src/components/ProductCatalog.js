"use client"; // Обов'язково для роботи з Redux

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProducts } from '../store/productsSlice';
import { addToCart } from '../store/cartSlice';

const ProductCatalog = () => {
  const products = useSelector((state) => state.products.list);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      dispatch(setProducts(data));
    };
    fetchProducts();
  }, [dispatch]);

  return (
    <div>
      <h1>Product Catalog</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title} - ${product.price}
            <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductCatalog;
