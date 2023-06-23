import MainLayout from "@/component/Layout/MainLayout.jsx";

import PostCard from "@/component/postCard";
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

export const getServerSideProps = async (context) => {


    const slug = context.params.slug;
    // let url = `/api/database/category/${slug}`
    let response

    try {
        let res = await fetch(apiUrl + `category-posts/${slug}`)
        response = await res.json()

    }
    catch (err) {
        response = []
    }
    return {
        props: { articles: response ?? null, slug: slug },
        // revalidate: 10, // In seconds
    }
}

const fetcher = (url) => axios(url).then(r => r.data);

export default function CategoryPage({ articles, slug }) {

    console.log("kkkk", articles)
    let { data, error, isLoading } = useSWR(`/api/database/category/${slug}/`, fetcher, {
        fallback: articles,
        revalidateOnFocus: false,
    });


    let metadata = {
        title: " Page",
        description: 'Amaizing site'
    }
    const latestPosts = [1, 2, 3, 4, 5, 6, 7]
    const categoryPosts = [1, 2, 3, 4,]
    console.log("pp", data)
    return (
        <MainLayout meta={metadata}>
            <div className="grid grid-cols-8 gap-5 md:p-5 lg:px-36  w-full">
                <div className="col-span-8 md:col-span-6 md:border-primaryColor/40 pb-12 md:border-r-2 p-4">
                    <div className="p-10 border-primaryColor/40 pb-12 border-b-2 mb-10 ">
                        {data?.results?.length > 0 ?
                            <h1 className="text-linkColor2 text-4xl"> {data.results[0].category.name}</h1>
                            :
                            <CategoryLoading />}


                    </div>

                    <div className="grid grid-cols-4 gap-5">
                        {data?.results?.length > 0 ?
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
                            <>
                                {categoryPosts.map((e, index) => {
                                    return (
                                        <React.Fragment key={index}>
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
                                        </React.Fragment>
                                    )

                                })}
                            </>

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