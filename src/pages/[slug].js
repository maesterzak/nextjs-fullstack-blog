import { loadArticle } from "lib/server/loadArticle";
import { loadArticles } from "lib/server/loadArticles";
import Image from "next/image";
import Link from "next/link";
import MainLayout from "./main_layout";

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


    return {
        props: { article: res.data }
    }
}

function Post({ article }) {
    const similar = [1, 2, 4]
    console.log("vg", article)
    let data = {
        title: 'Home Page',
        description: 'Amaizing site'
    }

    return (
        <MainLayout meta={data}>
            <div className="w-[100%] md:w-[70%]  ">
                <div className="w-[100%] p-5 bg-[#ffff]">
                    <h1 className="header text-3xl">{article.title}</h1>
                    <div className="flex gap-4 align-middle h-14">
                        <span className="flex items-center ">{article.category.name}</span>
                        <span className="flex items-center ">May 23, 2023</span>
                    </div>

                    <div className="w-full bg-black overflow-hidden relative">
                        <Image
                            alt=""
                            src={'/img/1.jpg'}
                            width={700}
                            height={700}
                            sizes={"100vw"}
                            style={{
                                width: '100%',
                                height: 'auto'
                            }}


                        />


                    </div>

                    <div className="mt-3">
                        {article.body}
                    </div>
                </div>

                <div className="border-t-2 p-5 bg-[#fdfdff] border-[rgba(240,142,128,.1)] flex">
                    <span>tags</span>
                </div>

                <div className="border-t-2 p-2 px-5 py-0 bg-[#fdfdff] flex align-middle items-center border-[rgba(240,142,128,.1)]">
                    <div className="w-[auto] overflow-hidden ">
                        <Image
                            alt=""
                            src={'/img/facebook.svg'}
                            width={100}
                            height={700}
                            // sizes={"100vw"}
                            style={{
                                width: '35%',
                                height: 'auto'
                            }}


                        />


                    </div>

                    <div className="w-[auto] overflow-hidden ">
                        <Image
                            alt=""
                            src={'/img/whatsapp.svg'}
                            width={100}
                            height={700}
                            // sizes={"100vw"}
                            style={{
                                width: '35%',
                                height: 'auto'
                            }}


                        />


                    </div>

                    <div className="w-[auto]overflow-hidden ">
                        <Image
                            alt=""
                            src={'/img/twitter.svg'}
                            width={100}
                            height={700}
                            // sizes={"100vw"}
                            style={{
                                width: '35%',
                                height: 'auto'
                            }}


                        />


                    </div>

                    <div className="w-[auto] overflow-hidden ">
                        <Image
                            alt=""
                            src={'/img/reddit.svg'}
                            width={100}
                            height={700}
                            // sizes={"100vw"}
                            style={{
                                width: '35%',
                                height: 'auto'
                            }}


                        />


                    </div>

                    <div className="w-full p-5">


                    </div>

                </div>

                <div className="border-t-2 mt-3 p-5 bg-[#fdfdff] ">
                    <span className="header">YOU MAY LIKE THIS POST</span>
                    <div className="flex gap-2 flex-wrap">
                        {similar.map((item, index) => {
                            return (

                                <div key={index} className="w-[100%] md:w-[32%] mb-10 hover:shadow-2xl mt-2 p-3">
                                    <div className=" w-full bg-black overflow-hidden ">
                                        <Image
                                            alt=""
                                            src={'/img/1.jpg'}
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
                                        <Link href={'#'} className="text-[#152035] text-1xl header">Drifting Apart, Growing Happy</Link>

                                    </div>


                                </div>

                            )
                        })}

                    </div>
                </div>

                <div className="bg-[#fdfdff] border-t-2 mt-3 p-5 grid">
                    <span className="header mb-2">ADD A COMMENT</span>
                    <span><i>0 comments</i></span>
                    <div className="mt-3">
                        <textarea className="w-[95%] outline-none min-h-[200px] border-2 border-[#f3d4bc] p-5">

                        </textarea>
                    </div>

                </div>



            </div>

        </MainLayout>
    )
}
export default Post;