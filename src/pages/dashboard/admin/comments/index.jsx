import AdminLayout from "@/component/Layout/AdminLayout"
import { loadComments } from "lib/server/loadComments"
import Link from "next/link"

export const getStaticProps = async () => {




    let res = await loadComments()
    return {
        props: { comments: res.data ?? null },
        revalidate: 10, // In seconds
    }
}
export default function Comments({ comments }) {


    return (
        <AdminLayout>
            <div className="p-5">
                <h1 className="text-3xl mb-3">Comment list</h1>
                <div className="flex flex-col gap-5">
                    {comments.map((e, index) => {
                        return (
                            <Link key={index} href={"/" + e.article.slug} className="w-full">

                                <div className="w-full p-4 border-2 rounded-md border-l-thirdBackground">
                                    <h3 className="text-xl">Article: {e?.article?.title}</h3>
                                    <span>
                                        Comment: {e.body}
                                    </span>
                                    <div className="flex justify-between">
                                        <span>By {e.user.name}</span><span>{e.createdAt}</span>
                                    </div>
                                </div>

                            </Link>
                        )
                    })}
                </div>
            </div>
        </AdminLayout>
    )
}