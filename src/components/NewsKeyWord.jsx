import React from 'react';

export default function NewsKeyWord({ keywords }) {
  return (
    <ul>
      {keywords.map((keyword) => (
        <li>{keyword}</li>
      ))}
    </ul>
  );
}
