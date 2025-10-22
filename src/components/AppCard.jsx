import React from 'react';
import { Link } from 'react-router-dom';

const AppCard = ({ app, showInstallButton = false, onInstall = null, isInstalled = false }) => {
  const formatDownloads = (downloads) => {
    if (downloads >= 1000000) {
      return `${(downloads / 1000000).toFixed(1)}M`;
    } else if (downloads >= 1000) {
      return `${(downloads / 1000).toFixed(1)}K`;
    }
    return downloads.toString();
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={i} className="text-yellow-400">★</span>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half" className="text-yellow-400">☆</span>
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className="text-gray-300">☆</span>
      );
    }

    return stars;
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden">
      <Link to={`/apps/${app.id}`} className="block">
        <div className="aspect-square bg-gray-100 flex items-center justify-center p-4">
          <img
            src={app.image}
            alt={app.title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-1 line-clamp-1">
            {app.title}
          </h3>
          <p className="text-sm text-gray-600 mb-2">{app.companyName}</p>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                {renderStars(app.ratingAvg)}
              </div>
              <span className="text-sm text-gray-600">({app.reviews})</span>
            </div>
            <span className="text-sm text-gray-600">
              {formatDownloads(app.downloads)} downloads
            </span>
          </div>
          <p className="text-sm text-gray-700 line-clamp-2 mb-3">
            {app.description}
          </p>
          <div className="text-xs text-gray-500">
            Size: {app.size} MB
          </div>
        </div>
      </Link>

      {showInstallButton && (
        <div className="p-4 pt-0">
          <button
            onClick={() => onInstall && onInstall(app)}
            disabled={isInstalled}
            className={`w-full py-2 px-4 rounded-lg font-medium transition-all duration-200 ${
              isInstalled
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transform hover:scale-[1.02]'
            }`}
          >
            {isInstalled ? '✓ Installed' : 'Install App'}
          </button>
        </div>
      )}
    </div>
  );
};

export default AppCard;
