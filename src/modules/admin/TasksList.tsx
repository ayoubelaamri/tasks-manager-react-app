import { Tooltip } from '@mui/material'
import React from 'react'

export default function TasksList() {
  return (
    <div className="flex flex-col gap-6">
      {/* Selected Project */}
      <div className="flex items-center justify-between px-6 py-3 rounded-lg shadow-md bg-primary/10">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg shadow-md bg-white"></div>
          <div className="grid">
            <span className="font-semibold">Project X</span>
            <span className="text-sm">Create a web app to predict stock markets</span>
          </div>
        </div>
        <div className="flex justify-center -space-x-4">
          <img className="w-10 h-10 border-2 border-white rounded-full" src={require('../../assets/images/avatars/8.jpg')} alt="" />
          <img className="w-10 h-10 border-2 border-white rounded-full" src={require('../../assets/images/avatars/2.jpg')} alt="" />
          <img className="w-10 h-10 border-2 border-white rounded-full" src={require('../../assets/images/avatars/4.jpg')} alt="" />
          <a className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600" href="#">+2</a>
        </div>
        <div className="grid gap-1 -mb-3">
          <div className="flex items-center justify-between text-sm font-medium">
            <span className="">Progress</span>
            <span className="">75%</span>
          </div>
          <div className="w-40 bg-white rounded-full shadow-md h-2.5 mb-4">
            <div className="bg-blue-600 h-2.5 rounded-full dark:bg-primary w-[75%]"></div>
          </div>
        </div>
        <Tooltip title="New Task" placement='bottom' arrow>
          <button className="rounded-lg bg-gradient-to-br from-primary1 to-primary2 grid place-items-center gap-2 p-3 text-neutral2">
            <i className="fa-solid fa-plus"></i>
            {/* <span className="text-xs font-semibold">New Task</span> */}
          </button>
        </Tooltip>
      </div>
      {/* Project Tasks */}
      <div className='grid grid-cols-4 gap-3 w-full h-full'>
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between gap-3 w-full rounded-lg shadow-md bg-primary/75 text-neutral2 p-3">
            <span className="font-semibold text-sm">Unassigned - 02</span>
            <i className="fa fa-user-large-slash"></i>
          </div>
          <div className="flex flex-col gap-1 w-full h-full">
            {[1, 2].map((item: any) => {
              return (
                <div className="flex flex-col gap-2 rounded-lg shadow-lg bg-white/75 border border-gray-200 w-full p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold">#T286310</span>
                    <button className=""><i className="fa-solid fa-ellipsis"></i></button>
                  </div>
                  <p className="text-xs">Update system style to follow the new template.</p>
                  <div className="flex justify-end">
                    <button className="flex items-center gap-2 text-xs font-semibold bg-gradient-to-br from-primary1 to-primary2 text-neutral2 rounded-lg px-3 py-1">
                      <i className="fa-solid fa-user-plus"></i>
                      Assigne user
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between gap-3 w-full rounded-lg shadow-md bg-blue-500/75 text-neutral2 p-3">
            <span className="font-semibold text-sm">Assigned - 04</span>
            <i className="fa fa-user"></i>
          </div>
          <div className="flex flex-col gap-1 w-full h-full">
            {[1, 2, 3].map((item: any) => {
              return (
                <div className="flex flex-col gap-2 rounded-lg shadow-lg bg-white/75 border border-gray-200 w-full p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold">#T286310</span>
                    <button className=""><i className="fa-solid fa-ellipsis"></i></button>
                  </div>
                  <p className="text-xs">Update system style to follow the new template.</p>
                  <div className="flex justify-end gap-3">
                    <button className="flex items-center gap-2 text-xs font-semibold bg-gradient-to-br from-blue-500 to-blue-400 text-neutral2 rounded-lg px-3 py-1">
                      {/* <i className="fa-solid fa-user-plus"></i> */}
                      Mark as Started
                    </button>
                    <div className="relative -mt-4 pr-3">
                      <img className="w-10 h-10 border-2 border-white shadow-md rounded-full" src={require('../../assets/images/avatars/8.jpg')} alt="" ></img>
                      <span className="bottom-0 left-7 absolute w-3.5 h-3.5 bg-green-400 border-2 border-white rounded-full"></span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between gap-3 w-full rounded-lg shadow-md bg-yellow-500/75 text-neutral2 p-3">
            <span className="font-semibold text-sm">In Progress - 04</span>
            <i className="fa fa-hourglass-half"></i>
          </div>
          <div className="flex flex-col gap-1 w-full h-full">
            {[1, 2].map((item: any) => {
              return (
                <div className="flex flex-col gap-2 rounded-lg shadow-lg bg-white/75 border border-gray-200 w-full p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold">#T286310</span>
                    <button className=""><i className="fa-solid fa-ellipsis"></i></button>
                  </div>
                  <p className="text-xs">Update system style to follow the new template.</p>
                  <div className="flex justify-end gap-3">
                    <button className="flex items-center gap-2 text-xs font-semibold bg-gradient-to-br from-yellow-500 to-yellow-400 text-neutral2 rounded-lg px-3 py-1">
                      {/* <i className="fa-solid fa-user-plus"></i> */}
                      Mark Complete
                    </button>
                    <div className="relative -mt-4 pr-3">
                      <img className="w-10 h-10 border-2 border-white shadow-md rounded-full" src={require('../../assets/images/avatars/8.jpg')} alt="" ></img>
                      <span className="bottom-0 left-7 absolute w-3.5 h-3.5 bg-green-400 border-2 border-white rounded-full"></span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between gap-3 w-full rounded-lg shadow-md bg-green-500/75 text-neutral2 p-3">
            <span className="font-semibold text-sm">Completed - 03</span>
            <i className="fa fa-check-circle"></i>
          </div>
          <div className="flex flex-col gap-1 w-full h-full">
            {[1].map((item: any) => {
              return (
                <div className="flex flex-col gap-2 rounded-lg shadow-lg bg-white/75 border border-gray-200 w-full p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold">#T286310</span>
                    <button className=""><i className="fa-solid fa-ellipsis"></i></button>
                  </div>
                  <p className="text-xs">Update system style to follow the new template.</p>
                  <div className="flex justify-end gap-3">
                    <div className="flex items-center gap-2 text-xs font-semibold border-2 border-green-500 text-green-500 rounded-lg px-3 py-1">
                      <i className="fa-solid fa-check"></i>
                      Completed
                    </div>
                    <div className="relative -mt-4 pr-3">
                      <img className="w-10 h-10 border-2 border-white shadow-md rounded-full" src={require('../../assets/images/avatars/8.jpg')} alt="" ></img>
                      <span className="bottom-0 left-7 absolute w-3.5 h-3.5 bg-green-400 border-2 border-white rounded-full"></span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
