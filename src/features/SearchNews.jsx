import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchNews() {
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();
  function searchNewsHandler(e) {
    e.preventDefault();
    navigate(`/?search=${encodeURIComponent(searchInput.trim())}`);
  }
  return (
    <form onSubmit={searchNewsHandler} className="flex items-center relative">
      <input
        className="xs-screen w-48 text-sm md:text-lg md:w-96 border-2 rounded-full px-4 h-8 md:h-10 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
        type="text"
        placeholder="Search tech news..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button
        className="xs-button font-light text-gray-500 dark:text-gray-400 absolute md:left-[350px] left-[160px] hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
        type="submit"
      >
        <i className="fas fa-search" />
      </button>
    </form>
  );
}
