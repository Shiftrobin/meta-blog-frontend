import React from 'react'
import contactAnimation from '../../assets/contact-animation.gif'
import Reveal from '../../animation/Reveal'

const Contact = () => {
  return (
    <section className='pt-28 pb-5'>
      <div className='container max-w-7xl mx-auto px-4'>
        <h2 className='text-3xl font-bold text-center mb-12'>Get in Touch</h2>


        <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-8'>

          <Reveal>
              <div>
                <img src={contactAnimation} alt="" className='w-44' />  
                <h3>Contact Information</h3>        
                <p>Feel free to contact us for any questions or inquiries.</p>
                <p><strong>Email:</strong> ishefat@gmail.com</p>
                <p><strong>Phone:</strong> +123456789</p>
              </div>
          </Reveal>


          <Reveal>
            <div>
                <form className='bg-white p-6 rounded-lg shadow-md'>

                    <div className='mb-4'>
                      <label htmlFor="name" className='block text-gray-700 text-sm font-bold mb-2'>Name</label>
                      <input type="text" name='name' id='name' className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder='Enter your name' />
                    </div>
                    
                    <div className='mb-4'>
                      <label htmlFor="email" className='block text-gray-700 text-sm font-bold mb-2'>Email</label>
                      <input type="email" name='email' id='email' className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder='Enter your email' />
                    </div>

                    <div className='mb-4'>
                      <label htmlFor="phone number" className='block text-gray-700 text-sm font-bold mb-2'>Phone Number</label>
                      <input type="number" name='phone_number' id='phone_umber' className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder='Enter your phone number' />
                    </div>

                    <div className='mb-4'>
                      <label htmlFor="message" className='block text-gray-700 text-sm font-bold mb-2'>Message</label>
                      <textarea name="message" id="message" rows="4" className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder='Enter your message'></textarea>
                    </div>

                    <div>
                        <button type='submit' className='w-full bg-secondary text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'>Send Message</button>
                    </div>


                </form>
              </div>
          </Reveal>

        </div>

      </div>
    </section>
  )
}

export default Contact