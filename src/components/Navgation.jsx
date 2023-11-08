
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navigation() {
  const cartItems = useSelector(state => state.cart?.cart);
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/cart">Cart<sup>{cartItems?.length}</sup></Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
