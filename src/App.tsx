
import React from 'react';
import './App.css';
import { Navigate, RouterProvider, createBrowserRouter, redirect } from 'react-router-dom';

import AuthLayout from './layouts/AuthLayout';
import AdminLayout from './layouts/AdminLayout';

const SignIn = React.lazy(() => import("./modules/auth/SignIn"));
const SignUp = React.lazy(() => import("./modules/auth/SignUp"));
const Dashboard = React.lazy(() => import("./modules/admin/Dashboard"));
const TasksList = React.lazy(() => import("./modules/admin/TasksList"));
const TeamMembers = React.lazy(() => import("./modules/admin/TeamMembers"));
const Settings = React.lazy(() => import("./modules/admin/Settings"));
const NotFound = React.lazy(() => import("./components/NotFound"));



const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/auth/sign-in" />,
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
      },
      {
        path: '/admin/tasks-list',
        element: <TasksList />
      },
      {
        path: '/admin/team-members',
        element: <TeamMembers />
      },
      {
        path: '/admin/settings',
        element: <NotFound />
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
    <div className="h-screen w-screen grid place-items-center bg-gray-200 p-6 bg-[url('assets/images/bg1.jpg')] bg-cover text-neutral font-roboto">
      <div className="bg-white/50 backdrop-blur-lg w-full h-full rounded-xl shadow-xl border border-gray-300">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
