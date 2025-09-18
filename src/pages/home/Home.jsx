import React from 'react'
import Banner from '../../components/Banner'
import BlogList from '../blogs/BlogList'
import Newsletter from './Newsletter'

const Home = () => {
  return (
    <section className='container max-w-7xl mx-auto px-4 py-3'>
        <Banner />
        <BlogList />
        <Newsletter />
    </section>
  )
}

export default Home