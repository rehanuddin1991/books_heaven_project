import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const BookDetailsPage = () => {
    const {bookId}= useParams();

    const [allBooks, setAllBooks]=useState([]);
     
    useEffect( () => {
        fetch("book.json")         
         .then((res) =>res.json() )
         .then( data=>console.log(data))
      } ,[]);


  return (
    <div>
        <h1>count {allBooks.length}</h1>
      {
        
        allBooks.map((allbook, index ) => {
            if(allbook.bookId==bookId ) return (
                <h1 className='text-red-300' key={index}>matches</h1>
            )

        })
      }
    </div>
  )
}

export default BookDetailsPage
