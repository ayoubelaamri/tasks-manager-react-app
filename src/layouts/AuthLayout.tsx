import React, { Suspense } from 'react'
import Footer from './common/Footer'
import { Outlet } from 'react-router-dom'
import Loading from '../components/Loading'

export default function AuthLayout() {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="grid grid-cols-3 w-full h-full p-1">
        <div className="col-span-2 bg-primary/20 rounded-l-xl">
          <div className="-ml-[30px] flex flex-col gap-6 items-center justify-center w-full h-full">
            <div className="grid rounded-full shadow-lg w-40 h-40">
              <img src={require("../assets/images/logo.png")} alt="" className="w-40 rounded-xl" />
            </div>
            <div className="grid place-items-center gap-2">
              <span className="text-3xl font-bold font-poppins">Easy Tasks</span>
              <p className="">Boost your employees' performance ..</p>
            </div>
          </div>
        </div>
        <div className="grid place-items-center">
          <div className="-ml-[200px] h-[400px] w-[400px] grid place-items-center shadow-xl bg-gradient-to-br from-primary1 to-primary2 text-neutral2">
            <Suspense fallback={<Loading />}>
              <Outlet />
            </Suspense>
          </div>
        </div>
      </div>
      <Footer />
    </div >
  )
}
