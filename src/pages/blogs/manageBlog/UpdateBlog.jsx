import React, { useEffect } from 'react'

import { useForm } from "react-hook-form";
import InputField from '../addBlog/InputField';
import TextAreaField from '../addBlog/TextAreaField';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function UpdateBlog() {

    const {id} = useParams(); 
    // console.log("post id",id);

    const navigate = useNavigate();

    useEffect(() => {

        const fetchSingleBlog = async () => {
            try {
             const response = await axios.get(`http://localhost:3000/blog/${id}`);   
             console.log(response.data.blog)

             const blog = response.data.blog;

             setValue('title', blog?.title);
             setValue('description', blog?.description);
             setValue('image', blog?.image);
             setValue('authorName', blog?.author?.name);
             setValue('authorImage', blog?.author?.image);

            } catch (error) {
                console.log("Error fetching single blog: " + error)
            }
        }  

        fetchSingleBlog();

    }, []);


    const {
        register,
        handleSubmit,   
        reset, 
        setValue,   
        formState: { errors },
        } = useForm()
    
        const onSubmit = async (data) => {
            
            const blogData = {
                title: data.title,
                description: data.description,
                image: data.image,
                author: {
                    name: data.authorName,
                    image: data.authorImage
                }
            }

            try {
                const response = await axios.patch(`http://localhost:3000/blog/update/${id}`, blogData);
                console.log(response.status);  

                if(response.status===200){
                    alert("Blog updated successfully");
                    reset();
                    navigate('/');
                }              
            } catch (error) {
                console.log("Error updating post: " + error)
            }
            
        // console.log(blogData)

        }



  return (
    <div className='container mx-w-7xl mx-auto px-4 py-24'>
    <h2 className='text-2xl font-bold text-center mb-6'>Update Blog</h2>

    {/* form */}
    <div className=''>
        <form onSubmit={handleSubmit(onSubmit)} className='bg-white max-w-3xl p-6 rounded-lg shadow-md space-y-4'>

        <InputField             
            label="Blog Title"
            id="title"
            type="text"
            placeholder="Blog Title"
           register = {register("title", {required: true})}
        /> 

        {/* textarea */}
       <TextAreaField             
            label="Blog Description"
            id="description"
            type="text"
            placeholder="Blog Description"
           register = {register("description", {required: true})}
        /> 

        <InputField             
            label="Author Name"
            id="authorName"
            type="text"
            placeholder="Author Name"   
           register = {register("authorName", {required: true})}
        />   

        <InputField             
            label="Author Image Url"
            id="authorImage"
            type="url"
            placeholder="Author Image Url"
           register = {register("authorImage", {required: true})}
        />   

        <InputField             
            label="Blog Image URL"
            id="image"
            type="url"
            placeholder="Blog Image URL"
           register = {register("image", {required: true})}
        />            

        <div>
            <button type='submit' className='w-full bg-secondary text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'>Update Blog</button>
        </div>

        </form>
        </div>

    </div>
  )
}

export default UpdateBlog