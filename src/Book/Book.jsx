import React from 'react'
import { Link } from 'react-router-dom';
import { ROUTES } from '../routes';
const Book = ({props}) => {
    const {bookId,bookName,author,category,rating, image,review,totalPages}=props ;
    return ( 

        <div   className="card bg-base-100 h-[500px] w-[310px] shadow-xl">
            <figure className="px-10 pt-10">
                <img
                src={image}
                alt="book"
                className="rounded-xl " />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title  ">Book Name:{bookName}</h2>
                <h2 className="card-title">Category:{category}</h2>
                <h2 className="card-title">Author:{author}</h2>
                <h2 className="card-title">Pages:{totalPages}</h2>
                <h2 className="card-title">Rating:{rating}</h2>
                
                <div className="card-actions ">
              <Link to={`/book/${bookId}`}><button className="btn btn-primary  "  >Book Details</button></Link>  
                </div>
            </div>
    </div>


    
    )
}

export default Book
