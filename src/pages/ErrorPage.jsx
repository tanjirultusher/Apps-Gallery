import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import errorPNG from "../assets/error-404.png"

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col justify-center items-center text-center">
          <div className="mb-8">
            <img src={errorPNG} alt="404 Error" />
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">Oops! Page Not Found</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
          </p>

          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Link
              to="/"
              className="bg-[#632EE3] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#9F62F2] transition-colors duration-200 inline-block"
            >
              Go Back!
            </Link>
            
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ErrorPage;
