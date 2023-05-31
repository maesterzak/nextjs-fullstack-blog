import { loadArticle } from "lib/server/loadArticle";
import { loadArticles } from "lib/server/loadArticles";
import Image from "next/image";
import Link from "next/link";
import MainLayout from "../component/Layout/MainLayout.jsx";
import parse from "html-react-parser";
import { ToastContainer, toast } from 'react-toastify';
import { loadComments } from "lib/server/loadComments";
import {
    FacebookShareButton,
    FacebookIcon,
    RedditShareButton,
    RedditIcon,
    TelegramShareButton,
    TelegramIcon,
    TwitterShareButton,
    TwitterIcon,
    WhatsappShareButton,
    WhatsappIcon,
    LinkedinShareButton,
    LinkedinIcon,



} from 'next-share'
import CommentCard from "@/component/BlogComponents/CommentsCard";
import postData from "@/component/formHandlers/postHandler";
import { useSession } from "next-auth/react";
import React from "react";
import { useState } from "react";
import useSWR, { useSWRConfig } from "swr";
import { mutate } from "swr";
import axios from "axios";

// // Generates `/posts/1` and `/posts/2`
export async function getStaticPaths() {
    let res = await loadArticles()


    const paths = res.data.map((post) => {
        return {
            params: { slug: post.slug },
        };
    });
    return {
        paths,
        fallback: 'blocking', // can also be true or 'blocking'

    };
}

export const getStaticProps = async (context) => {


    const slug = context.params.slug;
    let url = '/api/database/article/detail/' + slug + "/"
    let res = await loadArticle(slug)
    return {
        props: { article: res?.data ?? null, url: url },
        revalidate: 10, // In seconds
    }
}
const fetcher = (url) => axios(url).then(r => r.data);
function Post({ article, url }) {
    // const [commentsList, setCommentsList] = useState(comments)
    const session = useSession()
    let { data, error, isLoading } = useSWR(url, fetcher, {
        fallbackData: article,
        // revalidateOnFocus: false,
    });
    console.log("attaa", data, url)

    if (error) return <>{error}</>;
    if (isLoading) {
        data = article
    };



    let metadata = {
        title: 'Home Page',
        description: 'Amaizing site'
    }

    const saveComment = async (body) => {
        let saveurl = '/api/database/article/comments/add/'
        let res = await postData(saveurl, body)

        if (res.code == 201) {
            mutate(url)
            console.log("pp")
            toast.success('Comment Added', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

            // let data = commentsList.push(res.data).
            // console.log("daaa", data, res.data)
            // setCommentsList(data)





        }
        else {
            console.log("err", res)
            toast.error('Something went wrong', {
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

    const addComment = (e) => {
        if (session?.data?.user?.name) {


            e.preventDefault()
            var formData = new FormData(e.target);
            let form_values = Object.fromEntries(formData);
            form_values['userId'] = session.data.user.id
            form_values['articleId'] = data.id


            saveComment(form_values)
        }
        else {

            toast.error('Users must be logged in to add comments', {
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
        <MainLayout meta={metadata}>
            <div className="w-[100%] md:w-[70%] ">
                <div className="w-[100%] p-5 bg-primaryBackground">
                    <h1 className="header text-3xl font-bold">{data?.title}</h1>
                    <div className="flex gap-4 align-middle h-14">
                        <span className="flex items-center font-semibold">{data?.category?.name}</span>
                        <span className="flex items-center font-semibold">{data?.createdAt}</span>
                    </div>

                    <div className="w-full md:w-1/2 flex justify-center bg-black overflow-hidden relative">
                        {data?.image &&
                            <Image
                                alt=""
                                src={data?.image}
                                width={700}
                                height={700}
                                sizes={"100vw"}
                                style={{
                                    width: '100%',
                                    height: 'auto'
                                }}


                            />
                        }


                    </div>

                    <div className="mt-3">
                        {data && parse(data?.body)}
                    </div>
                </div>

                <div className="border-t-2 p-5 bg-primaryBackground border-[rgba(240,142,128,.1)] flex">
                    <div><span>tags: {data?.tags != "unknown" && data?.tags}</span></div>
                </div>

                <div className="border-t-2 p-2 px-5 py-0  gap-3 bg-primaryBackground flex align-middle items-center border-[rgba(240,142,128,.1)]">






                    <FacebookShareButton
                        url={`https://devmaesters.com/blog/${data?.slug}`}
                        quote={data && parse(data?.summary)}
                        hashtag={'#nextshare'}
                    >
                        <FacebookIcon size={32} round />
                    </FacebookShareButton>
                    <TwitterShareButton
                        url={`https://devmaesters.com/blog/${data?.slug}`}
                        title={data?.title}
                    >
                        <TwitterIcon size={32} round />
                    </TwitterShareButton>

                    <TelegramShareButton
                        url={`https://devmaesters.com/blog/${data?.slug}`}
                        title={data?.title}
                    >
                        <TelegramIcon size={32} round />
                    </TelegramShareButton>
                    <LinkedinShareButton url={`https://devmaesters.com/blog/${data?.slug}`}>
                        <LinkedinIcon size={32} round />
                    </LinkedinShareButton>

                    <RedditShareButton
                        url={`https://devmaesters.com/blog/${data?.slug}`}
                        title={data?.title}
                    >
                        <RedditIcon size={32} round />
                    </RedditShareButton>
                    <WhatsappShareButton
                        url={`https://devmaesters.com/blog/${data?.slug}`}
                        title={data?.title}
                        separator=":: "
                    >
                        <WhatsappIcon size={32} round />
                    </WhatsappShareButton>

                    <div className="w-full p-5">



                    </div>

                </div>
                <div>

                </div>

                <div className="mb-5 mt-5 border-t-2">
                    <div class="max-w-md mx-auto mt-5 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                        <div class="flex justify-center flex-col items-center">
                            <div class="md:flex-shrink-0 w-[200px] h-[200px] overflow-hidden rounded-full">
                                <Image
                                    src={"/img/1.jpg"}
                                    alt="author"
                                    width={100}
                                    height={100}
                                    sizes={"10vw"}
                                    style={{
                                        width: '100%',
                                        height: '100%'
                                    }}

                                />
                                <img class="h-48 w-full object-cover md:h-full md:w-48" src="author-avatar.jpg" alt="Author Avatar" />
                            </div>
                            <div class="p-8">
                                <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Author</div>
                                <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">John Doe</a>
                                <p class="mt-2 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat arcu eget magna interdum, eget mattis nulla consectetur. Mauris lacinia ex sed tortor malesuada consectetur.</p>
                                <div class="mt-4">
                                    {/* <a href="#" class="text-indigo-500 hover:text-indigo-600">View Articles</a> */}
                                </div>
                                <div className="">
                                    <ul class="flex space-x-4">
                                        <li>
                                            <a href="#" class="text-gray-400 hover:text-gray-500">
                                                <span class="sr-only">Twitter</span>
                                                <Image
                                                    src={"/img/facebook.svg"}
                                                    width={40}
                                                    height={40}
                                                />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="text-gray-400 hover:text-gray-500">
                                                <span class="sr-only">Instagram</span>
                                                <Image
                                                    src={"/img/facebook.svg"}
                                                    width={40}
                                                    height={40}
                                                />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="text-gray-400 hover:text-gray-500">
                                                <span class="sr-only">LinkedIn</span>
                                                <Image
                                                    src={"/img/facebook.svg"}
                                                    width={40}
                                                    height={40}
                                                />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>



                </div>

                <div className="border-t-2 mt-3 p-5 bg-primaryBackground ">
                    <span className="header">YOU MAY LIKE THIS POST</span>
                    <div className="flex gap-2 flex-wrap">
                        {data?.similarArticles?.map((item, index) => {
                            return (

                                <div key={index} className="w-[100%] md:w-[32%] mb-10 hover:shadow-2xl mt-2 p-3">
                                    <div className=" w-full bg-black overflow-hidden ">
                                        <Image
                                            alt=""
                                            src={item.image ?? '/img/1.jpg'}
                                            width={700}
                                            height={700}
                                            sizes={"100vw"}
                                            style={{
                                                width: '100%',
                                                height: 'auto'
                                            }}


                                        />


                                    </div>

                                    <div className="mt-2">
                                        <Link href={'/' + item.slug} className=" text-1xl header">{item.title}</Link>

                                    </div>


                                </div>

                            )
                        })}

                    </div>
                </div>

                <div className="bg-primaryBackground border-t-2 mt-3 p-5 grid">
                    <span className="header mb-2">ADD A COMMENT</span>
                    <span><i>{data?.comment?.length ?? 0} comments</i></span>
                    <form onSubmit={addComment} className="mt-3">
                        <textarea name="body" className="w-[100%] outline-none min-h-[200px] border-2 border-link p-5">

                        </textarea>
                        <div>
                            <button type={"submit"} className="bg-link w-[100%] py-2 text-[white]">Submit</button>
                        </div>
                    </form>

                    <div className="mt-5 flex flex-col gap-4">
                        {data && data?.comment.reverse()?.map((e, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <CommentCard data={e} />
                                </React.Fragment>
                            )
                        })}


                    </div>

                </div>



            </div>

        </MainLayout>
    )
}
export default Post;