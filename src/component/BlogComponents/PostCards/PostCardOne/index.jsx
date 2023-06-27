import { images } from "@/images";
import Image from "next/image";
import Link from "next/link";
import ImageLoading from "../../LoadingScreens/ImageLoading";
import CategoryLoading from "../../LoadingScreens/CategoryLoading";
import TitleLoading from "../../LoadingScreens/TitleLoading";
import { data } from "autoprefixer";
export default function PostCardOne({ heroMainPost }) {

    console.log("kkk", heroMainPost)

    return (
        <>
            {heroMainPost ?
                <div className="w-full h-full">
                    <div className="w-full h-full relative md:rounded-2xl ,d:overflow-hidden">
                        <Image
                            src={heroMainPost.image}
                            width={700}
                            height={700}
                            style={{
                                width: "100%",
                                height: "100%"
                            }}
                            alt="hero-img"
                        />

                        <div className="absolute p-5 bottom-0 flex flex-col w-full gap-2 bg-[black] bg-opacity-50">
                            <Link href={`/category/${heroMainPost.category.slug}`} className="bg-categoryBackgroundColor px-1 py-0.5 w-fit  text-buttonText rounded-lg">
                                {heroMainPost.category.name}
                            </Link>
                            <Link href={`/${heroMainPost.slug}`} className="text-xl font-bold text-buttonText md:text-2xl  drop-shadow-[0_50px_40px_rgba(0,0,0,0.25)]">{heroMainPost.title}</Link>
                            <div className="flex gap-2 text-xs text-buttonText">
                                <span>{heroMainPost.author.user.first_name} {heroMainPost.author.user.last_name}</span> <span>{heroMainPost.published_date}</span>
                            </div>

                        </div>

                    </div>

                </div>

                :
                <div className="w-full h-full">
                    <div className="w-full h-[300px]  md:h-[100%] relative">
                        <ImageLoading />

                        <div className="absolute  p-5 bottom-0 flex flex-col gap-2 w-full bg-[black] bg-opacity-50">
                            <CategoryLoading />
                            <TitleLoading />
                            <div className="flex gap-2 text-xs text-buttonText">
                                <CategoryLoading />
                            </div>

                        </div>

                    </div>

                </div>
            }
        </>
    )
}