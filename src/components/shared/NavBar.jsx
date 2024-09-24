import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from "../../routes";
 
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
                <li><Link to={ `${ROUTES.HOME}` }   className="hover:text-black font-semibold">Home</Link></li>
                <li><Link   to={`${ROUTES.ABOUT}`}   className="hover:text-black font-semibold">About</Link></li>
                <li><Link   to={`${ROUTES.BLOG}`}   className="hover:text-black font-semibold">Blog</Link></li>
                <li><Link  to={`${ROUTES.FAQ}`}  className="hover:text-black font-semibold">FAQ</Link></li>
                <li><Link to={`${ROUTES.BUYBOOK}`}   className="hover:text-black font-semibold">Buy Now</Link></li>
                <li><Link  to={`${ROUTES.SIGNIN}`}  className="hover:text-black font-semibold">Sign In</Link></li>

              </ul>
            </div>

            <Link to={ `${ROUTES.HOME}` } className="btn btn-ghost text-2xl  font-semibold text-[whitesmoke]
             hover:text-[white]">   Book's Heaven</Link>
          </div>
          <div className="navbar-center hidden lg:flex  sm:flex md:flex  ">
            <ul className="menu menu-horizontal ">

              <Link to={ `${ROUTES.HOME}` }
                  className="bg-[indigo]  hover:bg-[lightseagreen] text-[1rem]  rounded-lg p-2 min-w-[2560px]:text-5xl   ">Home</Link> &nbsp;
              <Link to={`${ROUTES.ABOUT}`}   
                  className="bg-[midnightblue] hover:bg-[indigo] text-[1rem] rounded-lg p-2   ">Abouts</Link>&nbsp;
              <Link  to={`${ROUTES.BLOG}`}   
                  className="bg-[midnightblue] hover:bg-[indigo] text-[1rem] rounded-lg p-2   ">Blog</Link> &nbsp;
              <Link    to={`${ROUTES.FAQ}`} 
                  className="bg-[midnightblue] hover:bg-[indigo] text-[1rem] rounded-lg p-2  ">FAQ</Link> &nbsp;
              <Link to={`${ROUTES.BUYBOOK}`} ><button id="all_btn" 
                  className="  bg-[midnightblue] hover:bg-[indigo] text-[1rem] rounded-lg p-2  ">Buy Book </button> </Link>
             &nbsp;
               <Link to={`${ROUTES.SIGNIN}`}><button id="all_btn" 
                  className="bg-[midnightblue] hover:bg-[indigo] text-[1rem] rounded-lg p-2  ">Sign In </button> </Link>

            </ul>
          </div>

        </div>


      </header>

       
      
    </div>
  )
}

export default NavBar
