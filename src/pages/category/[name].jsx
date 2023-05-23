import MainLayout from "@/component/Layout/MainLayout";
import { loadCategories } from "lib/server/loadCategories";
import { loadCategoryArticles } from "lib/server/loadCategoryArticles";
import PostCard from "@/component/postCard";
import { useState } from "react";
import React from "react";
import Link from "next/link";


// // Generates `/posts/1` and `/posts/2`
export async function getStaticPaths() {

    let res = await loadCategories() //loadCategoryArticles()


    const paths = res.data.map((category) => {
        return {
            params: { name: category.name },
        };
    });

    return {
        paths,
        fallback: "blocking", // can also be true or 'blocking'
    };
}

export const getStaticProps = async (context) => {


    const categoryName = context.params.name;

    let res = await loadCategoryArticles(categoryName)




    return {
        props: { articles: res.data ?? null, categoryName: categoryName }
    }
}


export default function CategoryPage({ articles, categoryName }) {

    const [articlesList, setArticlesList] = useState(articles)

    let metadata = {
        title: categoryName + " Page",
        description: 'Amaizing site'
    }

    return (
        <MainLayout meta={metadata}>
            <div className='w-[100%] md:w-[70%] ' >



                <main className='flex flex-col justify-center'>
                    <div className="flex mb-4 px-3 md:px-14">
                        <div className="px-5 font-semibold text-xl py-2 rounded-sm text-[#505050] w-[100px] mt-4 bg-[rgba(240,142,128,.1)]">
                            {categoryName}


                        </div>
                    </div>
                    {/* <Hero /> */}

                    <div className='px-3 md:px-14 '>

                        <div className=' gap-3 flex flex-wrap justify-between'>

                            {articlesList?.map((item, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        <PostCard data={item} />
                                    </React.Fragment>
                                )
                            })}





                        </div>
                        <div className='flex justify-center gap-3 md:mt-4 mb-4'>
                            <Link href="#" className="inline-flex items-center px-4 py-2 mr-3 text-sm font-medium  bg-[#f08e80] border border-gray-300 rounded-lg text-white hover:text-[#505050]">
                                <svg aria-hidden="true" className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path></svg>
                                Previous
                            </Link>
                            <Link href="#" className="inline-flex items-center px-4 py-2 mr-3 text-sm font-medium  bg-[#f08e80] border border-gray-300 rounded-lg text-white hover:text-[#505050]">
                                Next
                                <svg aria-hidden="true" className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </Link>
                        </div>

                    </div>




                </main>


            </div>

        </MainLayout>
    )
}