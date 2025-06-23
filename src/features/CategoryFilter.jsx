import React, { useState } from 'react';

export default function CategoryFilter({ onFilter }) {
  const [categories, setCategories] = useState([
    'ai',
    'hw',
    'sw',
    'startups',
    'cyber',
  ]); // default: all selected
  const [dateRange, setDateRange] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    setCategories((prev) =>
      prev.includes(value) ? prev.filter((c) => c !== value) : [...prev, value]
    );
  };

  const handleDateChange = (e) => setDateRange(e.target.value);
  const handleSortChange = (e) => setSortBy(e.target.value);

  const categoryFilterHandler = (e) => {
    e.preventDefault();
    onFilter({ categories, dateRange, sortBy }); // send filters to parent
  };

  return (
    <form
      onSubmit={categoryFilterHandler}
      className="text-gray-700 dark:text-gray-300"
    >
      <div className="mb-4 space-y-2">
        <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
          Categories
        </h4>

        {[
          ['ai', 'Artificial Intelligence'],
          ['hw', 'Hardware'],
          ['sw', 'Software'],
          ['startups', 'Startups'],
          ['cyber', 'Cybersecurity'],
        ].map(([value, label]) => (
          <div key={value} className="flex items-center gap-2.5">
            <input
              type="checkbox"
              value={value}
              checked={categories.includes(value)}
              onChange={handleCheckboxChange}
              className="dark:accent-blue-500"
            />
            <label className="text-gray-700 dark:text-gray-300">{label}</label>
          </div>
        ))}
      </div>

      <div className="mb-4">
        <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
          Date Range
        </h4>
        <select
          value={dateRange}
          onChange={handleDateChange}
          className="py-2 px-4 rounded-md w-full bg-stone-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 dark:border-gray-600"
        >
          <option value="all">All Time</option>
          <option value="day">Last 24 Hours</option>
          <option value="week">Last Week</option>
          <option value="month">Last Month</option>
        </select>
      </div>

      <div className="mb-8">
        <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
          Sort By
        </h4>
        <select
          value={sortBy}
          onChange={handleSortChange}
          className="py-2 px-4 rounded-md w-full bg-stone-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 dark:border-gray-600"
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
          <option value="popular">Most Popular</option>
        </select>
      </div>

      <div className="text-center">
        <button
          type="submit"
          className="text-white bg-blue-600 dark:bg-blue-500 px-4 py-2 w-full rounded-md uppercase font-semibold cursor-pointer hover:bg-blue-700 dark:hover:bg-blue-600 transition-all"
        >
          Apply Filters
        </button>
      </div>
    </form>
  );
}
