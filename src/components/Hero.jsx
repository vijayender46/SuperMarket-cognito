import React from 'react'
import hero from '../images/supermarket-hero.jpg'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className='supermarket-banner'>
        <img src={hero} alt="Super Market `banner" />
        <div className='content'>
            <h1>This is Developer Assignment</h1>
            <p>App build by using ReactJs Library and icludes scss, redux state management and react testing library</p>
            <Link className='btn-link' to="/products">View Products</Link>
        </div>
    </section>
  )
}
