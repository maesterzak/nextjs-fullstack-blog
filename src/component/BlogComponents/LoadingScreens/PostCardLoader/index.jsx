import Link from "next/link"
const sample = [1, 2]

export default function PostCardLoader() {

    return (
        <>
            {sample.map((e, index) => {
                return (
                    <div key={index} className="w-[100%] md:w-[48%] animate-pulse mb-10 hover:shadow-2xl  p-2">
                        <div className="h-50 md:h-[300px] w-full bg-black overflow-hidden relative">
                            <div className="h-full w-full rounded-md bg-loadingSkeleton">

                            </div>
                            {/* className="absolute top-0 w-full h-full bg-[#15203554] hover:bg-[transparent] transition ease-in-out delay-150 hover:scale-125 duration-300 " */}
                            <div className="absolute top-0 w-full h-full hover:bg-[transparent] transition ease-in-out delay-150 hover:scale-125 duration-300 ">

                            </div>

                        </div>
                        <div className="flex justify-between items-end">
                            <div className=" font-semibold bg-loadingSkeleton h-[30px]  rounded-sm text-[#505050] w-[100px] mt-4 ">



                            </div>

                            <div>
                                <span className="font-semibold loadingSkeleton w-[50px] h-[20px] "></span>
                            </div>
                        </div>
                        <div className="mt-5">
                            <Link href={'/'} className=" text-2xl header bg-loadingSkeleton h-[30px] w-[40px]"></Link>

                        </div>
                        <div className="flex gap-4 items-center h-14">
                            <div className="relative w-10 h-10">
                                <div className="bg-loadingSkeleton mt-2 w-10 h-10 p-1 rounded-full ">

                                </div>

                            </div>
                            <span className="flex items-center bg-loadingSkeleton w-[50px] h-[30px] "></span>
                        </div>
                        <div className="mt-3">

                            <div className="flex flex-col space-y-2">
                                <div className="h-6 w-11/12 rounded-md bg-loadingSkeleton "></div>
                                <div className="h-6 w-10/12 rounded-md bg-loadingSkeleton "></div>
                                <div className="h-6 w-9/12 rounded-md bg-loadingSkeleton "></div>
                                <div className="h-6 w-9/12 rounded-md bg-loadingSkeleton "></div>
                            </div>





                            {/* end */}
                        </div>
                        <div className="h-6 mt-5 w-[70px] rounded-md bg-loadingSkeleton "></div>
                    </div>

                )
            })}
        </>

    )
}