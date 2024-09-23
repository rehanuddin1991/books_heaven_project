import React from 'react'
import banner from '../../assets/banner.jpg'

const Carousel = () => {
  return (
    <div className='mt-6'>
        <div className="hero bg-base-200  ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={banner}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Unlock a World of Stories- Find Your Next Favorite Book at Book's Heaven</h1>
       <br />
      <button className="btn btn-primary">Buy Book</button>
    </div>
  </div>
</div>
      
    </div>
  )
}

export default Carousel
