import React from 'react'
import Calendar from '../../components/Calendar'
import { Link } from 'react-router-dom'

export default function Options() {
    return (
        <div className='flex flex-col gap-3 h-full shadow-sm p-6'>
            {/* Team Members */}
            <div className="flex flex-col gap-0 border-b border-gray-300">
                <div className="flex items-center justify-between w-full">
                    <span className="text-sm font-semibold">Team (25)</span>
                    <Link to='' className='text-xs text-gray-500 hover:text-primary hover:font-semibold'>View All</Link>
                </div>
                <div className="flex items-center w-full gap-1 overflow-x-auto p-3">
                    <div className="relative">
                        <img className="w-10 h-10 border-2 border-white shadow-md rounded-full" src={require('../../assets/images/avatars/2.jpg')} alt="" ></img>
                        <span className="bottom-0 left-7 absolute w-3.5 h-3.5 bg-green-400 border-2 border-white rounded-full"></span>
                    </div>
                    <div className="relative">
                        <div className="w-10 h-10 border-2 border-white shadow-md rounded-full grid place-items-center font-semibold bg-primary/30 px-3">A</div>
                        <span className="bottom-0 left-7 absolute w-3.5 h-3.5 bg-green-400 border-2 border-white rounded-full"></span>
                    </div>
                    <div className="relative">
                        <img className="w-10 h-10 border-2 border-white shadow-md rounded-full" src={require('../../assets/images/avatars/8.jpg')} alt="" ></img>
                        <span className="bottom-0 left-7 absolute w-3.5 h-3.5 bg-green-400 border-2 border-white rounded-full"></span>
                    </div>
                    <div className="relative">
                        <img className="w-10 h-10 border-2 border-white shadow-md rounded-full" src={require('../../assets/images/avatars/4.jpg')} alt="" ></img>
                        <span className="bottom-0 left-7 absolute w-3.5 h-3.5 bg-red-400 border-2 border-white rounded-full"></span>
                    </div>
                    <div className="relative">
                        <div className="w-10 h-10 border-2 border-white shadow-md rounded-full grid place-items-center font-semibold bg-primary/30 px-3">S</div>
                        <span className="bottom-0 left-7 absolute w-3.5 h-3.5 bg-red-400 border-2 border-white rounded-full"></span>
                    </div>
                    <div className="relative">
                        <div className="w-10 h-10 border-2 border-white shadow-md rounded-full grid place-items-center font-semibold bg-primary/30 px-3">E</div>
                        <span className="bottom-0 left-7 absolute w-3.5 h-3.5 bg-green-400 border-2 border-white rounded-full"></span>
                    </div>
                </div>
            </div>
            {/* Calendar */}
            <div className="border-b border-gray-300 pb-4">
                <Calendar />
            </div>
            {/* Messages */}
            <div className="flex flex-col w-full h-[calc(100vh-26em)] overflow-y-auto rounded-xl bg-gradient-to-br from-primary1 to-primary2 text-neutral2 shadow-lg p-6">
                <div className="flex items-center justify-between">
                    <span className="text-sm font-bold">Group Messages</span>
                    <i className="fa fa-comments"></i>
                </div>
            </div>
        </div>
    )
}
