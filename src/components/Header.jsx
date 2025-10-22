import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../assets/logo.png";

import { Home, AppWindow, Download, Github } from 'lucide-react';

const Header = () => {

  const navLinkClasses = ({ isActive }) =>
    `flex items-center gap-2 text-gray-500 font-semibold transition-colors duration-300 ${
      isActive ? 'text-blue-600 border-b-2 border-blue-600' : 'hover:text-blue-600'
    }`;

  const mobileNavLinkClasses = ({ isActive }) =>
    `flex items-center gap-2 px-3 py-2 text-base font-medium transition-colors duration-200 ${
      isActive ? 'text-purple-600 bg-purple-50' : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
    }`;

  return (
    <header className="shadow bg-white sticky top-0 z-50">
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <Link to="/" className="flex items-center gap-2">
            <img alt="Hero IO Logo" className="w-10" src={logo} />
            <h2 className="text-xl text-blue-600 uppercase font-semibold">
              HERO<span>.IO</span>
            </h2>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5">
            <li><NavLink to="/" className={navLinkClasses}><Home size={18} /> Home</NavLink></li>
            <li><NavLink to="/apps" className={navLinkClasses}><AppWindow size={20} /> Apps</NavLink></li>
            <li><NavLink to="/my-installation" className={navLinkClasses}><Download size={20} /> Installation</NavLink></li>
          </ul>
        </div>

        <div className="navbar-end">
          <a
            href="https://github.com/tanjirultusher" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn hidden sm:inline-flex bg-gradient-to-r from-violet-500 to-blue-500 text-white capitalize"
          >
            <Github size={18} />
            Contribute
          </a>

          <div className="dropdown dropdown-end lg:hidden ml-2">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-3">
              <li><NavLink to="/" className={mobileNavLinkClasses}><Home size={18} /> Home</NavLink></li>
              <li><NavLink to="/apps" className={mobileNavLinkClasses}><AppWindow size={20} /> Apps</NavLink></li>
              <li><NavLink to="/my-installation" className={mobileNavLinkClasses}><Download size={20} /> Installation</NavLink></li>
              <li>
                <a
                  href="https://github.com/tanjirultusher" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm bg-gradient-to-r from-violet-500 to-blue-500 text-white capitalize w-full mt-2"
                >
                  <Github size={18} />
                  Contribute
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
