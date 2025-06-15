import React, { useCallback, useEffect, useRef, useState } from 'react';
import NewsCard from './NewsCard';
import LoadingSpinner from '../UI/LoadingSpinner';
import { getLatestNews } from '../../services/api-newsData';

export default function NewsList() {
  const [newsData, setNewsData] = useState([]);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  const [pageId, setPageId] = useState(null);
  const scrollContainerRef = useRef(null);

  const fetchNews = useCallback(
    async (page) => {
      if (isFetchingMore) return;

      if (page === null && newsData.length > 0) return;
      if (newsData.length === 0) {
        setIsFirstLoad(true);
      } else {
        setIsFetchingMore(true);
      }

      try {
        const data = await getLatestNews(page);
        setNewsData((prev) => [...prev, ...data.newsData]);
        setPageId(data.nextPage);
      } catch (error) {
        console.error('Failed to fetch news:', error);
      } finally {
        setIsFirstLoad(false);
        setIsFetchingMore(false);
      }
    },
    [isFetchingMore, newsData.length]
  );

  useEffect(() => {
    fetchNews(null);
  }, [fetchNews]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      const isNearBottom = scrollHeight - scrollTop - clientHeight < 1;

      if (isNearBottom && !isFetchingMore && pageId) {
        fetchNews(pageId);
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [fetchNews, isFetchingMore, pageId]);

  return (
    <div
      ref={scrollContainerRef}
      className="sm:px-10 px-6 col-span-4 h-screen overflow-y-scroll minimal-scrollbar"
    >
      <div className="py-3 sm:py-6">
        <h2 className="py-3 text-xl sm:text-2xl border-b border-stone-200 font-semibold">
          Latest Tech News
        </h2>
      </div>

      {isFirstLoad ? (
        <div className="flex justify-center items-center h-96">
          <LoadingSpinner messege="Loading news..." />
        </div>
      ) : (
        <>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
            {newsData.map((news, index) => (
              <NewsCard key={index} news={news} />
            ))}
          </div>

          {isFetchingMore && (
            <div className="flex justify-center my-6">
              <LoadingSpinner messege="Loading more news..." />
            </div>
          )}
        </>
      )}
    </div>
  );
}
