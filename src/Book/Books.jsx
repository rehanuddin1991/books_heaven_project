 

import React, { useEffect, useState } from 'react'

import Book from './Book';

const Books = () => {

    

    const [book, setBook]=useState([]);
     
    useEffect( () => {
        fetch("book.json")
         
         .then((res) =>res.json() )
         .then( data=>setBook(data))
      } ,[]);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 min-[2560px]:grid-cols-5   p-3 shadow-sm justify-center items-center gap-4 ">
       
       {
        book.map(
            (singleBook, index) => {
               return (  <Book key={singleBook.bookId} props={singleBook}></Book> )
                
            }
        )
       } 

      
    </div>
  )
}

export default Books
