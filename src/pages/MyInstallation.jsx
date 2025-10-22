import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LoadingSpinner from '../components/LoadingSpinner';
import IconDownloads from '../assets/icon-downloads.png';
import IconRatings from '../assets/icon-ratings.png';
 


const MyInstallation = () => {
  const [loading, setLoading] = useState(true);
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState('desc');

  useEffect(() => {
    const timer = setTimeout(() => {
      const stored = localStorage.getItem('installedApps');
      if (stored) {
        setInstalledApps(JSON.parse(stored));
      }
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const handleUninstall = (appId) => {
    const updatedApps = installedApps.filter(app => app.id !== appId);
    setInstalledApps(updatedApps);
    localStorage.setItem('installedApps', JSON.stringify(updatedApps));
    toast.success('App Uninstalled');
  };

  const formatDownloads = (downloads) => {
    if (downloads >= 1000000) return `${(downloads / 1000000).toFixed(0)}M`;
    if (downloads >= 1000) return `${(downloads / 1000).toFixed(0)}K`;
    return downloads.toString();
  };
  
  const sortedApps = [...installedApps].sort((a, b) => {
    return sortOrder === 'desc' ? b.size - a.size : a.size - b.size;
  });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <LoadingSpinner size="large" message="Loading your installations..." />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <ToastContainer position="bottom-right" />

      <main className="px-5 lg:w-11/12 mx-auto py-10">

        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-800 flex justify-center items-center gap-3">
            Your Installed Apps
          </h2>
          <p className="text-center text-gray-500 mt-2 px-4">
            Manage your installed applications
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
          <h2 className="text-md md:text-lg underline font-bold text-purple-700">
            {sortedApps.length} App{sortedApps.length !== 1 ? 's' : ''} Found
          </h2>
          {sortedApps.length > 0 && (
            <div>
              <select 
                className="select select-sm md:select-md bg-white border-gray-300 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="" disabled>Sort By Size</option>
                <option value="desc">High-Low</option>
                <option value="asc">Low-High</option>
              </select>
            </div>
          )}
        </div>
        
        <hr className="mb-6 border-gray-200" />

        {sortedApps.length > 0 ? (
          <div className="grid grid-cols-1 gap-5">
            {sortedApps.map((app) => (
              <div key={app.id} className="flex flex-col sm:flex-row items-center gap-4 p-3 rounded-xl bg-white shadow-sm transition-all duration-200 hover:shadow-md">
                <Link to={`/apps/${app.id}`} className="w-16 h-16 sm:w-14 sm:h-14 shrink-0">
                  <img alt={app.title} className="w-full h-full object-cover rounded-xl" src={app.image} />
                </Link>
                <div className="flex-1 text-center sm:text-left">
                  <Link to={`/apps/${app.id}`}>
                    <p className="font-medium text-gray-800 line-clamp-1">{app.title}</p>
                  </Link>
                  <div className="flex items-center justify-center sm:justify-start gap-4 text-xs mt-1 text-gray-500">
                    <span className="flex items-center gap-1 text-green-600">
                      <img src={IconDownloads} alt="downloads" className="w-4 h-4" /> {formatDownloads(app.downloads)}
                    </span>
                    <span className="flex items-center gap-1 text-purple-600">
                      <img src={IconRatings} alt="rating" className="w-4 h-4" /> {app.ratingAvg}
                    </span>
                    <span>{app.size} MB</span>
                  </div>
                </div>
                <button 
                  onClick={() => handleUninstall(app.id)}
                  className="bg-red-500 text-white font-semibold px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg hover:bg-red-600 transition-colors text-sm sm:text-base"
                >
                  Uninstall
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-xl font-medium text-gray-900 mt-4 mb-2">No Apps Installed</h3>
            <p className="text-gray-500 mb-6">
              You haven't installed anything yet. Let's fix that!
            </p>
            <Link
              to="/apps"
              className="bg-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors duration-200 inline-block"
            >
              Browse Apps
            </Link>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default MyInstallation;