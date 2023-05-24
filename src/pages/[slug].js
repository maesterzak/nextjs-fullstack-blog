import { loadArticle } from "lib/server/loadArticle";
import { loadArticles } from "lib/server/loadArticles";
import Image from "next/image";
import Link from "next/link";
import MainLayout from "../component/Layout/MainLayout";
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
        fallback: false, // can also be true or 'blocking'
    };
}

export const getStaticProps = async (context) => {


    const slug = context.params.slug;

    let res = await loadArticle(slug)

    let comments = await loadComments(res.data.id)


    return {
        props: { article: res.data ?? null, comments: comments.data ?? null }
    }
}

function Post({ article, comments }) {

    const session = useSession()

    let data = {
        title: 'Home Page',
        description: 'Amaizing site'
    }

    const saveComment = async (body) => {
        let url = '/api/database/article/comments/add/'
        let res = await postData(url, body)

        if (res.status == 201) {

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

        }
        else {
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
        // if (session?.data?.user?.name) {


        e.preventDefault()
        var formData = new FormData(e.target);
        let form_values = Object.fromEntries(formData);
        form_values['userId'] = session.data.user.id
        form_values['articleId'] = article.id


        saveComment(form_values)
        // }
        // else {

        //     toast.error('Users must be logged in to add comments', {
        //         position: "top-right",
        //         autoClose: 5000,
        //         hideProgressBar: false,
        //         closeOnClick: true,
        //         pauseOnHover: true,
        //         draggable: true,
        //         progress: undefined,
        //         theme: "light",
        //     });
        // }


    }


    return (
        <MainLayout meta={data}>
            <div className="w-[100%] md:w-[70%] ">
                <div className="w-[100%] p-5 bg-primaryBackground">
                    <h1 className="header text-3xl font-bold">{article.title}</h1>
                    <div className="flex gap-4 align-middle h-14">
                        <span className="flex items-center font-semibold">{article.category.name}</span>
                        <span className="flex items-center font-semibold">{article.createdAt}</span>
                    </div>

                    <div className="w-full bg-black overflow-hidden relative">
                        {article.image &&
                            <Image
                                alt=""
                                src={article?.image}
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
                        {parse(article.body)}
                    </div>
                </div>

                <div className="border-t-2 p-5 bg-primaryBackground border-[rgba(240,142,128,.1)] flex">
                    <div><span>tags: {article.tags != "unknown" && article.tags}</span></div>
                </div>

                <div className="border-t-2 p-2 px-5 py-0  gap-3 bg-primaryBackground flex align-middle items-center border-[rgba(240,142,128,.1)]">






                    <FacebookShareButton
                        url={`https://devmaesters.com/blog/${article.slug}`}
                        quote={parse(article.summary)}
                        hashtag={'#nextshare'}
                    >
                        <FacebookIcon size={32} round />
                    </FacebookShareButton>
                    <TwitterShareButton
                        url={`https://devmaesters.com/blog/${article.slug}`}
                        title={article.title}
                    >
                        <TwitterIcon size={32} round />
                    </TwitterShareButton>

                    <TelegramShareButton
                        url={`https://devmaesters.com/blog/${article.slug}`}
                        title={article.title}
                    >
                        <TelegramIcon size={32} round />
                    </TelegramShareButton>
                    <LinkedinShareButton url={`https://devmaesters.com/blog/${article.slug}`}>
                        <LinkedinIcon size={32} round />
                    </LinkedinShareButton>

                    <RedditShareButton
                        url={`https://devmaesters.com/blog/${article.slug}`}
                        title={article.title}
                    >
                        <RedditIcon size={32} round />
                    </RedditShareButton>
                    <WhatsappShareButton
                        url={`https://devmaesters.com/blog/${article.slug}`}
                        title={article.title}
                        separator=":: "
                    >
                        <WhatsappIcon size={32} round />
                    </WhatsappShareButton>

                    <div className="w-full p-5">


                    </div>

                </div>

                <div className="border-t-2 mt-3 p-5 bg-primaryBackground ">
                    <span className="header">YOU MAY LIKE THIS POST</span>
                    <div className="flex gap-2 flex-wrap">
                        {article.similarArticles.map((item, index) => {
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
                    <span><i>{comments.length ?? 0} comments</i></span>
                    <form onSubmit={addComment} className="mt-3">
                        <textarea name="body" className="w-[100%] outline-none min-h-[200px] border-2 border-link p-5">

                        </textarea>
                        <div>
                            <button type={"submit"} className="bg-link w-[100%] py-2 text-[white]">Submit</button>
                        </div>
                    </form>

                    <div className="mt-5 flex flex-col gap-4">
                        {comments?.map((e, index) => {
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