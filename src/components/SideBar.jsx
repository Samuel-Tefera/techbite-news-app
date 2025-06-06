import React from 'react';

export default function SideBar() {
  return (
    <div className="w-1/5 fixed h-screen shadow-md px-4 py-8">
      <h3 className="text-xl font-bold border-b border-b-stone-200 pb-2 mb-4">Filters</h3>
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
          <button className="text-sky-100 bg-blue-600 px-4 py-2 w-full rounded-md uppercase font-semibold">
            Apply Filters
          </button>
        </div>
      </form>
    </div>
  );
}
