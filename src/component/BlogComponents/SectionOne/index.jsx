import PostCardThree from "../PostCards/PostCardThree"
import React from "react"
import { useState, useEffect } from "react"
import CategoryLoading from "../LoadingScreens/CategoryLoading"
import TitleLoading from "../LoadingScreens/TitleLoading"
export default function SectionOne() {
    const [data, setData] = useState(undefined)
    const getHeroData = async () => {
        let res = await fetch('/api/database/article/recent-articles/')
        let response = await res.json()
        console.log("fsw", response)
        setData(response.data)
    }

    useEffect(() => {
        getHeroData()
    }, [])
    const post = [
        1, 2, 3, 4
    ]

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 pt-7">
            {data?.length > 0 ?
                <>
                    {data?.map((e, index) => {
                        return (
                            <React.Fragment key={index}>
                                <PostCardThree category={e.category.name} title={e.title} slug={e.slug} />
                            </React.Fragment>
                        )
                    })}
                </>
                :
                <>
                    {post.map((e, index) => {
                        return (
                            <div key={index} className="w-full mb-4 flex flex-col gap-5">
                                <CategoryLoading />
                                <TitleLoading />

                            </div>
                        )
                    })}
                </>


            }


        </div>
    )
}