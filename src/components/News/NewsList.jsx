import React from 'react';
import NewsCard from './NewsCard';

export default function NewsList({ newsData }) {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
      {newsData.map((news) => (
        <NewsCard news={news} />
      ))}
    </div>
  );
}
