import React from 'react';

export default function SearchNews() {
  return (
    <form>
      <input
        className="bg-amber-50 rounded-full w-44 h-7 text-stone-900 px-4 py-0.25 md:w-96 focus:outline-none focus:w-56"
        type="text"
        placeholder="search for news"
      />
    </form>
  );
}
