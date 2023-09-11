import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './common/Footer'
import Navbar from './common/Navbar'
import Sidebar from './common/Sidebar'
import Loading from '../components/Loading'

export default function AdminLayout() {
  return (
    <div className="flex w-full h-full gap-0.5">
      <Sidebar />
      <div className="flex flex-col w-full h-full">
        <Navbar />
        <div className="flex w-full h-full">
          <div className="flex flex-col h-full w-full p-6">
            <Suspense fallback={<Loading />}>
              <Outlet />
            </Suspense>
          </div>
          <div className="lex flex-col items-center justify-between h-full w-[400px] shadow-sm">

          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}
