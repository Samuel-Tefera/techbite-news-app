import React, { useState } from 'react';

export default function SideBar() {
  const [isSideBarHidden, setSideBarHidden] = useState(true);

  let sideBarClasses =
    'fixed md:static h-screen shadow-md px-4 py-8 bg-white z-50 transition-all duration-300 ease-in-out';
  let sideButtonClasses = 'md:hidden cursor-pointer z-40';

  if (isSideBarHidden) {
    sideBarClasses += ' -translate-x-full md:translate-x-0';
    sideButtonClasses = 'md:hidden cursor-pointer z-40';
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
        <i className="text-xl font-light fixed fas fa-list"></i>
      </button>
      <div className={sideBarClasses}>
        <div className="border-b border-b-stone-200 mb-4">
          <h3 className="text-xl font-bold pb-2">Filters</h3>
          <button
            onClick={closeSideBarHandler}
            className="absolute top-0 font-light right-[1px] text-xl cursor-pointer md:hidden"
          >
            <i className="fas fa-xmark"></i>
          </button>
        </div>
        <form>
          <div className="mb-4 space-y-2">
            <h4 className="font-semibold mb-2">Categories</h4>
            <div className="flex items-center gap-2.5">
              <input type="checkbox" value="ai" checked />
              <label>Artificial Intelligence</label>
            </div>
            <div className="flex items-center gap-2.5">
              <input type="checkbox" value="hw" checked />
              <label>Hardware</label>
            </div>
            <div className="flex items-center gap-2.5">
              <input type="checkbox" value="sw" checked />
              <label>Software</label>
            </div>
            <div className="flex items-center gap-2.5">
              <input type="checkbox" value="startups" checked />
              <label>Startups</label>
            </div>
            <div className="flex items-center gap-2.5">
              <input type="checkbox" value="cyber" checked />
              <label>Cybersecurity</label>
            </div>
          </div>
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Date Range</h4>
            <select className="py-2 px-4 rounded-md w-full bg-stone-100">
              <option value="all">All Time </option>
              <option value="day">Last 24 Hours</option>
              <option value="week">Last Week</option>
              <option value="month">Last Month</option>
            </select>
          </div>
          <div className="mb-8">
            <h4 className="font-semibold mb-2">Sort By</h4>
            <select className="py-2 px-4 rounded-md w-full bg-stone-100">
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="popular">Most Popular</option>
            </select>
          </div>
          <div className="text-center">
            <button className="text-white bg-blue-600 px-4 py-2 w-full rounded-md uppercase font-semibold cursor-pointer hover:bg-blue-700 transition-all">
              Apply Filters
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
