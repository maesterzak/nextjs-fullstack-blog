
import Image from "next/image";
import Link from "next/link";
import MainLayout from "../component/Layout/MainLayout.jsx";
import parse from "html-react-parser";
import { toast } from 'react-toastify';
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
import useSWR, { useSWRConfig } from "swr";
import { mutate } from "swr";
import axios from "axios";
import { images } from "@/images/index.js";
import PostCardFive from "@/component/BlogComponents/PostCards/PostCardFive/index.jsx";
import CommentForm from "@/component/BlogComponents/CommentSection/CommentForm/index.jsx";
import { apiUrl } from "utils/index.js";
import { data } from "autoprefixer";

// Generates `/posts/1` and `/posts/2`
export async function getStaticPaths() {
    let res = await fetch(apiUrl + "articles/")
    let response = await res.json()

    console.log("path dat", response)
    const paths = response?.data?.map((article) => {
        return {
            params: { slug: article.slug },
        };
    });
    return {
        paths,
        fallback: 'blocking', // can also be true or 'blocking'

    };
}

export const getStaticProps = async (context) => {


    const slug = context.params.slug;
    let url = `/api/database/article/detail/${slug}`

    let res = await fetch(apiUrl + `article/${slug}`)
    let response = await res.json()

    return {
        props: { article: response ?? null, url: url },
        revalidate: 10, // In seconds
    }
}
const fetcher = (url) => axios(url).then(r => r.data);
function Post({ article, url }) {
    // const [commentsList, setCommentsList] = useState(comments)

    let { data, error, isLoading } = useSWR(url, fetcher, {
        fallbackData: article,
        // revalidateOnFocus: false,
    });


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


    let { article_data, similar_articles } = data.data
    console.log("ll", similar_articles)
    return (
        <MainLayout meta={metadata}>

            < div className="  lg:px-36 flex flex-col gap-10 ">
                <div className="bg-[#ffff] p-5  md:p-10 flex flex-col gap-5 ">
                    <div>
                        <Image
                            src={article_data.image}
                            width={700}
                            height={700}
                            style={{
                                width: "100%",
                                height: "100%"
                            }}
                        />
                    </div>
                    <h1 className="">{article_data.title} </h1>
                    <div className="text-linkColor2 font-semibold">
                        <span><Link href={'/'}>Leave a Comment</Link></span> / <span>{article_data.tags}</span> / <span>By {article_data.author.user.first_name}  {article_data.author.user.last_name}</span>
                    </div>

                    <div>
                        {parse(article_data.body)}
                    </div>

                </div>


                {similar_articles?.length > 0 &&
                    <div className="bg-thirdBackground  md:p-10 flex flex-col gap-5 p-10">
                        <div className='text-2xl  flex justify-between mt-6'>
                            <h2 className='font-bold'>Similar Posts</h2>
                        </div>
                        <div className="grid grid-cols-4 gap-10 md:gap-5">
                            {similar_articles?.map((e, index) => {
                                return (
                                    <div key={index} className="col-span-4 md:col-span-2">
                                        <PostCardFive data={e} />
                                    </div>
                                )
                            })}





                        </div>



                    </div>
                }


                <CommentForm />
            </div>

        </MainLayout >
    )
}
export default Post;