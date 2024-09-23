import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'



const BookDetailsPage = ( ) => {
    const location=useLocation() ;
     const [books, setBooks]=useState({});
     
useEffect(( ) => {
 setBooks(location.state.book)
},[] )
const wishToReadFunction=( ) => {
alert( "Book ID: "+books.bookId + " "+books.bookName+ " added to the cart")
}
  return (
    <div className='mt-6 mb-1'>
        <div className="hero bg-base-200  ">
  <div className="hero-content flex-col lg:flex-row gap-4 justify-between items-center">
    <img
      src={books.image}
      className="max-w-sm rounded-lg shadow-2xl min-h-[400px]" />
    <div>
      <h1 className="text-3xl font-bold text-center">{books?.bookName}</h1>
      <h1 className="text-3xl font-bold mt-2  text-center">{books?.author}</h1>
      <h2 className="text-3xl font-bold mt-2  text-center">{books?.category}</h2>
      <h2 className="text-2xl font-bold mt-2  text-center">{books?.review}</h2>
      <h3 className="text-2xl font-bold mt-2  text-center">{books?.tags}</h3> 
      <h3 className="text-2xl font-bold mt-2  text-center">{books?.totalPages}</h3>
      <h3 className="text-2xl font-bold mt-2  text-center">{books?.publisher}</h3>
      <h4 className="text-xl font-bold mt-2  text-center">{books?.yearOfPublishing}</h4>
      <h4 className="text-xl font-bold mt-2  text-center">{books?.rating}</h4>
       
      <button onClick={wishToReadFunction } className="btn btn-primary ml-16 text-3xl">Wish To Read</button> &nbsp;
      <button className="btn btn-primary text-3xl">Add to Cart</button>
    </div>
  </div>
</div>
       
    </div>
  )
}

export default BookDetailsPage
