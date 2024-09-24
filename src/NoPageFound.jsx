import React from 'react'
import images from './assets/404.png'

const NoPageFound = () => {
  return (
    <div>
        <h1 className='text-5xl text-red-600'>404 page not found</h1>
        <img src= {images} alt="" />
      
    </div>
  )
}

export default NoPageFound
