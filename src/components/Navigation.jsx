import React from 'react';
import { Link } from 'react-router-dom';
import SearchNews from '../features/SearchNews';

export default function Navigation() {
  return (
    <nav className="flex items-center justify-between py-3 px-4 bg-slate-800 text-amber-100">
      <Link className="text-xl sm:text-2xl">TechBite</Link>
      <SearchNews />
      <div className="hidden sm:block">
        <ul className="flex items-center justify-between gap-4">
          <li className="">Home</li>
          <li className="">About Us</li>
        </ul>
      </div>
    </nav>
  );
}
