import Link from "next/link"
import Image from "next/image"
import Head from "next/head"
import { loadCategories } from "lib/server/loadCategories"
import { useState } from "react"
import getHandler from "@/component/formHandlers/getHandler"
import { useEffect } from "react"
import CategoriesComponent from "../BlogComponents/Categories"
import MostViewed from "../BlogComponents/MostViewed"
import SingleAds from "../Ads/SingleAds"
import VerticalAds from "../Ads/VerticalLongAds"
import { SWRConfig } from "swr"
import axios from "axios"



export default function MainLayout({ children, param, meta }) {





    return (
        <SWRConfig value={{ fetcher: (url) => axios(url).then(r => r.data) }}>
            <Head>
                <title>{meta?.title}</title>
                <meta name="description" content={meta?.description} />
                <link rel="icon" href="/favicon.ico" />

            </Head>
            <div className="w-full flex mt-5 flex-wrap px-2  justify-center gap-2">

                {children}


                <div className="w-[100%] md:w-[25%] ">

                    <div>

                    </div>

                    <div className="mb-5 flex justify-between">
                        <SingleAds />
                        <SingleAds />

                    </div>


                    {/* most viewed */}
                    <MostViewed />

                    {/* most viewed */}
                    <div className="mt-5 flex justify-between">
                        <SingleAds />
                        <SingleAds />

                    </div>
                    {/* category */}



                    <CategoriesComponent />

                    {/* category */}
                    <div className="mt-5 flex ">
                        <VerticalAds />

                    </div>



                </div>



            </div>
        </SWRConfig>
    )


}