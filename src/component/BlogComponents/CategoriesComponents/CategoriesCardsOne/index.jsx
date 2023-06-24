import Link from 'next/link'
import React from 'react'
import PostCardFour from '../../PostCards/PostCardFour'
import ImageLoading from '../../LoadingScreens/ImageLoading'
import CategoryLoading from '../../LoadingScreens/CategoryLoading'
import BodyTextLoading from '../../LoadingScreens/BodyTextLoading'

function CategoriesCardOne({ data }) {

    return (
        <>
            <div className='text-2xl  flex justify-between mt-6'>
                <h2 className='font-bold'>{data?.category?.name}</h2> <Link className='font-semibold text-lg' href={`/category/${data?.category?.slug}`}>View All <span className='font-bold '>&rarr;</span></Link>
            </div>

            <div className='grid grid-cols-3 gap-4 mt-4'>
                {data?.data?.map((e, index) => {
                    return (
                        <React.Fragment key={index}>

                            {e &&
                                <PostCardFour data={e} classList='col-span-3 md:col-span-1 w-full h-1/2 flex flex-col gap-2 ' />

                            }
                        </React.Fragment>
                    )
                })}
            </div>
        </>
    )
}

export default CategoriesCardOne