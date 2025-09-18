import React from 'react'

const TextAreaField = ({label,id,type,placeholder, register}) => {
  return (
    <div>
        <label htmlFor="message" className='block text-gray-700 text-sm font-bold mb-2'>{label}</label>
        <textarea            
            id={id} 
            rows="4" 
            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500" 
            placeholder={placeholder}
            {...register}
            >

        </textarea>
    </div>
  )
}

export default TextAreaField