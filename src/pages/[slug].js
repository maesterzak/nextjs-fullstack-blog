
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

// // Generates `/posts/1` and `/posts/2`
// export async function getStaticPaths() {
//     let res = await loadArticles()


//     const paths = res.data.map((post) => {
//         return {
//             params: { slug: post.slug },
//         };
//     });
//     return {
//         paths,
//         fallback: 'blocking', // can also be true or 'blocking'

//     };
// }

// export const getStaticProps = async (context) => {


//     const slug = context.params.slug;
//     let url = '/api/database/article/detail/' + slug + "/"
//     let res = await loadArticle(slug)
//     return {
//         props: { article: res?.data ?? null, url: url },
//         revalidate: 10, // In seconds
//     }
// }
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
            <div className="  lg:px-36 flex flex-col gap-10 ">
                <div className="bg-[#ffff] p-5  md:p-10 flex flex-col gap-5 ">
                    <div>
                        <Image
                            src={images.placeHolder3}
                            className="w-full"
                        />
                    </div>
                    <h1 className="">The Frightening Affect of Climate Change on Government </h1>
                    <div className="text-linkColor2 font-semibold">
                        <span><Link href={'/'}>Leave a Comment</Link></span> / <span>Editors Pick, Politics</span> / <span>By arkbarh</span>
                    </div>

                    <div>
                        <h2>Cursus iaculis etiam in</h2>
                        <p>In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet volutpat rutrum sociis quis velit, commodo enim aliquet.

                            Nunc volutpat tortor libero at augue mattis neque, suspendisse aenean praesent sit habitant laoreet felis lorem nibh diam faucibus viverra penatibus donec etiam sem consectetur vestibulum purus non arcu suspendisse ac nibh tortor, eget elementum lacus, libero sem viverra elementum.</p>

                        <h2>Cursus iaculis etiam in</h2>
                        <p>In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet volutpat rutrum sociis quis velit, commodo enim aliquet.

                            Nunc volutpat tortor libero at augue mattis neque, suspendisse aenean praesent sit habitant laoreet felis lorem nibh diam faucibus viverra penatibus donec etiam sem consectetur vestibulum purus non arcu suspendisse ac nibh tortor, eget elementum lacus, libero sem viverra elementum.</p>

                        <h2>Cursus iaculis etiam in</h2>
                        <p>In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet volutpat rutrum sociis quis velit, commodo enim aliquet.

                            Nunc volutpat tortor libero at augue mattis neque, suspendisse aenean praesent sit habitant laoreet felis lorem nibh diam faucibus viverra penatibus donec etiam sem consectetur vestibulum purus non arcu suspendisse ac nibh tortor, eget elementum lacus, libero sem viverra elementum.</p>
                        <h2>Cursus iaculis etiam in</h2>
                        <p>In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet volutpat rutrum sociis quis velit, commodo enim aliquet.

                            Nunc volutpat tortor libero at augue mattis neque, suspendisse aenean praesent sit habitant laoreet felis lorem nibh diam faucibus viverra penatibus donec etiam sem consectetur vestibulum purus non arcu suspendisse ac nibh tortor, eget elementum lacus, libero sem viverra elementum.</p>

                        <h2>Cursus iaculis etiam in</h2>
                        <p>In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet volutpat rutrum sociis quis velit, commodo enim aliquet.

                            Nunc volutpat tortor libero at augue mattis neque, suspendisse aenean praesent sit habitant laoreet felis lorem nibh diam faucibus viverra penatibus donec etiam sem consectetur vestibulum purus non arcu suspendisse ac nibh tortor, eget elementum lacus, libero sem viverra elementum.</p>
                    </div>

                </div>


                <div className="bg-thirdBackground  md:p-10 flex flex-col gap-5 p-10">
                    <div className='text-2xl  flex justify-between mt-6'>
                        <h2 className='font-bold'>Similar Posts</h2>
                    </div>
                    <div className="grid grid-cols-4 gap-10 md:gap-5">
                        <div className="col-span-4 md:col-span-2">
                            <PostCardFive />
                        </div>

                        <div className="col-span-4 md:col-span-2">
                            <PostCardFive />
                        </div>
                        <div className="col-span-4 md:col-span-2">
                            <PostCardFive />
                        </div>

                        <div className="col-span-4 md:col-span-2">
                            <PostCardFive />
                        </div>

                    </div>



                </div>

                <CommentForm />
            </div>

        </MainLayout>
    )
}
export default Post;