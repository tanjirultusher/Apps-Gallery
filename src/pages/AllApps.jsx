import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LoadingSpinner from '../components/LoadingSpinner';
import IconDownloads from '../assets/icon-downloads.png';
import IconRatings from '../assets/icon-ratings.png';

const HeaderIcon = ({ className }) => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 32 32" className={className} height="48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M17.319 9.414c-2.444 2.444-4.5 4.435-4.597 4.435-0.081 0-1.424-0.987-2.962-2.185l-2.784-2.185-2.266 1.133v11.331l2.266 1.133 2.574-2.007c1.425-1.117 2.736-2.12 2.914-2.234 0.324-0.194 0.647 0.097 4.84 4.274l4.484 4.484 2.752-1.117 2.752-1.101v-18.195l-2.104-0.842c-1.149-0.47-2.396-0.955-2.768-1.101l-0.664-0.259-4.435 4.435zM21.706 16.278c0 2.493-0.032 4.532-0.097 4.532-0.227 0-5.73-4.435-5.682-4.581 0.049-0.178 5.471-4.468 5.666-4.468 0.065-0.016 0.114 2.023 0.114 4.516zM8.837 14.659l1.619 1.619-1.619 1.619c-0.89 0.89-1.667 1.619-1.732 1.619-0.081 0-0.13-1.457-0.13-3.237s0.048-3.238 0.13-3.238c0.065 0 0.842 0.729 1.732 1.619z"></path></svg>
);
const SearchIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
        <circle cx="11" cy="11" r="8"></circle>
        <path d="m21 21-4.3-4.3"></path>
      </g>
    </svg>
);

const AllApps = () => {
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [apps, setApps] = useState([]);
    const [filteredApps, setFilteredApps] = useState([]);
    useEffect(() => {

        const timer = setTimeout(() => {
            fetch('/appData.json')
                .then((res) => res.json())
                .then((data) => {
                    setApps(data);
                    setFilteredApps(data);
                })
                .catch(() => {
                    setApps([]);
                    setFilteredApps([]);
                })
                .finally(() => setLoading(false));
        }, 800);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const results = apps.filter(app =>
            app.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredApps(results);
    }, [searchTerm, apps]);
    
    const formatDownloads = (downloads) => {
        if (downloads >= 1000000) return `${(downloads / 1000000).toFixed(0)}M`;
        if (downloads >= 1000) return `${(downloads / 1000).toFixed(0)}K`;
        return downloads.toString();
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <LoadingSpinner size="large" message="Loading all apps..." />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <main>
                <div className="py-10 md:py-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 flex justify-center items-center gap-3 ">
                        Our All Applications
                    </h2>
                    <p className="text-center text-gray-500 mt-4 px-4">
                        Explore All Apps on the Market developed by us. We code for Millions
                    </p>
                </div>

                <div className="w-11/12 mx-auto flex flex-col md:flex-row gap-4 items-center justify-between py-4">
                    <h2 className="text-md md:text-lg font-bold text-gray-800">
                        ({filteredApps.length}) Apps Found
                    </h2>
                    <div className="relative w-full md:max-w-xs">
                        <SearchIcon className="h-5 w-5 absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
                        <input
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            required
                            placeholder="Search Apps"
                            type="search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                <div className="w-11/12 mx-auto my-10">
                    {filteredApps.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                            {filteredApps.map((app) => (
                                <Link
                                    key={app.id}
                                    to={`/apps/${app.id}`}
                                    className="group flex flex-col bg-white rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 p-4 gap-4"
                                >
                                    <figure className="aspect-square w-full">
                                        <img alt={app.title} className="h-full w-full object-cover rounded-2xl bg-gray-100" src={app.image} />
                                    </figure>
                                    <div className="flex-grow flex items-center">
                                        <p className="font-semibold text-center w-full text-gray-800">{app.title}</p>
                                    </div>
                                    <div className="flex justify-between items-center text-xs">
                                        <div className="flex items-center gap-1 bg-green-100 text-green-700 font-medium px-2 py-1 rounded-full">
                                            <img src={IconDownloads} alt="downloads" className="w-4 h-4" />
                                            <span>{formatDownloads(app.downloads)}</span>
                                        </div>
                                        <div className="flex items-center gap-1 bg-purple-100 text-purple-700 font-medium px-2 py-1 rounded-full">
                                            <img src={IconRatings} alt="rating" className="w-4 h-4" />
                                            <span>{app.ratingAvg}</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16 col-span-full">
                            <h3 className="text-xl font-medium text-gray-900 mb-2">No Apps Found</h3>
                            <p className="text-gray-500 mb-4">
                                We couldn't find any apps matching "{searchTerm}".
                            </p>
                            <button
                                onClick={() => setSearchTerm('')}
                                className="bg-purple-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors duration-200"
                            >
                                Clear Search
                            </button>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default AllApps;