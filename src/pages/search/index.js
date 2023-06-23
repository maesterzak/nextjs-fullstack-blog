import MainLayout from "@/component/Layout/MainLayout.jsx";

import { useState } from "react";
import React from "react";
import Link from "next/link";
import PostCardFour from "@/component/BlogComponents/PostCards/PostCardFour";
import { apiUrl } from "utils";
import ImageLoading from "@/component/BlogComponents/LoadingScreens/ImageLoading";
import CategoryLoading from "@/component/BlogComponents/LoadingScreens/CategoryLoading";
import TitleLoading from "@/component/BlogComponents/LoadingScreens/TitleLoading";
import BodyTextLoading from "@/component/BlogComponents/LoadingScreens/BodyTextLoading";
import AllCategoriesSection from "@/component/BlogComponents/AllCategoriesSection";
import RecentArticlesSection from "@/component/BlogComponents/RecentArticlesSection";
import useSWR, { useSWRConfig } from "swr";
import axios from "axios";
import ErrorComponent from "@/component/BlogComponents/ErrorComponent";

export const getServerSideProps = async (context) => {



    const searchTerm = context.query.q;

    let response

    try {
        let res = await fetch(apiUrl + `search?q=${searchTerm}&page=1/`,
            {
                headers: {
                    'Accept': 'application/json',
                    'content-type': 'application/json'
                },
                body: searchTerm
            }
        )
        response = await res.json()
        console.log("resp", response)

    }
    catch (err) {
        response = []
    }
    return {
        props: { articles: response ?? null, searchTerm: searchTerm },
        // revalidate: 10, // In seconds
    }
}

const fetcher = (url) => axios(url).then(r => r.data);

export default function SearchPage({ articles, searchTerm }) {
    const [url, setUrl] = useState()
    const [pageNumber, setPageNumber] = useState(1)


    let { data, error, isLoading } = useSWR(`/api/database/search?q=${searchTerm}/&page=${pageNumber}`, fetcher, {
        fallback: articles,
        revalidateOnFocus: false,
    });
    const dummyPosts = [1, 2, 3, 4,]
    if (isLoading) {
        return (
            <>
                <React.Fragment >
                    {dummyPosts.map((e, index) => {
                        return (
                            <div key={index} className="grid grid-cols-8 gap-5 md:p-5 lg:px-36  w-full">

                                <div className="col-span-8 md:col-span-6 md:border-primaryColor/40 pb-12 md:border-r-2 p-4">

                                    <div className="col-span-4 md:col-span-2 flex flex-col gap-5">
                                        <div className="h-[200px]">
                                            <ImageLoading />
                                        </div>
                                        <CategoryLoading />
                                        <TitleLoading />
                                        <div className="flex gap-5">
                                            <CategoryLoading /> <CategoryLoading />
                                        </div>
                                        <BodyTextLoading />

                                    </div>

                                </div>
                            </div>
                        )

                    })}
                </React.Fragment>
            </>
        )
    }

    if (error) {
        return (
            <>
                <React.Fragment >

                    <div className="grid grid-cols-8 gap-5 md:p-5 lg:px-36  w-full">

                        <div className="w-full col-span-8">
                            <ErrorComponent />
                        </div>
                    </div>



                </React.Fragment>
            </>
        )

    }
    console.log("Ffff", error, data)

    let metadata = {
        title: " Page",
        description: 'Amaizing site'
    }



    return (
        <MainLayout meta={metadata}>
            <div className="grid grid-cols-8 gap-5 md:p-5 lg:px-36  w-full">

                <div className="col-span-8 md:col-span-6 md:border-primaryColor/40 pb-12 md:border-r-2 p-4">
                    <div className="p-10 border-primaryColor/40 pb-12 border-b-2 mb-10 ">
                        {data?.count > 0 &&
                            <h1 className="text-linkColor2 text-4xl">Searching for {searchTerm}</h1>
                        }
                        {isLoading && <CategoryLoading />}


                    </div>

                    <div className="grid grid-cols-4 gap-5">
                        {data?.count > 0 ?
                            <>
                                {data?.results.map((e, index) => {
                                    return (
                                        <React.Fragment key={index}>

                                            <PostCardFour data={e} classList="col-span-4 md:col-span-4 lg:col-span-2 " />
                                        </React.Fragment>
                                    )

                                })}
                            </>
                            :
                            <div className="col-span-4">
                                <h2>No Articles found for: {searchTerm}</h2>
                            </div>

                        }

                    </div>
                </div>


                <div className="col-span-8 md:col-span-2 mb-10 flex flex-col gap-10 p-5">
                    <RecentArticlesSection />

                    <AllCategoriesSection />
                </div>

            </div>

        </MainLayout>
    )
}