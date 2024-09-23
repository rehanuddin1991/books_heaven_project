import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'



const BookDetailsPage = ( ) => {
    const location=useLocation() ;
     const [books, setBooks]=useState({});
      
     
useEffect(( ) => {
 setBooks(location.state.book)
},[] )
const wishToReadFunction=(type ) => {
    if(type==1)
            alert( "Book ID: "+books.bookId + " "+books.bookName+ " added to the wishlist")
        else alert( "Book ID: "+books.bookId + " "+books.bookName+ " added to the cart")
}
 
  return (
    <div className='mt-6 mb-1'>
        <div className="hero bg-base-200  ">
  <div className="hero-content flex-col lg:flex-row gap-4 justify-between items-center">
    <img
      src={books.image}
      className="max-w-sm rounded-lg shadow-2xl min-h-[400px]" />
    <div>
      <h1 className="text-2xl font-bold  pl-20 text-[indigo]">Book Name: {books?.bookName}</h1>
      
      <h1 className="text-2xl font-bold p-2   pl-20">Author: {books?.author}</h1>
      <h2 className="text-2xl font-bold p-2   pl-20">Category:{books?.category}</h2>
      <h2 className="text-2xl font-bold p-2 text-[midnightblue]   pl-20">Review:{books?.review}</h2>
      <h1 className="text-2xl font-bold  pl-20">Tags: {books.tags?.join()}</h1>
      <h3 className="text-xl font-bold p-2   pl-20">Pages: {books?.totalPages}</h3>
      <h3 className="text-xl font-bold p-2  text-[coral]  pl-20">Publisher: {books?.publisher}</h3>
      <h4 className="text-xl font-bold p-2   pl-20">Published Year:{books?.yearOfPublishing}</h4>
      <h4 className="text-xl font-bold p-2 text-[darkcyan]  pl-20">Rating: {books?.rating}</h4>
       
      <button onClick={  ( ) => { wishToReadFunction(1)}  } className="btn btn-primary ml-16 text-3xl mt-2">Wish To Read</button> &nbsp;
      <button onClick={  ( ) => { wishToReadFunction(2)}  } className="btn btn-primary text-3xl">Add to Cart</button>
    </div>
  </div>
</div>
       
    </div>
  )
}

export default BookDetailsPage
