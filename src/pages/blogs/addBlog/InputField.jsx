import React from 'react'

const InputField = ({label,id,type,placeholder, register}) => {
  return (
    <div className=''>
         <label htmlFor="name" className='block text-gray-700 text-sm font-bold mb-2'>{label}</label>
         <input 
            type={type}            
            id={id}
            placeholder={placeholder}
            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500" 
            {...register}
          />         
    </div>
  )
}

export default InputField