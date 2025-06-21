import React from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';

export default function Error() {
  const error = useRouteError();
  const navigate = useNavigate();
  let title = 'Oops';
  let message = 'Something went wrong.';
  if (error?.status === 404) {
    title = 'Page not found.';
    message = `The page you're looking for doesn’t exist or the link might be broken.
              Double-check the URL or head back to the homepage.`;
  } else if (error?.status === 429) {
    title = 'We’re Busy at the Moment';
    message = `Our news source is receiving a lot of traffic right now.
              Please hang tight — TechBite will refresh shortly with the latest headlines.`;
  }
  return (
    <div className="px-6 sm:px-16 md:px-36 py-28">
      <h1 className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-2">
        {title}
      </h1>
      <p className="text-sm sm:text-xl text-gray-600 dark:text-gray-400">
        {message}
      </p>
      <div className="text-right px-12 sm:px-22 mt-4">
        <button
          onClick={() => {
            navigate('/');
          }}
          className="cursor-pointer text-sm sm:text-xl text-gray-600 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-200"
        >
          Go to Home&rarr;
        </button>
      </div>
    </div>
  );
}
