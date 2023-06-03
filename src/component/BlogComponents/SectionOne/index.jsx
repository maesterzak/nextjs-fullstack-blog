import PostCardThree from "../PostCards/PostCardThree"
import React from "react"
export default function SectionOne() {
    const post = [
        { title: "The Frightening Affect of Climate Change on Governments", category: "Politics" },
        { title: "The Frightening Affect of Climate Change on Governments", category: "Politics" },
        { title: "The Frightening Affect of Climate Change on Governments", category: "Politics" },
        { title: "The Frightening Affect of Climate Change on Governments", category: "Politics" },
        { title: "The Frightening Affect of Climate Change on Governments", category: "Politics" },
        { title: "The Frightening Affect of Climate Change on Governments", category: "Politics" },
    ]

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 pt-7">
            {post.map((e, index) => {
                return (
                    <React.Fragment>
                        <PostCardThree category={e.category} title={e.title} />
                    </React.Fragment>
                )
            })}

        </div>
    )
}