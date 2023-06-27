import Image from "next/image";
import Link from "next/link";
import placeholder from '../../../../../public/img/ads-placeholder.png'
import { images } from "@/images";
import ImageLoading from "../../LoadingScreens/ImageLoading";
import CategoryLoading from "../../LoadingScreens/CategoryLoading";
import TitleLoading from "../../LoadingScreens/TitleLoading";


export default function PostCardTwo({ topPosts }) {

    return (
        <>
            {topPosts ?
                <div className="w-full h-auto">
                    <div className="grid grid-cols-2 gap-2 h-auto ">
                        <Link href={`/${topPosts.slug}`} className="bg-blue rounded-2xl overflow-hidden">
                            <Image
                                src={topPosts.image}
                                // className="w-auto h-full object-fit"
                                alt="top-post-img-01"

                                width={700}
                                height={700}
                                style={{
                                    width: "100%",
                                    height: "auto"
                                }}
                            />
                        </Link>
                        <div className="p-2 md:py-6 flex justify-center flex-col gap-2">
                            <Link href={`/category/${topPosts.category.slug}`} className="bg-categoryBackgroundColor px-2 py-0.5 w-fit  text-buttonText  rounded-lg">
                                {topPosts.category.name}
                            </Link>
                            <Link href={`/${topPosts.slug}`} className="text-md md:text-xl font-bold ">{topPosts.title}</Link>
                            <span className="text-xs">{topPosts.published_date}</span>


                        </div>


                    </div>

                </div>
                :
                <div className="w-full h-auto">
                    <div className="grid grid-cols-2 gap-2 h-auto ">
                        <div className="bg-blue rounded-2xl overflow-hidden">
                            <ImageLoading />
                        </div>
                        <div className="p-2 md:py-6 flex justify-center flex-col gap-2">
                            <CategoryLoading />
                            <TitleLoading />
                            <CategoryLoading />



                        </div>


                    </div>

                </div>
            }
        </>
    )
}