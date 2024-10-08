import logo from "../assets/images/logo.png";
import { User } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  return (
    <nav className="bg-black text-white p-4 flex items-center justify-between fixed w-full z-50 ">
      <div className="flex items-center">
        <Link to="/" className="text-xl font-bold">
          <img className="block h-12 w-auto " src={logo} alt="Your Company" />
        </Link>
        <div className="hidden md:flex space-x-4 ml-10">
          <Link to="/music" className="hover:text-gray-400">
            Music
          </Link>
          <Link to="/shop" className="hover:text-gray-400">
            Shop
          </Link>
          <Link to="/events" className="hover:text-gray-400">
            Events
          </Link>
        </div>
      </div>
      <div className="relative">
        <button
          onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
          className="focus:outline-none"
        >
          <User className="h-3 w-4" />
        </button>
        {isUserDropdownOpen && (
          <div className="absolute z-40 right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg">
            <a href="#profile" className="block px-4 py-2 hover:bg-gray-200">
              Profile
            </a>
            <a href="#settings" className="block px-4 py-2 hover:bg-gray-200">
              Settings
            </a>
            <a href="#logout" className="block px-4 py-2 hover:bg-gray-200">
              Logout
            </a>
          </div>
        )}
      </div>
      <div className="md:hidden">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {isDropdownOpen && (
          <div className="absolute z-40 right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg">
            <a href="#music" className="block px-4 py-2 hover:bg-gray-200">
              Music
            </a>
            <a href="#shop" className="block px-4 py-2 hover:bg-gray-200">
              Shop
            </a>
            <a href="#events" className="block px-4 py-2 hover:bg-gray-200">
              Events
            </a>
            <a href="#profile" className="block px-4 py-2 hover:bg-gray-200">
              Profile
            </a>
            <a href="#settings" className="block px-4 py-2 hover:bg-gray-200">
              Settings
            </a>
            <a href="#logout" className="block px-4 py-2 hover:bg-gray-200">
              Logout
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
