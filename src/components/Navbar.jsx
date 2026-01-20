import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";

const Navbar = ({ searchTerm, setSearchTerm }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-brown-800 text-black shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold">☕ CoffeeHub</h1>
          </div>

          {/* Desktop Search */}
          <div className="hidden md:flex flex items-center bg-white border border-black-200 rounded-md px-2 py-1 w-[20%] h-[50%] max-w-sm">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-grow px-2 py-1 focus:outline-none"
            />
            <FaSearch className="text-gray-500 ml-2" />
          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex gap-6 font-bold">
            <Link className="hover:bg-gray-200 rounded px-2 py-1" to="/">
              Home
            </Link>
            <Link className="hover:bg-gray-200 rounded px-2 py-1" to="/menu">
              Menu
            </Link>
            <Link className="hover:bg-gray-200 rounded px-2 py-1" to="/services">
              Services
            </Link>
            <Link className="hover:bg-gray-200 rounded px-2 py-1" to="/contact">
              Contact
            </Link>
            <Link className="flex items-center px-3 py-2 hover:bg-gray-200 rounded " to="/Login"><IoMdLogIn size={18}/></Link>

          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-yellow-200 text-black px-4 pt-4 space-y-4">
          {/* Mobile Search */}
          <div className="flex items-center bg-white border border-gray-300 rounded-md px-2 py-1 w-[50%]">
            <input type="text"  placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-grow px-2 py-1 focus:outline-none" />
            <FaSearch className="text-gray-500 ml-2" />
          </div>

         
          <ul className="flex flex-col gap-3">
            <li> <Link to="/" className=" px-3 py-2 "> Home </Link>
            </li>
            <li>
              <Link  to="/menu" className=" px-3 py-2 ">
                Menu </Link>
             </li>
            <li>
              <Link to="/services"className=" px-3 py-2 ">
               Services </Link>
            </li>
            <li>
              <Link to="/contact"className=" px-3 py-2 " >
                Contact</Link>
            </li>
            <li>
              <Link  className="flex items-center px-4 py-2 " to="/Login"><IoMdLogIn /></Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
