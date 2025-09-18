import React from 'react'
import missionImg from '../../assets/blogs/blog-0.png'
import Newsletter from '../home/Newsletter'
import Reveal from '../../animation/Reveal'

const About = () => {
  return (
    <section className='pt-28 pb-5'>
        <div className='container max-w-7xl px-4 mx-auto'>
            {/* hero banner */}
            <Reveal>  
                <div className='text-center mb-20'>
                    <h1 className='text-4xl font-semibold'>About Us</h1>
                    <p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt excepturi, error minus, optio debitis laudantium aperiam eum illo hic nostrum dolore officia commodi doloribus rem? Illum quis praesentium pariatur suscipit..</p>
                </div>                
            </Reveal>


            {/* mission */}
            <Reveal>
                <div className='grid gird-cols-1 md:grid-cols-2 gap-8 items-center mb-20'>
                    <div>
                        <h2 className='text-3xl font-semibold mb-4'>Our Mission</h2>
                        <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt excepturi, error minus, optio debitis laudantium aperiam eum illo hic nostrum dolore officia commodi doloribus rem? Illum quis praesentium pariatur suscipit.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt excepturi, error minus, optio debitis laudantium aperiam eum illo hic nostrum dolore officia commodi doloribus rem? Illum quis praesentium pariatur suscipit.</p>
                    </div>
                    <div>
                        <img src={missionImg} alt="" className='w-full md:h-96 rounded-lg hover:scale-95 transition-all duration-200' />
                    </div>
                </div>      
            </Reveal>

            
            {/* Vision */}
            <Reveal>
                <div className='grid gird-cols-1 md:grid-cols-2 gap-8 items-center mb-20'>
                    <div className='order-1 md:order-2'>
                        <h2 className='text-3xl font-semibold mb-4'>Our Vision</h2>
                        <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt excepturi, error minus, optio debitis laudantium aperiam eum illo hic nostrum dolore officia commodi doloribus rem? Illum quis praesentium pariatur suscipit.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt excepturi, error minus, optio debitis laudantium aperiam eum illo hic nostrum dolore officia commodi doloribus rem? Illum quis praesentium pariatur suscipit.</p>
                    </div>
                    <div className='order-2 md:order-1'>
                        <img src={missionImg} alt="" className='w-full md:h-96 rounded-lg hover:scale-95 transition-all duration-200' />
                    </div>
                </div>   
            </Reveal>

            {/* Team Section */}
            <Reveal>
                <div>
                    <h2 className='text-3xl font-semibold text-center mb-4'>Meet Our Team</h2>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center mb-12'>                                    
                            <div>
                                <div className='bg-white p-6 rounded-lg shadow-lg text-center hover:scale-95 transition-all duration-200'>
                                    <img src={missionImg} alt="" className='w-32 h-32 rounded-full mx-auto mb-4' />
                                    <h3 className='text-xl text-gray-700'>John Doe</h3>
                                    <p className='text-gray-500'>CEO</p>
                                </div>
                            </div>
                            <div>
                                <div className='bg-white p-6 rounded-lg shadow-lg text-center hover:scale-95 transition-all duration-200'>
                                    <img src={missionImg} alt="" className='w-32 h-32 rounded-full mx-auto mb-4' />
                                    <h3 className='text-xl text-gray-700'>John Doe</h3>
                                    <p className='text-gray-500'>CEO</p>
                                </div>
                            </div>
                            <div>
                                <div className='bg-white p-6 rounded-lg shadow-lg text-center hover:scale-95 transition-all duration-200'>
                                    <img src={missionImg} alt="" className='w-32 h-32 rounded-full mx-auto mb-4' />
                                    <h3 className='text-xl text-gray-700'>John Doe</h3>
                                    <p className='text-gray-500'>CEO</p>
                                </div>
                            </div>
                            <div>
                                <div className='bg-white p-6 rounded-lg shadow-lg text-center hover:scale-95 transition-all duration-200'>
                                    <img src={missionImg} alt="" className='w-32 h-32 rounded-full mx-auto mb-4' />
                                    <h3 className='text-xl text-gray-700'>John Doe</h3>
                                    <p className='text-gray-500'>CEO</p>
                                </div>
                            </div>

                    </div> 
                </div>
            </Reveal>


            <Newsletter />
        </div>
    </section>
  )
}

export default About