import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='w-[100%] mx-auto text-white bg-[#3E4876] '>
        
      <header className="shadow-lg rounded-md">


        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden md:hidden sm:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul tabIndex="0"
                className="menu menu-sm dropdown-content bg-green-600 rounded-md z-[1] mt-3 w-[550%]   p-2 shadow">
                <li><a   className="hover:text-black font-semibold">Home</a></li>
                <li><a   className="hover:text-black font-semibold">About</a></li>
                <li><a   className="hover:text-black font-semibold">Blog</a></li>
                <li><a   className="hover:text-black font-semibold">FAQ</a></li>
                <li><a   className="hover:text-black font-semibold">Buy Now</a></li>
                <li><a   className="hover:text-black font-semibold">Sign In</a></li>

              </ul>
            </div>

            <a className="btn btn-ghost text-2xl font-semibold text-[whitesmoke] hover:text-[white]">   Book's Heaven</a>
          </div>
          <div className="navbar-end hidden lg:flex  sm:flex md:flex ">
            <ul className="menu menu-horizontal ">

              <Link  
                  className="bg-[indigo]  hover:bg-[lightseagreen] rounded-lg p-2   ">Home</Link> &nbsp;
              <Link   
                  className="bg-[midnightblue] hover:bg-[indigo] rounded-lg p-2  ">About</Link>&nbsp;
              <Link    
                  className="bg-[midnightblue] hover:bg-[indigo] rounded-lg p-2  ">Blog</Link> &nbsp;
              <Link    
                  className="bg-[midnightblue] hover:bg-[indigo] rounded-lg p-2  ">FAQ</Link> &nbsp;
              <Link><button id="all_btn" 
                  className="bg-[midnightblue] hover:bg-[indigo] rounded-lg p-2  ">Buy Book </button> </Link>
             &nbsp;
               <Link><button id="all_btn" 
                  className="bg-[midnightblue] hover:bg-[indigo] rounded-lg p-2  ">Sign In </button> </Link>

            </ul>
          </div>

        </div>


      </header>

       
      
    </div>
  )
}

export default NavBar
