import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../data/api';
import { useDispatch } from 'react-redux';
import { addtoCart } from '../store/CartSlice';


const ProductDetail = () => {
  const { id } = useParams();
  const productId = parseInt(id, 10);

  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        // console.log('Fetching product with ID:', productId);
        const productData = await fetchProductById(productId);
        // console.log('Product data:', productData);
        setProduct(productData);
        // console.log('sdata: ', productData);
      } catch (error) {
        setError(error.message);
      }
    }
  
    fetchProduct();
  }, [productId]);

  const proTitle = product?.name;
  const proPrice = product?.price;
  const proDes = product?.description;

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <section className='product-details'>
        <div className='wrapper'>
            <div className="product-detail">
            <h2>{proTitle}</h2>
            <p>{proDes}</p>
            <p className='price'>Price: ${proPrice}</p>
            <button onClick={() => dispatch(addtoCart({productId, proTitle, proPrice}))}>
                Add to Cart
            </button>
            </div>
        </div>
    </section>
  );
};

export default ProductDetail;
