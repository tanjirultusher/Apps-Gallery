import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { ToastContainer, toast } from 'react-toastify';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LoadingSpinner from '../components/LoadingSpinner';
import IconDownloads from '../assets/icon-downloads.png';
import IconRatings from '../assets/icon-ratings.png';
import IconReview from '../assets/icon-review.png';
import AppNotFoundPNG from "../assets/App-Error.png";


const AppDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [app, setApp] = useState(null);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('installedApps');
    if (stored) {
      const installed = JSON.parse(stored);
      setIsInstalled(installed.some(installedApp => installedApp.id === parseInt(id)));
    }

    const timer = setTimeout(() => {
      fetch('/appData.json')
        .then((res) => res.json())
        .then((data) => {
          const foundApp = (data || []).find((a) => a.id === parseInt(id));
          if (foundApp) setApp(foundApp);
        })
        .catch(() => setApp(null))
        .finally(() => setLoading(false));
    }, 800);

    return () => clearTimeout(timer);
  }, [id]);

  const handleInstall = () => {
    if (isInstalled || !app) return;
    const newInstalledApp = { ...app, installedAt: new Date().toISOString() };
    const installed = JSON.parse(localStorage.getItem('installedApps') || '[]');
    const updatedInstalledApps = [...installed, newInstalledApp];
    localStorage.setItem('installedApps', JSON.stringify(updatedInstalledApps));
    setIsInstalled(true);
    toast.success('App Installed Successfully');
  };

  const formatNumber = (num) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(0)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(0)}K`;
    return num.toString();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <LoadingSpinner size="large" message="Loading app details..." />
      </div>
    );
  }

  if (!app) {
    return (
      <div className="min-h-screen bg-gray-100">
        <Header />
        <div className="max-w-7xl flex flex-col justify-center items-center mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <img src={AppNotFoundPNG} alt="App Not Found" />
          <h1 className="text-3xl font-bold text-gray-900 mb-4">App Not Found</h1>
          <p className="text-gray-600 mb-8">The app you're looking for doesn't exist.</p>
          <button onClick={() => navigate('/apps')} className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Browse All Apps
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  const chartData = [...app.ratings].reverse();

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <Header />
      <ToastContainer position="bottom-right" />

      <main className="max-w-5xl mx-auto px-4 py-10 space-y-8">
        <section className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-white p-6 rounded-2xl shadow-sm">
          <div className="flex-shrink-0">
            <img src={app.image} alt={app.title} className="w-36 h-36 md:w-44 md:h-44 rounded-xl shadow-lg" />
          </div>

          <div className="w-full max-w-lg p-2 flex flex-col gap-4 text-center md:text-left">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">{app.title}</h1>
              <p className="text-sm md:text-base text-gray-500 mt-1">
                Developed by <span className="text-blue-600 font-medium">{app.companyName}</span>
              </p>
              <hr className="border-t border-gray-200 mt-4" />
            </div>

            <div className="grid grid-cols-3 gap-4 text-sm text-gray-600 mt-3">
              <div className="flex flex-col items-center md:items-start gap-1">
                <p className="font-medium text-gray-700">Downloads</p>
                <div className="flex items-center gap-2 mt-1">
                  <img src={IconDownloads} alt="downloads" className="w-5 h-5 opacity-90" />
                  <p className="text-lg font-semibold text-gray-900">{formatNumber(app.downloads)}</p>
                </div>
              </div>
              <div className="flex flex-col items-center md:items-start gap-1">
                <p className="font-medium text-gray-700">Avg Rating</p>
                <div className="flex items-center gap-2 mt-1">
                  <img src={IconRatings} alt="rating" className="w-5 h-5 opacity-90" />
                  <p className="text-lg font-semibold text-gray-900">{app.ratingAvg}</p>
                </div>
              </div>
              <div className="flex flex-col items-center md:items-start gap-1">
                <p className="font-medium text-gray-700">Reviews</p>
                <div className="flex items-center gap-2 mt-1">
                  <img src={IconReview} alt="reviews" className="w-5 h-5 opacity-90" />
                  <p className="text-lg font-semibold text-gray-900">{app.reviews}</p>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <button
                onClick={handleInstall}
                disabled={isInstalled}
                className={`w-full inline-flex items-center justify-center px-5 py-3 rounded-xl text-base font-semibold transition-colors duration-150 focus:outline-none ${isInstalled ? 'bg-gray-200 text-gray-600 cursor-not-allowed' : 'bg-orange-500 text-white hover:bg-orange-600 shadow-md'}`}
              >
                {isInstalled ? '✓ Installed' : `Install Now — ${app.size} MB`}
              </button>
            </div>
          </div>
        </section>

        <section className="p-6 md:p-8 rounded-2xl space-y-8 bg-white shadow-sm">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Ratings</h2>
            <div className="w-full h-60">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} layout="vertical" margin={{ top: 0, right: 0, left: -10, bottom: 0 }}>
                  <XAxis type="number" hide />
                  <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} width={60} tick={{ fill: '#6b7280', fontSize: 14 }} />
                  <Tooltip cursor={{ fill: '#f3f4f6' }} contentStyle={{ borderRadius: '0.5rem', border: '1px solid #e5e7eb' }} />
                  <Bar dataKey="count" fill="#f97316" barSize={18} radius={[0, 8, 8, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <hr />
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Description</h2>
            <div className="text-gray-700 leading-relaxed space-y-4 prose max-w-none">
              {app.description.split('\n').map((paragraph, index) => (
                <p key={index}>{paragraph || '\u00A0'}</p>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AppDetails;