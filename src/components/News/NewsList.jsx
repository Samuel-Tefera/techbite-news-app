import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import NewsCard from './NewsCard';
import LoadingSpinner from '../UI/LoadingSpinner';
import { getLatestNews } from '../../services/api-newsData';
import EmptyNewsList from './EmptyNewsList';
import { useSearchParams } from 'react-router-dom';

export default function NewsList() {
  const [newsData, setNewsData] = useState([]);
  const [error, setError] = useState(null);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  const [pageId, setPageId] = useState(null);

  const scrollContainerRef = useRef(null);

  const [params] = useSearchParams();
  const categoryFilter = useMemo(() => params.getAll('category'), [params]);
  const query = useMemo(() => params.get('search'), [params]);

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
        const data = await getLatestNews(page, query, categoryFilter);
        setNewsData((prev) => [...prev, ...data.newsData]);
        setPageId(data.nextPage);
      } catch (error) {
        setError(error);
      } finally {
        setIsFirstLoad(false);
        setIsFetchingMore(false);
      }
    },
    [isFetchingMore, newsData.length, query, categoryFilter]
  );

  useEffect(() => {
    fetchNews(null);
  }, [fetchNews]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      setIsFirstLoad(true);
      setNewsData([]);
      setError(null);

      try {
        const data = await getLatestNews(null, query, categoryFilter);
        setNewsData(data.newsData);
        setPageId(data.nextPage);
      } catch (e) {
        setError(e);
      } finally {
        setIsFirstLoad(false);
      }
    };

    fetchSearchResults();
  }, [query, categoryFilter]);

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

  if (error) throw error;

  return (
    <div
      ref={scrollContainerRef}
      className="sm:px-10 px-6 col-span-4 h-screen overflow-y-scroll minimal-scrollbar bg-gray-50 dark:bg-gray-900"
    >
      <div className="py-3 sm:py-6">
        <h2 className="py-3 text-xl sm:text-2xl border-b border-gray-200 dark:border-gray-700 font-semibold text-gray-900 dark:text-white">
          {query
            ? `Your Search "${query}" Latest Tech News Result`
            : 'Latest Tech News'}
        </h2>
      </div>
      {newsData.length === 0 && !isFirstLoad && !isFetchingMore ? (
        <EmptyNewsList />
      ) : (
        <>
          {isFirstLoad ? (
            <div className="flex justify-center items-center h-96">
              <LoadingSpinner message="Loading news..." />
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
                  <LoadingSpinner message="Loading more news..." />
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}
