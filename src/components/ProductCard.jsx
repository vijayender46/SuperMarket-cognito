import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addtoCart } from '../store/CartSlice';

const ProductCard = ({ id, title, price }) => {
  const dispatch = useDispatch();
  return (
    <div className="product-card">
      <h2 data-testid='testTitles'>
        <Link to={{
          pathname: `/products/${id}`,
          state: { product: { id, title, price } }
        }}>{title}</Link>
      </h2>
      <p>Price: ${price}</p>
      <button onClick={() => dispatch(addtoCart({productId: id, proTitle: title, proPrice: price}))}>
          Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;