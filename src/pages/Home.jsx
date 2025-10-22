import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LoadingSpinner from '../components/LoadingSpinner';
import Banner from '../components/Banner';
import Trusted from '../components/Trusted';
import IconDownloads from '../assets/icon-downloads.png';
import IconRatings from '../assets/icon-ratings.png';

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [apps, setApps] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            fetch('/appData.json')
                .then((res) => res.json())
                .then((data) => setApps(data))
                .catch(() => setApps([]))
                .finally(() => setLoading(false));
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    const topApps = apps.slice(0, 8);

    const formatDownloads = (downloads) => {
        if (downloads >= 1000000) return `${(downloads / 1000000).toFixed(0)}M`;
        if (downloads >= 1000) return `${(downloads / 1000).toFixed(0)}K`;
        return downloads.toString();
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <LoadingSpinner size="large" message="Loading Hero IO..." />
            </div>
        );
    }

    return (

        <div className="min-h-screen bg-gray-100">
            <Header />

            <main>
                <section className="w-full pt-10 overflow-hidden">
                    <Banner />
                </section>

                <section>
                    <Trusted />
                </section>


                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-4xl font-bold text-center flex justify-center items-center gap-3 text-gray-800">
                            Trending Apps
                        </h2>
                        <p className="text-center text-gray-500 mb-10">
                            Explore All Trending Apps on the Market developed by us
                        </p>
                        <div className="w-11/12 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                            {topApps.map((app) => (
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
                        <div className="text-center mt-12">
                            <Link
                                to="/apps"
                                className="inline-block text-white font-semibold px-10 py-3 rounded-lg hover:shadow-xl bg-gradient-to-tr from-purple-600 to-blue-500 transition-shadow"
                            >
                                Show All Apps
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Home;