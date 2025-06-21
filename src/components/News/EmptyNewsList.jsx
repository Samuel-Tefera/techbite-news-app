import React from 'react';

export default function EmptyNewsList() {
  return (
    <div className="flex flex-col items-center p-4 sm:p-10 justify-center mt-4">
      <h2 className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-2">
        We Looked Everywhere...
      </h2>
      <p className="text-sm sm:text-xl text-gray-600 dark:text-gray-400">
        But there’s nothing that matches your search. Try more general terms or
        explore other trending topics.
      </p>
    </div>
  );
}
