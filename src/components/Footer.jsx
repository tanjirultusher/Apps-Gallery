import React from 'react';
import { Mail, Facebook, Twitter, Github, Linkedin } from 'lucide-react';
import logo from "../assets/logo.png"
const Footer = () => {
  return (
    <footer className="bg-[#12141e] text-white pt-10">
      <div className="container mx-auto px-6">

        <div className="flex justify-evenly items-center  pb-10">
          
          <div className="sm:col-span-2 lg:col-span-1">
            <div className='flex gap-x-2 items-center mb-4'>
            <img alt="Hero IO Logo" className="w-10" src={logo} />
            <h3 className="text-2xl font-bold "> Hero.IO</h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-xs">
              The ultimate destination for discovering the best apps and games.
            </p>
          </div>
          

          <div>
            <h4 className="font-bold text-lg mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Facebook size={24} />
              </a>
              <a target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Twitter size={24} />
              </a>
              <a target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Github size={24} />
              </a>
              <a target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 py-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} HERO.IO. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};



export default Footer;