import MainLayout from "@/component/Layout/MainLayout.jsx";
import { loadCategories } from "lib/server/loadCategories";
import { loadCategoryArticles } from "lib/server/loadCategoryArticles";
import PostCard from "@/component/postCard";
import { useState } from "react";
import React from "react";
import Link from "next/link";
import PostCardFour from "@/component/BlogComponents/PostCards/PostCardFour";


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
        props: { articles: res.data ?? null, categoryName: categoryName ?? null },
        revalidate: 10, // In seconds
    }
}


export default function CategoryPage({ articles, categoryName }) {

    const [articlesList, setArticlesList] = useState(articles)

    let metadata = {
        title: categoryName + " Page",
        description: 'Amaizing site'
    }
    const latestPosts = [1, 2, 3, 4, 5, 6, 7]
    const categoryPosts = [1, 2, 3, 4, 5, 6]

    return (
        <MainLayout meta={metadata}>
            <div className="grid grid-cols-8 gap-5 md:p-5 lg:px-36">
                <div className="col-span-8 md:col-span-6 md:border-primaryColor/40 pb-12 md:border-r-2 p-4">
                    <div className="p-10 border-primaryColor/40 pb-12 border-b-2 mb-10 ">
                        <h1 className="text-linkColor2 text-4xl"> Politics</h1>
                    </div>

                    <div className="flex flex-col gap-10">
                        {categoryPosts.map((e, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <PostCardFour />
                                </React.Fragment>
                            )

                        })}

                    </div>
                </div>
                <div className="col-span-8 md:col-span-2 gap-5 flex flex-col">
                    <h2>Recent Posts</h2>
                    <div className="flex flex-col gap-5">
                        {latestPosts.map((e, index) => {
                            return (
                                <Link key={index} href={"/"} className="text-linkColor2">15 Shocking Elon Musk Tweets About Stock Market</Link>
                            )
                        })}


                    </div>

                    <h2>Categories</h2>
                    <div className="flex flex-col gap-5">
                        {latestPosts.map((e, index) => {
                            return (
                                <Link key={index} href={"/"} className="text-linkColor2">15 Shocking Elon Musk Tweets About Stock Market</Link>
                            )
                        })}


                    </div>
                </div>

            </div>

        </MainLayout>
    )
}