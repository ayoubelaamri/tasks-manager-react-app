import { Tooltip } from '@mui/material'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className='flex flex-col items-center justify-between h-full w-[100px] border-r border-gray-200 py-6'>
      <Link to='' className="">
        <img src={require("../../assets/images/logo.png")} alt="" className="w-12 shadow-md rounded-xl" />
      </Link>
      <ul className="grid gap-6 w-full">
      <Tooltip title="Dashboard" placement='right' arrow><li className="grid place-items-center hover:text-primary"><NavLink to='/admin' end className={({ isActive }) => isActive ? "flex justify-center border-r-4 border-primary w-full -mr-1 text-primary" : "flex justify-center w-full"}><i className="fa fa-chart-pie text-2xl"></i></NavLink></li></Tooltip>
      <Tooltip title="Tasks List" placement='right' arrow><li className="grid place-items-center hover:text-primary"><NavLink to='/admin/tasks-list' className={({ isActive }) => isActive ? "flex justify-center border-r-4 border-primary w-full -mr-1 text-primary" : "flex justify-center w-full"}><i className="fa fa-list-check text-2xl"></i></NavLink></li></Tooltip>
      <Tooltip title="Team Members" placement='right' arrow><li className="grid place-items-center hover:text-primary"><NavLink to='/admin/team-members' className={({ isActive }) => isActive ? "flex justify-center border-r-4 border-primary w-full -mr-1 text-primary" : "flex justify-center w-full"}><i className="fa fa-people-group text-2xl"></i></NavLink></li></Tooltip>
      <Tooltip title="Settings" placement='right' arrow><li className="grid place-items-center hover:text-primary"><NavLink to='/admin/settings' className={({ isActive }) => isActive ? "flex justify-center border-r-4 border-primary w-full -mr-1 text-primary" : "flex justify-center w-full"}><i className="fa fa-gear text-2xl"></i></NavLink></li></Tooltip>
      </ul>
      <div className="">
        <Link to='/' className='grid place-items-center hover:text-primary'>
          <i className="fa fa-sign-out text-2xl"></i>
          <span className="text-xs">SIGN OUT</span>
        </Link>
      </div>
    </div>
  )
}
