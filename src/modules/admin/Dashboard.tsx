import React from 'react'
import LineChart from '../../components/charts/LineChart'
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'

export default function Dashboard() {
  return (
    <div className='flex flex-col gap-6 w-full h-full'>
      <div className="grid grid-cols-4 gap-6 w-full">
        {/* Start New Project Button */}
        <div className="flex flex-col items-center gap-3 justify-between rounded-xl shadow-xl bg-gradient-to-br from-primary1 to-primary2 text-neutral2 p-6">
          <i className="fa fa-rocket text-5xl"></i>
          <span className="text-center font-semibold">Get ahead with a Fresh start</span>
          <button className="flex items-center gap-2 bg-white/40 hover:bg-white/50 rounded-lg px-4 py-2">
            <i className="fa fa-plus"></i>
            <span className="text-sm font-semibold">New Project</span>
          </button>
        </div>
        {/* Tasks Summary */}
        <div className="col-span-3 grid grid-cols-3 rounded-xl shadow-xl bg-white/75 border border-gray-300 px-6 py-3">
          <div className="col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-2 font-semibold text-sm"><i className="fa-solid fa-chart-column"></i>Tasks Summary</div>
            <div className="grid grid-cols-3 gap-5 h-full w-full pr-6">
              <div className="overflow-hidden grid place-items-center relative h-full rounded-lg shadow-lg bg-gradient-to-br from-primary1/50 to-primary2/50 text-neutral2">
                <i className="absolute -top-1 -left-0 fa fa-suitcase text-7xl text-neutral2/30"></i>
                <span className="absolute top-4 right-3 text-3xl font-bold">23</span>
                <span className="pt-16 py-3 text-sm font-semibold text-center">New Tasks</span>
              </div>
              <div className="overflow-hidden grid place-items-center relative h-full rounded-lg shadow-lg bg-gradient-to-br from-primary1/75 to-primary2/75 text-neutral2">
                <i className="absolute -top-1 -left-0 fa fa-hourglass-half text-7xl text-neutral2/30"></i>
                <span className="absolute top-4 right-3 text-3xl font-bold">23</span>
                <span className="pt-16 py-3 text-sm font-semibold text-center">In Progress</span>
              </div>
              <div className="overflow-hidden grid place-items-center relative h-full rounded-lg shadow-lg bg-gradient-to-br from-primary1 to-primary2 text-neutral2">
                <i className="absolute -top-5 -left-3 fa fa-check-circle text-8xl text-neutral2/30"></i>
                <span className="absolute top-4 right-3 text-3xl font-bold">23</span>
                <span className="pt-16 py-3 text-sm font-semibold text-center">Completed</span>
              </div>
            </div>
            <div className="flex items-center justify-between px-5 pr-10">
              <span className="text-sm font-semibold text-gray-500">On time Completion rate :</span>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg">94 %</span>
                <span className="font-semibold text-xs px-3 py-1 rounded-lg bg-green-400/30"><i className="fa fa-caret-up"></i> 10 %</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 border-l border-gray-300 pl-6">
            <div className="flex items-center gap-2 font-semibold text-sm"><i className="fa-solid fa-users"></i>Team</div>
            <div className="flex justify-center -space-x-4">
              <img className="w-10 h-10 border-2 border-white rounded-full" src={require('../../assets/images/avatars/1.jpg')} alt="" />
              <img className="w-10 h-10 border-2 border-white rounded-full" src={require('../../assets/images/avatars/2.jpg')} alt="" />
              <img className="w-10 h-10 border-2 border-white rounded-full" src={require('../../assets/images/avatars/3.jpg')} alt="" />
              <img className="w-10 h-10 border-2 border-white rounded-full" src={require('../../assets/images/avatars/4.jpg')} alt="" />
              <a className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600" href="#">+99</a>
            </div>
          </div>
        </div>
      </div>
      {/* My Projects */}
      <div className="grid gap-3">
        <div className="flex items-center justify-between px-6">
          <span className="text-sm font-bold">My Projects</span>
          <button className="flex items-center gap-2 text-xs font-semibold hover:text-primary">
            View All <i className="fa fa-chevron-right"></i>
          </button>
        </div>
        <div className="flex flex-col gap-2 gap- w-full">
          {/* <Accordion>
            <AccordionSummary
              expandIcon={<i className='fa fa-chevron-down' />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              Accordion 1
            </AccordionSummary>
            <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
            </AccordionDetails>
          </Accordion> */}
          {[1, 2, 3, 4, 5].map((item: any) => {
            return (
              <div className="flex items-center justify-between px-6 py-3 rounded-lg shadow-md bg-primary/10 border border-gray-300">
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
                <button className="w-6 h-6 rounded-lg bg-white/30 grid place-items-center">
                  <i className="fa-solid fa-ellipsis-vertical"></i>
                </button>
              </div>
            )
          })}

        </div>
      </div>
    </div >
  )
}
