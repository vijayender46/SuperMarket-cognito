import React from 'react'
import Hero from '../components/Hero'
import SectionTitle from '../components/SectionTitle'
import ProductList from '../components/ProductList'

export default function Home() {
  return (
    <>
      <Hero />
      <section className='featured-products'>
        <div className='wrapper'>
          <SectionTitle title='Featured Products' />
          <ProductList />
        </div>
      </section>
    </>
  )
}
