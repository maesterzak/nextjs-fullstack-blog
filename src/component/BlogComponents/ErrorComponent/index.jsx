import React from 'react'

function ErrorComponent({ text }) {
    return (
        <div className='w-full min-h-[300px]  bg-loadingSkeleton animate-pulse flex justify-center items-center'>
            <h3>Error Could Not Fetch {text}</h3>


        </div>
    )
}

export default ErrorComponent