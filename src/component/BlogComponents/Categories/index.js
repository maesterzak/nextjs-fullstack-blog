import { useState, useEffect } from "react"
import getHandler from "@/component/formHandlers/getHandler"
import Link from "next/link"

export default function CategoriesComponent() {
    const [categoriesList, setCategoriesList] = useState(undefined)


    const getCategories = async () => {
        let url = '/api/database/category/get-all/'
        let res = await getHandler(url)

        setCategoriesList(res?.data?.data)
    }

    useEffect(() => {
        getCategories()
    }, [])

    return (
        <div className="bg-secondaryBackground mt-5 text-secondLink">
            <div className="p-5 border-b-2 border-[rgba(240,142,128,.1)] text-secondLink">
                <span className="header w-full">CATEGORIES</span>

            </div>
            <div className="flex gap-1 flex-wrap p-5">
                {!categoriesList ? <>

                    <div className="flex w-full items-center justify-center">
                        <span>Loading</span>
                    </div>

                </> : <>

                    {categoriesList?.map((item, index) => {
                        //former category classes className="p-2 rounded-sm text-[#505050] mt-4 bg-[rgba(240,142,128,.1)]"
                        return (
                            <div key={index} className="p-2 rounded-sm  mt-4 bg-primaryBackground">
                                {/* former link class  text-[#152035]*/}
                                <Link href={'/category/' + item.name} className="">
                                    {item.name}
                                </Link>

                            </div>

                        )
                    })}
                </>}

            </div>


        </div>

    )
}