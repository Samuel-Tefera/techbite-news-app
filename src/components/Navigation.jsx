import React from 'react';
import { Link } from 'react-router-dom';
import SearchNews from '../features/SearchNews';

export default function Navigation() {
  return (
    <nav className="flex w-full gap-2 items-center justify-between sm:px-16 px-2 py-4 shadow-md">
      <div>
        <Link className="text-2xl font-semibold" to="#">
          <span className="text-blue-600">Tech</span>Bite
        </Link>
        <p className="font-light sm:block hidden">Stay Sharp With Daily Tech Headlines!</p>
      </div>
      <SearchNews />
    </nav>
  );
}
