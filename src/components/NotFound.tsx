import React from 'react'

export default function NotFound() {
    return (
        <div className='grid place-items-center w-full h-full'>
            <div className="grid text-center gap-3">
                <span className="text-9xl font-extrabold text-primary pb-6">404</span>
                <span className="text-xl font-bold">Page not found !</span>
                <p className="mx-40">
                    The page you are looking for might have been removed, had its name
                    changed or is temporarily unavailable.
                </p>
            </div>
        </div>
    )
}
