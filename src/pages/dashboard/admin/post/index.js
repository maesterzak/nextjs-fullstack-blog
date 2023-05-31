import AdminLayout from "@/component/Layout/AdminLayout";
import Link from "next/link";
import Image from "next/image";
import { loadArticles } from "lib/server/loadArticles";
import { useState } from "react";
import { toast } from 'react-toastify';
import deleteData from "@/component/formHandlers/deleteHandler";
import ButtonTwo from "@/component/Reuseable/Buttons/ButtonTwo";

const data = [1, 2, 3, 4]


export const getStaticProps = async () => {
    let res = await loadArticles()
    let data
    if (res.success) {
        data = res.data
    }
    else {
        return undefined
    }
    return {
        props: { param: data },
        revalidate: 10, // In seconds
    }
}

function Post({ param }) {
    const [articles, setArticles] = useState(param)

    const deleteArticle = async (param) => {
        let url = `/api/database/article/delete/${param}`
        let res = await deleteData(url)
        if (res.code == 200) {
            toast.success('Article Deleted', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setArticles(res.data)

        }
        else {
            toast.error('Something Went Wrong', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }

    return (
        <AdminLayout>
            <div className="w-full p-4">
                <h1 className="header">POST</h1>
                <div className="w-full flex justify-end">
                    <Link href="/dashboard/admin/post/add" className="inline-flex items-center px-4 py-2 mr-3 text-sm font-medium  bg-secondaryBackground border border-gray-300 rounded-lg hover:text-secondLink text-white text-secondLink">

                        Add
                    </Link>

                </div>

                <div className="w-full flex-col">

                    {articles.length == 0 &&
                        <div className="w-full h-[200px] flex justify-center items-center">
                            <h1>No posts available. Click the &apos;Add&apos; button to create a new post.</h1>


                        </div>
                    }
                    <div>
                        {articles?.map((item, index) => {
                            return (
                                <div className="flex w-full p-4" key={index}>
                                    <div className="w-[25%] md:w-[10%] h-[auto] ">
                                        <Image
                                            alt=""
                                            src={item.image}
                                            width={700}
                                            height={700}
                                            sizes={"100vw"}
                                            style={{
                                                width: '100%',
                                                height: '100%'
                                            }}


                                        />

                                    </div>
                                    <div className="w-full px-3 grid">
                                        <Link href={'#'} className="text-[#152035] text-[14px] header">{item.title}</Link>
                                        <div className=" flex gap-3 w-full ">
                                            <span className="text-[13px]">12, may 2018</span>
                                            <div className="flex gap-2 h-10">
                                                <button className="inline-flex items-center p-2  mr-3 text-sm font-medium text-secondLink  bg-secondaryBackground border border-gray-300 rounded-lg text-white ">
                                                    edit
                                                </button>
                                                <ButtonTwo type={'button'} text={'Delete'} onClickHandler={() => deleteArticle(item.id)} />
                                            </div>
                                        </div>

                                    </div>


                                </div>

                            )
                        })}
                    </div>

                </div>





            </div>

        </AdminLayout>
    )
}
export default Post;