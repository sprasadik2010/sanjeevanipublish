import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbarmenu = () => {
    return (
        <div className="flex flex-col lg:flex-row lg:space-x-4">
            <NavLink to="/" className="text-green-700 hover:text-yellow-400 hover:border-b-2 hover:border-yellow-400 transition-colors duration-300 py-2">
                Home
            </NavLink>
            <NavLink to="/about" className="text-green-700 hover:text-yellow-400 hover:border-b-2 hover:border-yellow-400 transition-colors duration-300 py-2">
                About
            </NavLink>
            <NavLink to="/ourservice" className="text-green-700 hover:text-yellow-400 hover:border-b-2 hover:border-yellow-400 transition-colors duration-300 py-2">
                Our Service
            </NavLink>
            <NavLink to="/media" className="text-green-700 hover:text-yellow-400 hover:border-b-2 hover:border-yellow-400 transition-colors duration-300 py-2">
                Media
            </NavLink>
            <NavLink to="/contact" className="text-green-700 hover:text-yellow-400 hover:border-b-2 hover:border-yellow-400 transition-colors duration-300 py-2">
                Contact
            </NavLink>
        </div>
    );
};

export default Navbarmenu;
