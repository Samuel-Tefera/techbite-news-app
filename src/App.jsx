import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Home from './pages/Home';
import { SearchProvider } from './context/SearchContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: null,
  },
]);

export default function App() {
  return (
    <ThemeProvider>
      <SearchProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
          <RouterProvider router={router} />
        </div>
      </SearchProvider>
    </ThemeProvider>
  );
}
