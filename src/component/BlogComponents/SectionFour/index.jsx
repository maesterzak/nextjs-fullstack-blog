import React from 'react'
import PostCardFour from '../PostCards/PostCardFour'
import Link from 'next/link'
function SectionFour() {
    const sample = [1, 2, 3]
    return (
        <div className='flex flex-col md:flex-row gap-6'>

            <div className='md:w-1/2 flex flex-col gap-6'>
                <div className='text-2xl  flex justify-between mt-6'>
                    <h2 className='font-bold'>Stock Market</h2> <Link className='font-semibold text-lg' href={"/"}>View All <span className='font-bold '>&rarr;</span></Link>
                </div>
                <div className='w-full'>
                    <PostCardFour className=' w-full flex flex-col gap-2' />

                </div>
                <div className='flex gap-3 md:gap-0 flex-col md:flex-row'>
                    <div className='md:flex-1'>
                        <PostCardFour className='w-full  flex flex-col gap-2' />
                    </div>

                    <div className='md:flex-1'>
                        <PostCardFour className='w-full  flex flex-col gap-2' />
                    </div>

                </div>

            </div>
            <div className='md:w-1/2 flex flex-col gap-6'>
                <div className='text-2xl  flex justify-between mt-6'>
                    <h2 className='font-bold'>Stock Market</h2> <Link className='font-semibold text-lg' href={"/"}>View All <span className='font-bold '>&rarr;</span></Link>
                </div>
                <div className='w-full'>
                    <PostCardFour className=' w-full flex flex-col gap-2' />

                </div>
                <div className='flex gap-3 md:gap-0 flex-col md:flex-row'>
                    <div className='md:flex-1'>
                        <PostCardFour className='w-full  flex flex-col gap-2' />
                    </div>

                    <div className='md:flex-1'>
                        <PostCardFour className='w-full  flex flex-col gap-2' />
                    </div>

                </div>

            </div>
        </div>
    )
}

export default SectionFour