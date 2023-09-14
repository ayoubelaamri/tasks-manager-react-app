import React, { useContext } from 'react'
import Calendar from '../../components/Calendar'
import { Link } from 'react-router-dom'
import AppContext from '../../context/AppContext'

export default function Options() {
    const { users } = useContext(AppContext)

    return (
        <div className='flex flex-col gap-3 h-full shadow-sm p-6'>
            {/* Team Members */}
            <div className="flex flex-col gap-0 border-b border-gray-300">
                <div className="flex items-center justify-between w-full">
                    <span className="text-sm font-semibold">Team (25)</span>
                    <Link to='/admin/team-members' className='text-xs text-gray-500 hover:text-primary hover:font-semibold'>View All</Link>
                </div>
                <div className="flex items-center w-full gap-1 overflow-x-auto p-3">
                    {users && users.map((user, index) => {
                        if (index < 6) return (
                            user?.avatar ? (
                                <div key={index} className="relative">
                                    <img className="w-10 h-10 border-2 border-white shadow-md rounded-full" src={require('../../assets/images/avatars/' + user?.avatar)} alt="" ></img>
                                    <span className="bottom-0 left-7 absolute w-3.5 h-3.5 bg-green-400 border-2 border-white rounded-full"></span>
                                </div>
                            ) : (
                                <div key={index} className="relative">
                                    <div className="w-10 h-10 border-2 border-white shadow-md rounded-full grid place-items-center font-semibold bg-primary/30 px-3">{user?.name.charAt(0)}</div>
                                    <span className="bottom-0 left-7 absolute w-3.5 h-3.5 bg-green-400 border-2 border-white rounded-full"></span>
                                </div>
                            )
                        )
                    })}
                </div>
            </div>
            {/* Calendar */}
            <div className="border-b border-gray-300 pb-4">
                <Calendar />
            </div>
            {/* Messages */}
            <div className="flex flex-col gap-6 w-full h-[calc(100vh-26em)] overflow-y-auto rounded-xl bg-gradient-to-br from-primary1 to-primary2 text-neutral2 shadow-lg p-6">
                <div className="flex items-center justify-between">
                    <span className="text-sm font-bold">Group Messages</span>
                    <i className="fa fa-comments"></i>
                </div>
                <div className="flex flex-col gap-4">
                    {[1, 2].map((item, index) => {
                        return (
                            <div key={index} className="flex gap-2">
                                <img className="w-6 h-6 border-2 border-white shadow-md rounded-full" src={require('../../assets/images/avatars/4.jpg')} alt="" ></img>
                                <div className="grid gap-1">
                                    <span className="font-semibold">Grace Rowe</span>
                                    <p className="text-sm -ml-4 pt-2 text-gray-200">"I didn't fully understand the task #672, could you please provide more details."</p>
                                    <span className="text-xs text-right pr-3">23 min ago</span>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}
