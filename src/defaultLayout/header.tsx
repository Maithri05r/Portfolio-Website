import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed  w-full bg-gray-800 shadow-md p-4 flex justify-between items-center mt-0 p-0">
      <h1 className="text-xl font-bold text-white">My Application</h1>
      <nav className="space-x-4 flex">
        <div className="text-gray-300 hover:text-blue-500">Home</div>
        <div className="text-gray-300 hover:hover:text-blue-500">About</div>
        <Link className="text-gray-300 hover:hover:text-blue-500" to='/contactUs'>Contact Us</Link>
      </nav>
    </header>
  );
};

export default Header;
