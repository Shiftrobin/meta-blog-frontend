import React from 'react'
import NewsletterBg from '../../assets/news-letter.png'
import Reveal from '../../animation/Reveal'

const Newsletter = () => {
  return (

    <Reveal>
    <div className='my-16 bg-no-repeat bg-cover bg-center rounded-md' style={{backgroundImage:`url(${NewsletterBg})`}}>
        <div className="py-12 bg-black/40 rounded-md h-full flex items-center justify-center text-center">
            <div className='space-y-3 p-4'>
                <h2 className='text-2xl font-bold text-white'>Sign up for our newsletter</h2>    
                <p className='text-lg text-white'>Get the latest news, updates, and offers straight to your inbox</p>    
                <button className='bg-white hover:bg-secondary hover:text-white text-primary font-bold px-8 py-2 rounded-full'>Sign up</button>        
            </div>
        </div>
    </div>
    </Reveal>
  )
}

export default Newsletter