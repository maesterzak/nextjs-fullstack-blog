import { useState, useEffect } from "react"
import getHandler from "@/component/formHandlers/getHandler"
import Link from "next/link"
import Image from "next/image"

export default function MostViewed() {

    const [mostViewedList, setMostViewedList] = useState(undefined)


    const getMostViewed = async () => {
        let url = '/api/database/article/most-viewed/'
        let res = await getHandler(url)
        console.log("test", res)
        setMostViewedList(res.data.data)
    }

    useEffect(() => {
        getMostViewed()
    }, [])

    return (
        <div className="bg-secondaryBackground text-secondLink">
            <div className="p-5 border-b-2 border-[rgba(240,142,128,.1)]">
                <span className="header w-full">MOST POPULAR</span>

            </div>
            <div>

                {!mostViewedList ?
                    <div className="flex items-center justify-center">
                        <span>Loading</span>
                    </div>
                    :

                    <>
                        {mostViewedList.map((item, index) => {
                            return (
                                <div key={index} className="flex w-full p-4">
                                    <div className="w-[25%] h-16 ">
                                        <Image
                                            alt=""
                                            src={item.image ?? '/img/1.jpg'}
                                            width={700}
                                            height={700}
                                            sizes={"100vw"}
                                            style={{
                                                width: '100%',
                                                height: '100%'
                                            }}


                                        />

                                    </div>
                                    <div className="w-[75%] px-3 grid">
                                        <Link href={'/' + item.slug} className=" text-[14px] text-secondLink header">{item.title}</Link>
                                        <span className="text-[13px]">{item.createdAt}</span>
                                    </div>


                                </div>

                            )
                        })}
                    </>
                }
            </div>


        </div>
    )
}