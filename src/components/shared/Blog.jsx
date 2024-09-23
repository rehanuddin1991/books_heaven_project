import React, { useEffect, useState } from 'react'
 

  
  const Blog = () => {

    

    const [blogs, setBlogs]=useState([]);
     
    useEffect( () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
         
         .then((res) =>res.json() )
         .then( data=>setBlogs(data))
      } ,[]);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 min-[2560px]:grid-cols-5   p-3 shadow-sm justify-center items-center gap-4 ">
       
       {
        blogs.map(
            (singleBlog, index) => {
               return (    
                <div key={index}   className="card bg-[darkcyan] text-[whitesmoke] h-[300px]   shadow-xl">
                 
                <div className="card-body items-center text-justify">
                    <h2 className="card-title text-[indigo]  text-2xl  ">Blog Title   :{singleBlog.title.slice(0, 20)}</h2>
                    <h2 className="card-title text-black p-3 text-xl ">Blog Body   :{singleBlog.body.slice(0, 160)}</h2>
                     
                    
                    
                </div>
        </div>
                )
                
            }
        )
       } 

      
    </div>
  )
}

export default Blog
