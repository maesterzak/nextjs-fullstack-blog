import Image from "next/image"
import Link from "next/link"
import parse from "html-react-parser";
import { TruncateText } from "../Reuseable/TruncateText";

export default function PostCard(params) {
    const { data } = params




    return (

        <div className=" w-[100%] md:w-[48%] h-[auto] mb-10 hover:shadow-2xl  p-2">
            <div className="   w-full overflow-hidden relative">
                <Image
                    alt=""
                    src={data.image ?? '/img/1.jpg'}
                    width={700}
                    height={700}
                    sizes={"100vw"}

                    style={{
                        width: '100%',
                        height: 'auto'
                    }}
                    className="hover:scale-125 "
                />
                {/* className="absolute top-0 w-full h-full bg-[#15203554] hover:bg-[transparent] transition ease-in-out delay-150 hover:scale-125 duration-300 " */}
                <div className="absolute top-0 w-full h-full hover:bg-[transparent] transition ease-in-out delay-150 hover:scale-125 duration-300 ">

                </div>

            </div>
            <div className="flex justify-between items-end">
                <div className=" font-semibold  rounded-sm text-[#505050] w-[100px] mt-4 ">
                    {data.category.name}


                </div>

                <div>
                    <span className="font-semibold">{data.createdAt}</span>
                </div>
            </div>
            <div className="mt-5">
                <Link href={'/' + data.slug} className=" text-2xl header">{data.title}</Link>

            </div>
            <div className="flex gap-4 align-middle h-14">
                <div className="relative w-10 h-10">
                    <Image
                        width={700}
                        height={700}
                        sizes={"100vw"}
                        style={{
                            width: '100%',
                            height: '100%'
                        }}
                        className="mt-2 w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 "
                        src="/img/1.jpg"
                        alt="Bordered avatar" />
                </div>
                <span className="flex items-center ">{data.author.name}</span>
            </div>
            <div className="mt-3">

                {TruncateText(200, data.body)}...



                {/* start */}

                {/* <div className=" w-full animate-pulse flex-row items-center justify-center space-x-1 rounded-xl border p-6 ">
                    <div className="flex flex-col space-y-2">
                        <div className="h-6 w-full rounded-md bg-gray-300 "></div>
                        <div className="h-6 w-full rounded-md bg-gray-300 "></div>

                    </div>

                </div> */}

                {/* end */}
            </div>
            <Link href={'/' + data.slug}>
                Readmore
            </Link>
        </div>

    )
}