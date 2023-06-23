import Image from "next/image";
import Link from "next/link";
import placeholder from '../../../../../public/img/ads-placeholder.png'
import { images } from "@/images";


export default function PostCardTwo() {

    return (
        <div className="w-full h-auto">
            <div className="grid grid-cols-2 gap-2 h-auto">
                <div className="bg-blue ">
                    <Image
                        src={images.placeHolder}
                        className="w-auto h-full object-fit"

                    // width={700}
                    // height={700}
                    // style={{
                    //     width: "100%",
                    //     height: "100%"
                    // }}
                    />
                </div>
                <div className="p-2 md:py-6 flex justify-center flex-col gap-2">
                    <Link href={"/"} className="bg-primaryColor px-1 py-0.5 w-fit  text-buttonText text-xs">
                        Technology
                    </Link>
                    <Link href={"/"} className="text-md md:text-xl font-bold ">Want a Career in Technology? Make This Your Secret Weapon</Link>
                    <span className="text-xs">June 28, 2021</span>


                </div>


            </div>

        </div>
    )
}