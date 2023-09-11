import React from 'react'

export default function Calendar() {
    return (
        <div className='flex flex-col'>

            <span className="text-sm text-gray-400 pt-0">Calendar</span>
            <div className="flex items-center justify-between pb-3">
                <span className="font-semibold">September, 2023</span>
                <div className="flex gap-2">
                    <button className="text-gray-400 hover:text-primary"><i className="fa fa-circle-chevron-left"></i></button>
                    <button className="text-gray-400 hover:text-primary"><i className="fa fa-circle-chevron-right"></i></button>
                </div>
            </div>

            <div className='flex bg-white/75 shadow-md justify-start md:justify-center rounded-lg overflow-x-scroll mx-auto py-2 px-0'>

                <div className='flex group hover:bg-purple-100 hover:shadow-lg hover-light-shadow rounded-lg mx-1 transition-all	duration-300	 cursor-pointer justify-center w-16'>
                    <div className='flex items-center p-2'>
                        <div className='text-center'>
                            <p className='text-gray-900 group-hover:text-purple-900 text-sm transition-all	duration-300'> Mon </p>
                            <p className='text-gray-900 group-hover:text-purple-900 mt-0 group-hover:font-bold transition-all	duration-300'> 12 </p>
                        </div>
                    </div>
                </div>

                <div className='flex group hover:bg-purple-100 hover:shadow-lg hover-light-shadow rounded-lg mx-1 transition-all	duration-300	 cursor-pointer justify-center w-16'>
                    <div className='flex items-center p-2'>
                        <div className='text-center'>
                            <p className='text-gray-900 group-hover:text-purple-900 text-sm transition-all	duration-300'> Tue </p>
                            <p className='text-gray-900 group-hover:text-purple-900 mt-0 group-hover:font-bold transition-all	duration-300'> 13</p>
                        </div>
                    </div>
                </div>

                <div className='flex group bg-purple-300 shadow-lg light-shadow rounded-lg mx-1 cursor-pointer justify-center relative w-16 content-center'>
                    <span className="flex h-3 w-3 absolute -top-1 -right-1">
                        <span className="animate-ping absolute group-hover:opacity-75 opacity-0 inline-flex h-full w-full rounded-full bg-purple-400 "></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
                    </span>
                    <div className='flex items-center p-2'>
                        <div className='text-center'>
                            <p className='text-purple-900 text-sm'> Wed </p>
                            <p className='text-purple-900  mt-0 font-bold'> 14 </p>
                        </div>
                    </div>
                </div>

                <div className='flex group hover:bg-purple-100 hover:shadow-lg hover-light-shadow rounded-lg mx-1 transition-all	duration-300 content-center	 cursor-pointer justify-center w-16'>
                    <div className='flex items-center p-2'>
                        <div className='text-center'>
                            <p className='text-gray-900 group-hover:text-purple-900 text-sm transition-all	duration-300'> Thu </p>
                            <p className='text-gray-900 group-hover:text-purple-900 mt-0 group-hover:font-bold transition-all	duration-300'> 15 </p>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}
