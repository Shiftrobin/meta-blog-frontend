import React from 'react'
import InputField from './InputField'
import TextAreaField from './TextAreaField'
import { useForm } from "react-hook-form";
import axios from 'axios'

const AddBlog = () => {

    const {
        register,
        handleSubmit,       
        formState: { errors, reset },
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
            
            // console.log(blogData)

            try{
                const reponse = await axios.post(`http://localhost:3000/blog/add-post`, blogData)
                console.log("Post created successfully: ", reponse.data)

                if(reponse.status === 200){
                   alert("Post created successfully")
                   reset();
                }
            }catch(error){
                console.log("Error creating post: ", error)
            }

      }


  return (
    <div className='container mx-w-7xl mx-auto px-4 py-24'>
        <h2 className='text-2xl font-bold text-center mb-6'>Add New Blog</h2>

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
                <button type='submit' className='w-full bg-secondary text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'>Add Blog</button>
            </div>

            </form>
        </div>

    </div>
  )
}

export default AddBlog