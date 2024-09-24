import React from 'react'
;
import Books from '../Book/Books'
import Carousel from '../components/shared/Carousel';
 


const Homepage = () => {
  return (
    
    <div className='w-[98%] bg-slate-400 mx-auto rounded-md shadow-md '>
      <Carousel />
      <h1 className='text-4xl text-[cornsilk] text-center p-3 bg-[midnightblue] shadow-md rounded-sm'>Collections of Amazing Books</h1>
      
      <Books/>
    </div>
  )
}

export default Homepage
