import React from 'react';
import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Button } from '@mui/material';
import LandingLayout from './layouts/LandingLayout';
import AuthLayout from './layouts/AuthLayout';
import AdminLayout from './layouts/AdminLayout';

import Home from './modules/landing/Home';
import SignIn from './modules/auth/SignIn';
import SignUp from './modules/auth/SignUp';
import Dashboard from './modules/admin/Dashboard';


const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      }
    ]
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: '/auth/sign-in',
        element: <SignIn />
      },
      {
        path: '/auth/sign-up',
        element: <SignUp />
      }
    ]
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: '/admin',
        element: <Dashboard />
      }
    ]
  },
  {
    path: "*",
    element: <div className="">Page Not Found !</div>,
  }
]);

function App() {
  return (
    <div className="h-screen w-screen grid place-items-center bg-gray-200 p-6">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
