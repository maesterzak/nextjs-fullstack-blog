import React from 'react'
import useSWR, { useSWRConfig } from "swr";
import axios from 'axios';
import CategoriesCardOne from './CategoriesCardsOne';
import CategoriesCardTwo from './CategoriesCardsTwo';
import ErrorComponent from '../ErrorComponent';
import CategoryLoading from '../LoadingScreens/CategoryLoading';


const fetcher = (url) => axios(url).then(r => r.data);

function CategoriesSection() {

    let { data, error, isLoading } = useSWR('/api/database/category/home-category-posts/', fetcher, {

        // revalidateOnFocus: false,
    });


    if (error) return (
        <div className='w-full h-[400px] flex flex-col gap-5'>
            <div className='flex justify-between'>
                <CategoryLoading />
                <CategoryLoading />
            </div>
            <ErrorComponent text={"Category Posts"} />
        </div>
    )
    if (isLoading) {
        return (
            <>

                {/* <div className='w-full border-primaryColor/40 pb-12 border-b-2 px-5 lg:px-0 '>
                    <SectionThree />
                </div>

                <div className='w-full border-primaryColor/40 pb-12 border-b-2 px-5 lg:px-0'>
                    <SectionFour />
                </div>
                <div className='w-full border-primaryColor/40 pb-12 border-b-2 px-5 lg:px-0'>
                    <SectionThree />
                </div> */}

            </>
        )
    };

    console.log("data", data)
    let y = [3, 9,]


    return (
        <>

            {
                data?.data?.map((item, index) => {
                    return (
                        <div key={index} className='w-full border-primaryColor/40 pb-12 border-b-2 px-5 lg:px-0 '>
                            <CategoriesCardOne data={item} />
                        </div>
                    )

                })
            }

            {/* <div className='w-full border-primaryColor/40 pb-12 border-b-2 px-5 lg:px-0 '>
                <SectionThree />
            </div>

            <div className='w-full border-primaryColor/40 pb-12 border-b-2 px-5 lg:px-0'>
                <SectionFour />
            </div>
            <div className='w-full border-primaryColor/40 pb-12 border-b-2 px-5 lg:px-0'>
                <SectionThree />
            </div> */}

        </>
    )
}

export default CategoriesSection