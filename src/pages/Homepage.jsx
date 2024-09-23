import React from 'react'
;
import Books from '../Book/Books'
 


const Homepage = () => {
  return (
    <div className='w-[98%] bg-slate-400 mx-auto rounded-md shadow-md '>
      <h1 className='text-2xl text-black text-center p-3'>Collections of Amazing Books</h1>
      
      <Books/>
    </div>
  )
}

export default Homepage
