import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../data/api';
import ProductCard from './ProductCard';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [batchSize, setBatchSize] = useState(12);

  useEffect(() => {
    async function getProducts() {
      try {
        const data = await fetchProducts();
        setProducts(data);
        // console.log('product data : ', data);
      } catch (error) {
        setError(error.message);
      }
    }
    getProducts();
  }, []);

  useEffect(() => {
    // Update the displayed products whenever products
    setDisplayedProducts(products.slice(0, batchSize));
  }, [products, batchSize]);

  const handleLoadMore = () => {
    // Increase product list size by 8 to load the next batch of products
    setBatchSize((prevBatchSize) => prevBatchSize + 8);
  };


  return (
    <div className='product-listing'>
        {error ? (
          <p>{error}</p>
        ) : (
          <ul>
            {displayedProducts.map((product) => (
              <li key={product.id}>
                  <ProductCard 
                  id={product.id}
                  title={product.name}
                  price= {product.price} 
                  />               
              </li>
            ))}
          </ul>
          )}
          {batchSize < products.length && (
            <button className='load-more' onClick={handleLoadMore}>Load More</button>
          )}
      </div>
  );
}