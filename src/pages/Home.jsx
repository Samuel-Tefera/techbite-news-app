import React, { useEffect, useState } from 'react';

import '../components/Navigation';
import Navigation from '../components/Navigation';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer';
import LoadingSpinner from '../components/LoadingSpinner';
import NewsList from '../components/News/NewsList';
import { getLatestNews } from '../services/api-newsData';

export default function Home() {
  const [newsData, setNewsData] = useState(null);

  useEffect(() => {
    async function fetchNews() {
      const data = await getLatestNews();
      setNewsData(data.newsData);
    }
    fetchNews();
  }, []);

  return (
    <>
      <header>
        <Navigation />
      </header>
      <main className="grid md:grid-cols-5 sm:mt-23 mt-18">
        <div className="col-span-1">
          <SideBar />
        </div>
        <div className="sm:px-10 px-6 col-span-4 h-screen overflow-y-scroll minimal-scrollbar">
          <div className="py-3 sm:py-6">
            <h2 className="py-3 text-xl sm:text-2xl border-b border-stone-200 font-semibold">
              Latest Tech News
            </h2>
          </div>
          {!newsData && (
            <div>
              <LoadingSpinner />
            </div>
          )}
          {newsData && <NewsList newsData={newsData} />}
        </div>
      </main>
      <Footer />
    </>
  );
}
