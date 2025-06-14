import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: null,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
