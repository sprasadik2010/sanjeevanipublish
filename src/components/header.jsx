import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSquare, faBars } from '@fortawesome/free-solid-svg-icons';
import Navbarmenu from './NavbarMenu';
import { BrowserRouter as Router } from "react-router-dom";
import Logo from './logo';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="bg-gray-50 p-4">
            <div className="flex justify-between items-center">
                <Logo />
                <button 
                    className="lg:hidden px-4 py-2 text-gray-600 focus:outline-none" 
                    onClick={toggleMenu}
                >
                    <FontAwesomeIcon icon={faBars} className="text-xl" />
                </button>
                <nav 
                    className={`fixed top-0 left-0 h-full w-64 pl-10 sm:pl-0 bg-gray-500 sm:bg-gray-50 transform transition-transform duration-500 ease-in-out z-50 ${
                        menuOpen ? 'translate-x-0' : '-translate-x-full'
                    } lg:relative lg:transform-none lg:flex lg:items-center lg:space-x-4 lg:mt-0 lg:w-auto lg:h-auto`}
                >
                    <Router>
                        <Navbarmenu />
                    </Router>
                    <div className="flex items-center space-x-4 mt-4 lg:mt-0 hidden md:flex">
                        <button className='bg-green-700 text-white rounded py-2 px-4 transition-colors duration-300 hover:bg-yellow-400'>
                            Book Now
                        </button>
                        <div className='flex items-center space-x-2'>
                            <FontAwesomeIcon icon={faPhoneSquare} className="text-green-700 text-3xl" />
                            <div className="text-center">
                                <h5 className="text-lg font-bold text-green-700">Consult Now</h5>
                                <h6 className="text-base text-black">+91 73068 92428</h6>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}
