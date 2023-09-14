import React, { Suspense } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Footer from './common/Footer'
import Navbar from './common/Navbar'
import Sidebar from './common/Sidebar'
import Loading from '../components/Loading'
import Calendar from '../components/Calendar'
import { Divider } from '@mui/material'
import Options from './common/Options'
import { AppProvider } from '../context/AppContext'

export default function AdminLayout() {
  return (
    <AppProvider>
      <div className="flex w-full h-full gap-0.5">
        <Sidebar />
        <div className="flex flex-col w-full h-full">
          <Navbar />
          <div className="flex w-full h-full">
            <div className="flex flex-col h-[calc(100vh-8em)] w-full p-6 overflow-y-auto">
              <Suspense fallback={<Loading />}>
                <Outlet />
              </Suspense>
            </div>
            <div className="w-[400px]">
              <Options />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </AppProvider>
  )
}
