import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromCart } from '../store/CartSlice';

export default function CartPage() {
    const cartItems = useSelector(state => state.cart.cart);
    const dispatch = useDispatch();

    // console.log('cart page data: ', cartItems.data);
  return (
    <section className='cart-page'>
        <div className='wrapper'>
            <div className='cart-header'>
                <h2 style={{flex: "1"}}>Your Cart Details</h2>
                <Link to="/">Continue Shopping</Link>
            </div>
            <ul className='cart-items'>
                {cartItems.map(item => {
                        return (
                            <li key={item.id}>
                                <div className='content'>
                                    <h3>{item.proTitle}</h3>
                                    <h5>{item.proDes}</h5>
                                    <h5>{item.proPrice}</h5>
                                    <h5>{item.productId}</h5>
                                </div>
                                <div className='actions'>
                                    <button onClick={() => dispatch(removeFromCart({productId: item.productId}))}>
                                        Remove
                                    </button>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    </section>
  )
}
