import Link from "next/link"
import Image from "next/image"
import Head from "next/head"
import { loadCategories } from "lib/server/loadCategories"
import { useState } from "react"

export const getStaticProps = async () => {
    let res = await loadCategories()
    let data
    if (res.success) {
        data = res.data
    }
    else {
        return undefined
    }
    return {
        props: { param: data }
    }
}

export default function MainLayout({ children, meta, categories }) {
    console.log("mm", categories, meta)
    const [categoriesList, setCategoriesList] = useState(categories)
    const similar = [1, 2, 4]


    return (
        <>
            <Head>
                <title>{meta?.title}</title>
                <meta name="description" content={meta?.description} />
                <link rel="icon" href="/favicon.ico" />

            </Head>
            <div className="w-full flex flex-wrap px-2  justify-center gap-2">

                {children}


                <div className="w-[100%] md:w-[25%] ">
                    <div className="bg-[#ffff] ">
                        <div className="p-5 border-b-2 border-[rgba(240,142,128,.1)]">
                            <span className="header w-full">MOST POPULAR</span>

                        </div>
                        <div>
                            {similar.map((item, index) => {
                                return (
                                    <div key={index} className="flex w-full p-4">
                                        <div className="w-[25%] h-16 ">
                                            <Image
                                                alt=""
                                                src={'/img/1.jpg'}
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
                                            <Link href={'#'} className="text-[#152035] text-[14px] header">Drifting Apart Growing Happy</Link>
                                            <span className="text-[13px]">12, may 2018</span>
                                        </div>


                                    </div>

                                )
                            })}
                        </div>


                    </div>

                    <div className="bg-[#ffff] mt-5">
                        <div className="p-5 border-b-2 border-[rgba(240,142,128,.1)]">
                            <span className="header w-full">CATEGORIES</span>

                        </div>
                        <div className="flex gap-1 flex-wrap p-5">
                            {/* {categoriesList.map((item, index) => {
                                return (
                                    <div key={index} className="p-2 rounded-sm text-[#505050] mt-4 bg-[rgba(240,142,128,.1)]">

                                        <Link href={'#'} className="text-[#152035] ">
                                            {item.name}
                                        </Link>

                                    </div>

                                )
                            })} */}
                        </div>


                    </div>



                </div>



            </div>
        </>
    )


}