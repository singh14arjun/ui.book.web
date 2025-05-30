import React from "react"
import { Link, useNavigate } from "react-router-dom"

function Header() {

  
    const navigate = useNavigate();
  
    const handleClick = (name) => 
      navigate(`${name}`); 
  

  return (
    <>
      <header className=" shadow-md p-4" style={{backgroundColor:""}}>
        <div className="container mx-auto flex items-center justify-between">

          <div className="text-2xl font-bold text-blue-900 cursor-pointer">
            <Link to={"/"}>E<span className="text-fuchsia-700">-Book</span></Link>
          </div>

          <nav className="hidden md:flex space-x-6 text-white">
            <Link to={"/browse"} className="hover:text-blue-500">Browse</Link>
            <Link to={"/about"} className="hover:text-blue-500">About</Link>
            <Link to={"/faq"} className="hover:text-blue-500">FAQ</Link>
          </nav>

          <div className="space-x-4">
            <button className="px-4 py-2 text-sm font-medium text-fuchsia-600 border border-fuchsia-600 rounded hover:bg-blue-50 cursor-pointer" onClick={()=>handleClick("signIn")}>
              Sign In
            </button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-fuchsia-600 rounded hover:bg-blue-300 cursor-pointer" onClick={()=>handleClick("signUp")}>
              Sign Up
            </button>
          </div>

        </div>
      </header>
    </>
  )
}

export default Header;