import React, { useState } from 'react';
import CategoryFilter from '../../features/CategoryFilter';

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
          <CategoryFilter />
        </div>
      </div>
    </>
  );
}
