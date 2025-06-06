import React from 'react';
import { Link } from 'react-router-dom';
import SearchNews from '../features/SearchNews';

export default function Navigation() {
  return (
    <nav className="flex flex-col gap-2 sm:flex-row text-center sm:text-left items-center justify-between px-16 py-4 shadow-md">
      <div>
        <Link className="text-2xl font-semibold" to="#">
          <span className="text-blue-700">Tech</span>Bite
        </Link>
        <p className="font-light">Stay Sharp With Daily Tech Headlines!</p>
      </div>
      <SearchNews />
    </nav>
  );
}
