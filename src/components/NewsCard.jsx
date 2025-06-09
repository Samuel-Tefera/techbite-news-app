import React from 'react';
import NewsKeyWord from './NewsKeyWord';

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
    <div>
      <img src={image_url} alt={title} />
      <NewsKeyWord keywords={keywords} />
      <a href={image_url}>
        <h2>{title}</h2>
      </a>
      <a href={link}>
        <h2>{description}</h2>
      </a>
      <div>
        <div>
          <p>⌚</p>
          <p>{pubDate}</p>
        </div>
        <p>{source_id}</p>
      </div>
    </div>
  );
}
