import AdminLayout from "../layout";
import Link from "next/link";
import Image from "next/image";
import { loadArticles } from "lib/server/loadArticles";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import deleteData from "@/component/formHandlers/deleteHandler";

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
        props: { param: data }
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
                    <Link href="/dashboard/admin/post/add" className="inline-flex items-center px-4 py-2 mr-3 text-sm font-medium  bg-[#f08e80] border border-gray-300 rounded-lg text-white hover:text-[#505050]">

                        add
                    </Link>

                </div>

                <div className="w-full flex-col">
                    <div>
                        {articles?.map((item, index) => {
                            return (
                                <div className="flex w-full p-4" key={index}>
                                    <div className="w-[25%] md:w-[10%] h-16 ">
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
                                    <div className="w-[75%] px-3 grid">
                                        <Link href={'#'} className="text-[#152035] text-[14px] header">{item.title}</Link>
                                        <div className=" flex gap-3">
                                            <span className="text-[13px]">12, may 2018</span>
                                            <button href="#" className="inline-flex items-center px-1  mr-3 text-sm font-medium  bg-[#f08e80] border border-gray-300 rounded-lg text-white hover:text-[#505050]">
                                                edit
                                            </button>
                                            <button onClick={() => deleteArticle(item.id)} href="#" className="inline-flex items-center px-1  mr-3 text-sm font-medium  bg-[#f08e80] border border-gray-300 rounded-lg text-white hover:text-[#505050]">
                                                delete
                                            </button>
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