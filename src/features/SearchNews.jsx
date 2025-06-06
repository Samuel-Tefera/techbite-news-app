import React from 'react';

export default function SearchNews() {
  return (
    <form className="flex items-center relative">
      <input
        className="md:w-96 w-56 border-2 rounded-full px-4 h-10 border-stone-200"
        type="text"
        placeholder="Search tech news..."
      />
      <button
        className="font-light text-stone-400 absolute md:left-[350px] left-[190px]"
        type="submit"
      >
        <i class="fas fa-search"></i>
      </button>
    </form>
  );
}
