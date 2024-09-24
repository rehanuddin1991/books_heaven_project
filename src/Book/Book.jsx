import React from 'react'
import { Link } from 'react-router-dom';
import { ROUTES } from '../routes';
const Book = ({props}) => {
    const {bookId,bookName,author,category,rating, image,review ,totalPages,tags}=props ;
    
    return ( 

        <div   className="card bg-base-100 min-h-[560px] w-[320px] shadow-xl mx-auto">
            <figure className="px-10 pt-10">
                <img
                src={image}
                alt="book"
                className="rounded-xl " />
            </figure>
            <div className="card-body text-xs lg:text-2xl md:text-2xl sm:text-xl    text-left">
                <h2 className="card-title text-xs    ">Tags: {tags.join()}</h2>
                <h2 className="card-title text-[darkcyan] mt-1">Book Name:{bookName}</h2>
                <h2 className="card-title text-[indigo] mt-1">Author:{author}</h2>
                <h2 className="card-title mt-1">Category:{category}</h2>
                 
                <h2 className="card-title text-[midnightblue] mt-1">Rating:{rating}</h2> <br />
                
                <div className="card-actions  mx-auto ">
              <Link to={{ pathname: `/book/${bookId}`  }} state={{book: props}}      ><button className="btn btn-primary  "  >Book Details</button></Link>  
                </div>
            </div>
    </div>


    
    )
}

export default Book
