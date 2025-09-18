import React, { useContext, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { BlogContext } from '../context/BlogContext';

const Search = () => {

  const {searchTerm, setSearchTerm} = useContext(BlogContext);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);    
  }  
 // console.log(inputValue);

  const handleSearch = () => {
    setSearchTerm(inputValue);
  }

  console.log(searchTerm);


  return (
    <div className='relative'>
        <input type="text" placeholder='Search...' className="bg-[#F4F4F5] py-2 pl-4 pr-4 focus:outline-none rounded-full" onChange={handleInputChange}/>
        <button className='absolute right-3 top-2.5 hover:text-secondary' onClick={handleSearch}><FaSearch /></button>
    </div>
  )
}

export default Search