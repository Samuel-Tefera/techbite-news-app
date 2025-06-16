import React, { useState } from 'react';

export default function SideBar() {
  const [isSideBarHidden, setSideBarHidden] = useState(true);

  let sideBarClasses =
    'fixed lg:static h-screen shadow-md px-4 py-8 bg-white dark:bg-gray-800 z-50 transition-all duration-300 ease-in-out text-gray-900 dark:text-gray-100';
  let sideButtonClasses = 'lg:hidden cursor-pointer z-40';

  if (isSideBarHidden) {
    sideBarClasses += ' -translate-x-full lg:translate-x-0';
    sideButtonClasses = 'lg:hidden cursor-pointer z-40';
  } else {
    sideBarClasses += ' translate-x-0';
    sideButtonClasses = 'hidden cursor-pointer';
  }

  function openSideBarHandler() {
    setSideBarHidden(false);
  }

  function closeSideBarHandler() {
    setSideBarHidden(true);
  }

  return (
    <>
      <button onClick={openSideBarHandler} className={sideButtonClasses}>
        <i className="text-xl font-light fixed fas fa-list left-1 text-gray-900 dark:text-gray-100" />
      </button>
      <div className={sideBarClasses}>
        <div className="border-b border-b-stone-200 dark:border-gray-700 mb-4">
          <h3 className="text-xl font-bold pb-2 text-gray-900 dark:text-white">
            Filters
          </h3>
          <button
            onClick={closeSideBarHandler}
            className="absolute top-0 font-light right-1 text-xl cursor-pointer lg:hidden text-gray-900 dark:text-gray-100"
          >
            <i className="fas fa-xmark" />
          </button>
        </div>
        <form className="text-gray-700 dark:text-gray-300">
          <div className="mb-4 space-y-2">
            <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
              Categories
            </h4>
            <div className="flex items-center gap-2.5">
              <input
                type="checkbox"
                value="ai"
                checked
                className="dark:accent-blue-500"
              />
              <label className="text-gray-700 dark:text-gray-300">
                Artificial Intelligence
              </label>
            </div>
            <div className="flex items-center gap-2.5">
              <input
                type="checkbox"
                value="hw"
                checked
                className="dark:accent-blue-500"
              />
              <label className="text-gray-700 dark:text-gray-300">
                Hardware
              </label>
            </div>
            <div className="flex items-center gap-2.5">
              <input
                type="checkbox"
                value="sw"
                checked
                className="dark:accent-blue-500"
              />
              <label className="text-gray-700 dark:text-gray-300">
                Software
              </label>
            </div>
            <div className="flex items-center gap-2.5">
              <input
                type="checkbox"
                value="startups"
                checked
                className="dark:accent-blue-500"
              />
              <label className="text-gray-700 dark:text-gray-300">
                Startups
              </label>
            </div>
            <div className="flex items-center gap-2.5">
              <input
                type="checkbox"
                value="cyber"
                checked
                className="dark:accent-blue-500"
              />
              <label className="text-gray-700 dark:text-gray-300">
                Cybersecurity
              </label>
            </div>
          </div>
          <div className="mb-4">
            <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
              Date Range
            </h4>
            <select className="py-2 px-4 rounded-md w-full bg-stone-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 dark:border-gray-600">
              <option value="all" className="text-gray-900 dark:text-gray-100">
                All Time
              </option>
              <option value="day" className="text-gray-900 dark:text-gray-100">
                Last 24 Hours
              </option>
              <option value="week" className="text-gray-900 dark:text-gray-100">
                Last Week
              </option>
              <option
                value="month"
                className="text-gray-900 dark:text-gray-100"
              >
                Last Month
              </option>
            </select>
          </div>
          <div className="mb-8">
            <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
              Sort By
            </h4>
            <select className="py-2 px-4 rounded-md w-full bg-stone-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 dark:border-gray-600">
              <option
                value="newest"
                className="text-gray-900 dark:text-gray-100"
              >
                Newest First
              </option>
              <option
                value="oldest"
                className="text-gray-900 dark:text-gray-100"
              >
                Oldest First
              </option>
              <option
                value="popular"
                className="text-gray-900 dark:text-gray-100"
              >
                Most Popular
              </option>
            </select>
          </div>
          <div className="text-center">
            <button className="text-white bg-blue-600 dark:bg-blue-500 px-4 py-2 w-full rounded-md uppercase font-semibold cursor-pointer hover:bg-blue-700 dark:hover:bg-blue-600 transition-all">
              Apply Filters
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
