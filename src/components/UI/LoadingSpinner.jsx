import React from 'react';

export default function LoadingSpinner({ messege }) {
  return (
    <div className="flex flex-col items-center p-11 justify-center">
      <div className="spinner mb-2"></div>
      <p className="text-sm text-stone-500">{messege}</p>
    </div>
  );
}
