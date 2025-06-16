import React from 'react';

export default function SearchNews() {
  return (
    <form className="flex items-center relative">
      <input
        className="w-56 text-sm md:text-lg md:w-96 border-2 rounded-full px-4 h-8 md:h-10 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
        type="text"
        placeholder="Search tech news..."
      />
      <button
        className="font-light text-gray-500 dark:text-gray-400 absolute md:left-[350px] left-[190px] hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
        type="submit"
      >
        <i className="fas fa-search" />
      </button>
    </form>
  );
}
