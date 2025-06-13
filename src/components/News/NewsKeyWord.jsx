import React from 'react';

export default function NewsKeyWord({ keywords }) {
  if (!keywords) return;
  const keys = keywords.slice(0, 3);
  return (
    <ul className="flex gap-2 mb-4 mt-4">
      {keys.map((keyword) => (
        <li className="text-xs bg-blue-600 px-1 py-0.5 text-white rounded-md">
          {keyword}
        </li>
      ))}
    </ul>
  );
}
