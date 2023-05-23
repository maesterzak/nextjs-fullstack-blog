import Link from "next/link"
import Image from "next/image"
import Head from "next/head"
import { loadCategories } from "lib/server/loadCategories"
import { useState } from "react"
import getHandler from "@/component/formHandlers/getHandler"
import { useEffect } from "react"
import CategoriesComponent from "../BlogComponents/Categories"
import MostViewed from "../BlogComponents/MostViewed"





export default function MainLayout({ children, param, meta }) {





    return (
        <>
            <Head>
                <title>{meta?.title}</title>
                <meta name="description" content={meta?.description} />
                <link rel="icon" href="/favicon.ico" />

            </Head>
            <div className="w-full flex mt-5 flex-wrap px-2  justify-center gap-2">

                {children}


                <div className="w-[100%] md:w-[25%] ">


                    {/* most viewed */}
                    <MostViewed />

                    {/* most viewed */}
                    {/* category */}



                    <CategoriesComponent />

                    {/* category */}



                </div>



            </div>
        </>
    )


}