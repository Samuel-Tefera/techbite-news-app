import React from 'react';

import '../components/Navigation';
import Navigation from '../components/Navigation';
import SideBar from '../components/SideBar';
import NewsCard from '../components/NewsCard';

const newsDataRequest = await fetch('../../mock/sample-news.json');
const newsData = await newsDataRequest.json();
const newsItems = newsData.results;

export default function Home() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <div className="sm:mt-23 mt-18">
        <div>
          <SideBar />
        </div>
        <div className="md:ml-[20%] w-max px-10 md:grid grid-cols-3 gap-4">
          {newsItems.map((news) => (
            <NewsCard news={news} />
          ))}
        </div>
      </div>
    </>
  );
}
