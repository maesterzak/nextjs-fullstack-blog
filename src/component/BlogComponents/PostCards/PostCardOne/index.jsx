import { images } from "@/images";
import Image from "next/image";
import Link from "next/link";
export default function PostCardOne() {


    return (
        <div className="w-full h-full">
            <div className="w-full h-full relative">
                <Image
                    src={images.placeHolder01}
                    width={700}
                    height={700}
                    style={{
                        width: "100%",
                        height: "100%"
                    }}
                />
                <div className="absolute p-5 bottom-0 flex flex-col gap-2 opacity-3">
                    <Link href={"/"} className="bg-primaryColor px-1 py-0.5 w-fit  text-buttonText text-xs">
                        Technology
                    </Link>
                    <Link href={"/"} className="text-xl font-bold text-buttonText md:text-2xl ">15 Shocking Elon Musk Tweets About Stock Market</Link>
                    <div className="flex gap-2 text-xs text-buttonText">
                        <span>arkbarh</span> <span>June 28, 2021</span>
                    </div>

                </div>

            </div>

        </div>
    )
}