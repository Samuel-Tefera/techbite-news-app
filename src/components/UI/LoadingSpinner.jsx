import React from 'react';

export default function LoadingSpinner({ messege }) {
  return (
    <div className="flex flex-col items-center p-11 justify-center">
      <div className="spinner mb-2 border-t-blue-600 dark:border-t-blue-400 border-l-blue-600 dark:border-l-blue-400"></div>
      <p className="text-sm text-gray-600 dark:text-gray-400">{messege}</p>
    </div>
  );
}
