import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-accent text-primary py-8'>
      <div className='container max-w-7xl mx-auto px-4'>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-8'>

          {/* about section */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>About Us</h3>
            <p className='text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, tenetur ut. Facilis, obcaecati voluptatem. At natus cumque, suscipit recusandae fugiat itaque quis similique dolore, delectus voluptas cupiditate reiciendis voluptate qui.</p>

            <div className='mt-5'>
              <p className='text-base'><strong>Email:</strong> ishefat@gmail.com</p>
              <p className='text-base'><strong>Phone:</strong> +123456789</p>
            </div>
          </div>

          {/* quick links */}
          <div className='md:pl-16'>
            <h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
            <ul className='space-y-2'>
              <li><Link to="/" className='hover:text-secondary'>Home </Link></li>
              <li><Link to="/about" className='hover:text-secondary'>About </Link></li>
              <li><Link to="/contact" className='hover:text-secondary'>Contact </Link></li>
              <li><Link to="/blogs" className='hover:text-secondary'>Blogs </Link></li>
            </ul>
          </div>

          {/* Category */}
          <div className='md:pl-16'>
            <h3 className='text-lg font-semibold mb-4'>Category</h3>
            <ul className='space-y-2'>
              <li><Link to="/" className='hover:text-secondary'>Lifestyle </Link></li>
              <li><Link to="/about" className='hover:text-secondary'>Business </Link></li>
              <li><Link to="/contact" className='hover:text-secondary'>Travel </Link></li>
              <li><Link to="/blogs" className='hover:text-secondary'>Health </Link></li>
            </ul>
          </div>

          {/* newsletter */}
          <div className='bg-white hidden sm:block'>
            <div className='px-6 py-4 text-center'>
              <h3 className='text-lg font-semibold mb-4'>Weekly Newsletter</h3>
              <p className='text-gray-400 text-sm mb-2'>Get the latest news, updates, and offers straight to your inbox</p>
              <form className='space-y-2'>
                <input type="email" placeholder='Your Email' 
                  className='bg-gray-100 text-white rounded-lg py-2 px-4 w-full focus:outline-none'
                />
                <button type='submit' className='bg-secondary text-white px-4 py-2 rounded-lg w-full mt-2'>Subscribe</button>
              </form>
            </div>

          </div>


        </div>

      </div>


    </footer>
  )
}

export default Footer