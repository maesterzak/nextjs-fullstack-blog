import React from 'react'

function TitleLoading() {
    return (
        <div className='flex flex-col gap-1 w-full'>
            <div className='bg-loadingSkeleton animate-pulse w-full h-5'>

            </div>
            <div className='bg-loadingSkeleton animate-pulse w-full h-5'>

            </div>
        </div>
    )
}

export default TitleLoading