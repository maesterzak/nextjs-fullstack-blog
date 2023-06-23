import React from 'react'
import useSWR,   { useSWRConfig } from "swr";
import TitleLoading from '../LoadingScreens/TitleLoading';
import axios from 'axios';
import Link from 'next/link';
import CategoryLoading from '../LoadingScreens/CategoryLoading';

const fetcher = (url) => axios(url).then(r => r.data);

function AllCategoriesSection() {
    const categories = [1, 2, 3, 4,]
    let { data, error, isLoading } = useSWR('/api/database/category/get-all/', fetcher, {

        revalidateOnFocus: false,
    });


    if (error) return <>{error}</>;
    if (isLoading) {
        return (
            <>
                <h2>Categories</h2>
                <div className="flex flex-col gap-5">
                    {categories.map((e, index) => {
                        return (
                            <React.Fragment key={index}>
                                <CategoryLoading />
                            </React.Fragment>
                        )
                    })}


                </div>
            </>
        )
    };



    return (
        <>
            <h2>Categories</h2>
            <div className="flex flex-col gap-5">
                {data?.data.map((e, index) => {
                    return (
                        <Link key={index} href={`/category/${e.slug}`} className="text-linkColor2">{e.name}</Link>
                    )
                })}


            </div>
        </>
    )
}

export default AllCategoriesSection;