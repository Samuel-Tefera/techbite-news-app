import React from 'react';

export default function SearchNews() {
  return (
    <form className="flex items-center relative">
      <input
        className="w-56 text-sm md:text-lg md:w-96 border-2 rounded-full px-4 h-8 md:h-10 border-stone-200"
        type="text"
        placeholder="Search tech news..."
      />
      <button
        className="font-light text-stone-400 absolute md:left-[350px] left-[190px]"
        type="submit"
      >
        <i className="fas fa-search" />
      </button>
    </form>
  );
}
