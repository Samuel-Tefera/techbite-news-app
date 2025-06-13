import React from 'react';
import NewsKeyWord from './NewsKeyWord';
import { formatTimeAgo } from '../utils/helper';

export default function NewsCard({ news }) {
  const { title, keywords, description, pubDate, image_url, source_id, link } =
    news;
  return (
    <div className="shadow-md rounded-b-md h-full flex flex-col">
      <img
        className="w-full rounded-t-md h-48 object-cover"
        src={image_url}
        alt={title}
      />
      <div className="pb-4 px-2 flex flex-col flex-grow">
        <NewsKeyWord keywords={keywords} />
        <h2 className="font-semibold text-stone-800 text-[1.1rem] mb-2 line-clamp-2">
          <a href={link}>{title}</a>
        </h2>
        <h3 className="text-stone-700 text-sm mb-4 line-clamp-3">
          <a href={link}>{description}</a>
        </h3>
        <div className="mt-auto">
          <a
            href={link}
            className="border border-[#2563eb] py-2 px-4 bg-[#2563eb] rounded-md text-white font-medium text-sm"
          >
            Read More Story <i class="fas fa-external-link-alt" />
          </a>
          <div className="flex justify-between mt-4 text-xs">
            <div className="flex items-center gap-1.5 text-stone-600">
              <i class="far fa-clock text-shadow-stone-600" />
              <p className="text-stone-600">{formatTimeAgo(pubDate)}</p>
            </div>
            <p className="bg-stone-200 px-1 py-0.5 rounded-md text-stone-700">
              {source_id}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
