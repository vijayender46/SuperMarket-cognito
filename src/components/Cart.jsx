import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from './actions';
import { useDispatch } from 'react-redux';

const Cart = ({ cart, removeFromCart }) => {
    const dispatch = useDispatch();
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps, { removeFromCart })(Cart);
