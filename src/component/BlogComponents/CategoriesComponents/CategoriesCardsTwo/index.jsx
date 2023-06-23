import React from 'react'
import PostCardFour from '../../PostCards/PostCardFour'
import Link from 'next/link'
import ImageLoading from '../../LoadingScreens/ImageLoading'
import BodyTextLoading from '../../LoadingScreens/BodyTextLoading'
import CategoryLoading from '../../LoadingScreens/CategoryLoading'
function CategoriesCardTwo({ data }) {
    console.log("two", data)
    const sample = [1, 2, 3]
    return (
        <div className='flex flex-col md:flex-row gap-6'>

            {data.map((e, index) => {
                return (
                    <div className='md:w-1/2 flex flex-col gap-6'>
                        <div className='text-2xl  flex justify-between mt-6'>
                            <h2 className='font-bold'>{e.category.name}</h2> <Link className='font-semibold text-lg' href={"/"}>View All <span className='font-bold '>&rarr;</span></Link>
                        </div>
                        <div className='w-full'>

                            <PostCardFour data={e.data[0]} className=' w-full flex flex-col gap-2' />


                        </div>
                        <div className='flex gap-3 md:gap-0 flex-col md:flex-row'>
                            {e.data[1] &&
                                <div className='md:flex-1'>
                                    <PostCardFour data={e.data[1]} className='w-full  flex flex-col gap-2' />

                                </div>
                            }

                            {e.data[2] &&
                                <div className='md:flex-1'>
                                    <PostCardFour data={e.data[2]} className='w-full  flex flex-col gap-2' />

                                </div>
                            }



                        </div>

                    </div>
                )
            })}




        </div>
    )
}

export default CategoriesCardTwo