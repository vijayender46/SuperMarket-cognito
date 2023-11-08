// api.js
const API_URL = 'https://s3.eu-west-2.amazonaws.com/techassessment.cognitoedu.org/products.json';

// Initialize a variable to store products
let productsCache = null;

// Function to fetch all products and store them in the cache
async function fetchProducts() {
  if (!productsCache) {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      productsCache = await response.json();
    } catch (error) {
      throw new Error('Error fetching data');
    }
  }
  return productsCache;
}

// Function to fetch a specific product by ID
// Function to fetch a specific product by ID (with debugging)
async function fetchProductById(productId) {
  const products = await fetchProducts();
  console.log('All products:', products); // Debug: Log all products
  const product = products.find((p) => p.id === productId);
  if (!product) {
    console.log(`Product with ID ${productId} not found`); // Debug: Log if the product is not found
    throw new Error('Product not found');
  }
  return product;
}

export { fetchProducts, fetchProductById };
