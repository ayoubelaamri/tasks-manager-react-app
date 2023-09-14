import { Divider, ListItemIcon, Menu, MenuItem, TextField } from '@mui/material'
import React from 'react'
import AccountMenu from '../../components/AccountMenu';
import NotificationsMenu from '../../components/NotificationsMenu';

export default function Navbar() {
  return (
    <div className='flex items-center justify-between w-full h-[60px] border-b border-gray-200'>
      <div className="flex items-center justify-between px-10 pr-20 gap-10 w-full">
        {/* <div className="flex items-center">
          <div className="flex items-center justify-center gap-3 h-[55px] border-b-4 border-primary pl-6 pr-8">
            <i className="fa fa-chart-pie" />
            <span className="text-xl font-bold font-poppins">Dashboard</span>
          </div>
        </div> */}
        <div className=""></div>
        <div className="flex items-center">
          <input type="text" className="w-80 rounded-md px-3 py-1 text-sm shadow-sm" placeholder='Search projects, tasks or users ..' />
          <i className="fa fa-search text-neutral -ml-7"></i>
        </div>
      </div>
      <div className="w-[460px] flex items-center justify-between px-6">
        <AccountMenu />
        <NotificationsMenu />
      </div>
    </div>
  )
}
