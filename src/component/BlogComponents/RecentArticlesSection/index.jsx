import React from 'react'
import useSWR, { useSWRConfig } from "swr";
import TitleLoading from '../LoadingScreens/TitleLoading';
import axios from 'axios';
import Link from 'next/link';
import CategoryLoading from '../LoadingScreens/CategoryLoading';

const fetcher = (url) => axios(url).then(r => r.data);

function RecentArticlesSection() {
    const articles = [1, 2, 3, 4,]
    let { data, error, isLoading } = useSWR('/api/database/article/recent-articles/', fetcher, {

        revalidateOnFocus: false,
    });

    console.log("ttt", error, data)
    if (error) return <>{error}</>;
    if (isLoading) {
        return (
            <>
                <h2>Recent Articles</h2>
                <div className="flex flex-col gap-5">
                    {articles.map((e, index) => {
                        return (
                            <React.Fragment key={index}>
                                <TitleLoading />
                            </React.Fragment>
                        )
                    })}


                </div>
            </>
        )
    };



    return (
        <>
            <h2>Recent Articles</h2>
            <div className="flex flex-col gap-5">
                {data?.data.map((e, index) => {
                    return (
                        <Link key={index} href={`/${e.slug}`} className="text-primaryColor hover:text-categoryBackgroundColor">{e.title}</Link>
                    )
                })}


            </div>
        </>
    )
}

export default RecentArticlesSection;