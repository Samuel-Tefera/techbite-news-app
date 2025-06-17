import React from 'react';

export default function EmptyNewsList({ message }) {
  return (
    <div className="flex flex-col items-center p-4 sm:p-10 justify-center">
      <h2 className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300">
        Faild to Fetch News
      </h2>
      <p className="text-sm sm:text-xl text-gray-600 dark:text-gray-400">
        {message}
      </p>
    </div>
  );
}
