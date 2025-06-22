import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Home from './pages/Home';
import Error, { ErrorBoundary } from './pages/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ErrorBoundary>
        <Home />
      </ErrorBoundary>
    ),
    errorElement: <Error />,
  },
]);

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
        <RouterProvider router={router} />
      </div>
    </ThemeProvider>
  );
}
