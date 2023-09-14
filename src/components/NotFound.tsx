import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <>
            {/* Page Title */}
            <div className="flex items-center">
                <div className="absolute -top-0 left-40 flex items-center justify-center gap-3 h-[55px] border-b-4 border-primary pl-6 pr-8">
                <i className="fa-solid fa-circle-exclamation"></i>
                    <span className="text-xl font-bold font-poppins">Error 404</span>
                </div>
            </div>
            <div className='grid place-items-center w-full h-full'>
                <div className="grid text-center gap-3">
                    <span className="text-9xl font-extrabold text-primary pb-6">404</span>
                    <span className="text-xl font-bold">Page not found !</span>
                    <p className="mx-40">
                        The page you are looking for might have been removed, had its name
                        changed or is temporarily unavailable.
                    </p>
                    <Link to='/admin' className="flex items-center gap-2 mt-3 px-5 text-neutral2 text-sm font-semibold py-2 rounded-lg shadow-lg bg-gradient-to-br from-primary1 to-primary2 mx-auto">
                    <i className="fa-solid fa-arrow-left-long"></i>
                    Back to Home Page
                    </Link>
                </div>
            </div>
        </>
    )
}
