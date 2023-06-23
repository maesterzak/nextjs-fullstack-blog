import Link from 'next/link'
import React from 'react'
import PostCardFour from '../PostCards/PostCardFour'

function SectionThree() {
    const sample = [1, 2, 3]
    return (
        <>
            <div className='text-2xl  flex justify-between mt-6'>
                <h2 className='font-bold'>Stock Market</h2> <Link className='font-semibold text-lg' href={"/"}>View All <span className='font-bold '>&rarr;</span></Link>
            </div>

            <div className='grid grid-cols-3 gap-4 mt-4'>
                {sample.map((e, index) => {
                    return (
                        <React.Fragment key={index}>
                            <PostCardFour className='col-span-3 md:col-span-1 w-full h-1/2 flex flex-col gap-2' />
                        </React.Fragment>
                    )
                })}
            </div>
        </>
    )
}

export default SectionThree