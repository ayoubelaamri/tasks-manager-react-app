import React, { Suspense } from 'react'
import Navbar from './common/Navbar'
import Footer from './common/Footer'
import { Outlet } from 'react-router-dom'

export default function LandingLayout() {
  return (
    <div className="flex flex-col w-full h-full">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
