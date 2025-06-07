import React, { useState } from 'react';

export default function SideBar() {
  const [isSideBarHidden, setSideBarHidden] = useState(true);
  let sideBarClasses;
  let sideButtonClasses;
  if (isSideBarHidden) {
    sideBarClasses = 'md:w-1/5 hidden md:block w-1/2 fixed h-screen shadow-md px-4 py-8';
    sideButtonClasses = 'md:hidden cursor-pointer';
  } else {
    sideBarClasses = 'md:w-1/5  w-1/2 fixed h-screen shadow-md px-4 py-8';
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
        Sidebar
      </button>
      <div className={sideBarClasses}>
        <div className="border-b border-b-stone-200  mb-4">
          <h3 className="text-xl font-bold  pb-2">Filters</h3>
          <button
            onClick={closeSideBarHandler}
            className="absolute top-0 right-[1px] cursor-pointer md:hidden"
          >
            ===
          </button>
        </div>
        <form>
          <div className="mb-4 space-y-2">
            <h4 className="font-semibold mb-2">Categories</h4>
            <div className="flex items-center gap-2.5">
              <input type="checkbox" value="ai" checked />
              <lable>Artificial Intelligence</lable>
            </div>
            <div className="flex items-center gap-2.5">
              <input type="checkbox" value="hw" checked />
              <lable>Hardware</lable>
            </div>
            <div className="flex items-center gap-2.5">
              <input type="checkbox" value="sw" checked />
              <lable>Software</lable>
            </div>
            <div className="flex items-center gap-2.5">
              <input type="checkbox" value="startups" checked />
              <lable>Startups</lable>
            </div>
            <div className="flex items-center gap-2.5">
              <input type="checkbox" value="cyber" checked />
              <lable>Cybersecurity</lable>
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
