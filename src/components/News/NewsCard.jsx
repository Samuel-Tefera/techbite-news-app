import React from 'react';
import NewsKeyWord from './NewsKeyWord';
import { formatTimeAgo } from '../../utils/helper';

export default function NewsCard({ news }) {
  const { title, keywords, description, pubDate, image_url, source_id, link } =
    news;
  return (
    <div className="shadow-md rounded-b-md h-full flex flex-col bg-white dark:bg-gray-800 transition-colors duration-200">
      <div className="relative">
        <img
          className="w-full rounded-t-md h-48 object-cover dark:text-white"
          src={image_url}
          alt={`${title} - Tech News Image`}
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'images/fallback-image.png';
          }}
        />
      </div>
      <div className="pb-4 px-4 flex flex-col flex-grow">
        <NewsKeyWord keywords={keywords} />
        <h2 className="font-semibold text-gray-900 dark:text-white text-[1.1rem] mb-2 line-clamp-2">
          <a href={link}>{title}</a>
        </h2>
        <h3 className="text-gray-700 dark:text-gray-300 text-sm mb-4 line-clamp-3">
          <a href={link}>{description}</a>
        </h3>
        <div className="mt-auto">
          <a
            href={link}
            className="inline-block border border-blue-600 dark:border-blue-500 py-2 px-4 bg-blue-600 dark:bg-blue-500 rounded-md text-white font-medium text-sm hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
          >
            Read More Story <i className="fas fa-external-link-alt ml-1" />
          </a>
          <div className="flex justify-between mt-4 text-xs">
            <div className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400">
              <i className="far fa-clock" />
              <p>{formatTimeAgo(pubDate)}</p>
            </div>
            <p className="bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded-md text-gray-700 dark:text-gray-300">
              {source_id}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
