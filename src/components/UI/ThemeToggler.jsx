import React from 'react';
import { useTheme } from '../../context/ThemeContext';

export default function ThemeToggler() {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      type="button"
      className="h-8 md:h-10 relative inline-flex w-16 md:w-20 items-center rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300 ease-in-out focus:outline-none"
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <span
        className={`${
          isDarkMode ? 'translate-x-7 md:translate-x-10' : 'translate-x-1'
        } inline-block h-8 w-8 transform rounded-full bg-white dark:bg-gray-800 shadow-lg ring-0 transition-transform duration-300 ease-in-out`}
      >
        {isDarkMode ? (
          <i className="fas fa-moon text-blue-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm" />
        ) : (
          <i className="fas fa-sun text-blue-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm" />
        )}
      </span>
    </button>
  );
}
