import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="branding flex items-center py-4 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="logo flex items-center">
            <h1 className="text-2xl font-bold text-gray-800">Vaidya</h1>
          </Link>

          <nav id="navmenu" className="hidden lg:block">
            <ul className="flex space-x-6">
              <li>
                <Link to="/" className="text-gray-800 hover:text-blue-600 transition">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-800 hover:text-blue-600 transition">About</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-800 hover:text-blue-600 transition">Services</Link>
              </li>
              <li>
                <Link to="/departments" className="text-gray-800 hover:text-blue-600 transition">Departments</Link>
              </li>
              <li>
                <Link to="/doctors" className="text-gray-800 hover:text-blue-600 transition">Doctors</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-800 hover:text-blue-600 transition">Contact</Link>
              </li>
            </ul>
          </nav>

          <div className="hidden sm:flex space-x-4">
            <Link
              to="/appointment"
              className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md transition"
            >
              Make an Appointment
            </Link>

            <Link
              to="/Login"
              className="text-white bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-md transition"
            >
              Login
            </Link>
          </div>

          <button className="lg:hidden text-gray-800 focus:outline-none">
            <i className="bi bi-list text-2xl"></i>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
