import React from 'react'
import { Link } from 'react-router-dom'
import bannerImg from '../assets/blogs/blog-0.png'
import author from '../assets/author.png'
import {motion} from 'framer-motion'

const Banner = () => {
  return (
    <div className='my-16'>
        <div className='text-center mb-8'>
            <motion.h1             
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }} 
            
                className='text-4xl font-semibold mb-4'
            >Meta Blog</motion.h1>
            <motion.ul 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }} 
                className='flex flex-wrap items-center gap-4 justify-center'>
                <li>
                    <Link to="/" className='bg-secondary/10 px-2.5 py-1 rounded-full hover:text-secondary hover:underline underline-offset-2'>Home</Link>
                </li>
                <li>
                    <Link to="/manage-blog" className='bg-secondary/10 px-2.5 py-1 rounded-full hover:text-secondary hover:underline underline-offset-2'>Manage Blog</Link>
                </li>
            </motion.ul>
        </div>

        {/* banner image */}
        <motion.div

        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}     
        
        className='text-white'>
            <div className='md:min-h-[450px] h-80 w-full bg-center bg-cover bg-no-repeat rounded-md' style={{backgroundImage:`url(${bannerImg})`}}>
                <div className='flex flex-col h-full justify-end p-5'>
                    <span className='bg-secondary text-center text-white max-w-36 px-4 py-1 rounded-md mb-3'>Technology</span>
                    <h2 className='sm:text-3xl text-2xl font-semibold md:w-1/2 mb-5'>The impact of Technology on the workplace:How Technology is changing</h2>
                    <div className='flex items-center gap-1'>
                        <img src={author} alt="author" className='size-8' />
                        <div className='flex flex-wrap items-center space-x-4'>
                            <p className='ml-2 text-base cursor-pointer hover:underline underline-offset-2'>By Tracey Wilson</p>
                            <p className='text-sm italic'>August 20, 2024</p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    </div>
  )
}

export default Banner