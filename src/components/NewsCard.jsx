import React from 'react';
import NewsKeyWord from './NewsKeyWord';
import { formatTimeAgo } from '../utils/helper';

export default function NewsCard({ news }) {
  const {
    title,
    keywords,
    description,
    // content,
    pubDate,
    image_url,
    source_id,
    link,
  } = news;
  return (
    <div className="w-[320px] shadow-md rounded-b-md">
      <img className="h-44 w-full rounded-md" src={image_url} alt={title} />
      <div className="py-4 px-6">
        <NewsKeyWord keywords={keywords} />
        <h2 className="font-semibold text-stone-800 text-[1.1rem] underline mb-4">
          <a href={link}>{title}</a>
        </h2>
        <h3 className="text-stone-700 text-sm underline">
          <a href={link}>{description}</a>
        </h3>
        <div className="flex justify-between mt-4">
          <div className="flex items-center gap-1.5 text-stone-600">
            <i class="far fa-clock text-shadow-stone-600" />
            <p className="text-stone-600">{formatTimeAgo(pubDate)}</p>
          </div>
          <p className="bg-stone-200 px-1 py-0.5 rounded-md text-stone-700">{source_id}</p>
        </div>
      </div>
    </div>
  );
}
