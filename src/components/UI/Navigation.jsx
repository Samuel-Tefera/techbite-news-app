import React from 'react';
import { Link } from 'react-router-dom';
import SearchNews from '../../features/SearchNews';
import ThemeToggler from './ThemeToggler';

export default function Navigation() {
  return (
    <nav className="flex bg-white dark:bg-gray-800 w-full fixed z-10 top-0 left-0 gap-2 items-center justify-between sm:px-16 px-2 py-4 shadow-md transition-colors duration-200">
      <div>
        <Link
          className="text-xl md:text-3xl sm:text-2xl font-semibold text-gray-900 dark:text-white transition-colors duration-200"
          to="#"
        >
          <span className="text-blue-600 dark:text-blue-400">Tech</span>
          <span className="text-gray-900 dark:text-white">Bite</span>
        </Link>
        <p className="lg:block hidden font-medium text-gray-600 dark:text-gray-300 transition-colors duration-200">
          Stay Sharp With Daily Tech Headlines!
        </p>
      </div>
      <div className="flex items-center gap-4">
        <SearchNews />
        <ThemeToggler />
      </div>
    </nav>
  );
}
