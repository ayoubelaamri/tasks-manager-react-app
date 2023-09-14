import React from 'react'
import { Link } from 'react-router-dom'

export default function SignIn() {
  return (
    <div className='flex flex-col gap-6'>
      <h1 className="text-center text-xl font-semibold">Sign in to your account</h1>
      <div className="grid grid-cols-3 mx-auto gap-5">
        <button className="grid place-items-center rounded-md bg-white w-10 h-10 text-red-400"><i className="fa-brands fa-google text-2xl"></i></button>
        <button className="grid place-items-center rounded-md bg-white w-10 h-10 text-blue-400"><i className="fa-brands fa-linkedin text-2xl"></i></button>
        <button className="grid place-items-center rounded-md bg-white w-10 h-10 text-blue-600"><i className="fa-brands fa-facebook text-2xl"></i></button>
      </div>
      <div className='text-center text-xs'>__________ OR __________</div>
      <div className="grid gap-2 text-neutral">
        <input type="text" className="rounded-lg px-3 py-1 shadow-md" placeholder='Username' />
        <input type="password" className="rounded-lg px-3 py-1 shadow-md" placeholder='*********' />
        <div className="flex gap-2">
          <input type="checkbox" className="" />
          <label htmlFor="" className="text-neutral2 text-xs font-semibold">Remember me</label>
        </div>
      </div>
      <Link to='/admin' className='flex items-center gap-2 px-6 py-1.5 rounded-full bg-white/30 hover:bg-white/40 mx-auto font-semibold text-sm'>
        <i className="fa fa-sign-in"></i>
        <span className="">LOGIN</span>
      </Link>
    </div>
  )
}
