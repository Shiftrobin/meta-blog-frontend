import React, { useEffect, useState } from 'react'
import authorImg from '../../assets/authors/author-1.png'
import blogImg from '../../assets/blogs/blog-1.png'  
import { useParams } from 'react-router-dom'
import axios from 'axios';
import Loading from '../../components/Loading';

const BlogDetails = () => {
    const {id} = useParams();
    const [blog, setBlog] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchBlog = async() => {
            try{
                const response = await axios.get(`http://localhost:3000/blog/${id}`);
                setBlog(response.data.blog);
                //console.log(response.data.blog);
                setIsLoading(false);
            }catch(error){
                console.error("Error fetching blog data: " + error);
            }
        }
        fetchBlog();
        window.scrollTo(0, 0);
    },[]);

    if(isLoading){
        return <Loading/>
    }

   // console.log('blog id: ',id);

  return (
    <div className='container max-w-7xl mx-auto px-4 py-8'>
        <div>
            <h2 className='text-3xl font-bold mb-4'>{blog?.title}</h2>
            <div className='flex items-center mb-4'>
                <img src={authorImg} alt="author" className='w-10 h-10 rounded-full mr-3'/>
                <div>
                    <p className='text-lg font-medium'>By {blog?.author?.name}</p>
                    <p className='text-gray-500'>
                        {
                            blog?.date ? <span>{new Date(blog.date).toLocaleDateString()}</span>
                            : <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                        }
                    </p>
                </div>
            </div>
            <img src={blog?.image} alt="blog" className='w-full md:h-[580px] rounded-md object-cover mb-4'/>
            <div className='space-y-4'>
                <p>{blog?.description}</p>
            </div>
        </div>
    </div>
  )
}

export default BlogDetails