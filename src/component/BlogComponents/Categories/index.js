import { useState, useEffect } from "react"
import getHandler from "@/component/formHandlers/getHandler"
import Link from "next/link"

export default function CategoriesComponent() {
    const [categoriesList, setCategoriesList] = useState(undefined)


    const getCategories = async () => {
        let url = '/api/database/category/get-all/'
        let res = await getHandler(url)

        setCategoriesList(res.data.data)
    }

    useEffect(() => {
        getCategories()
    }, [])

    return (
        <div className="bg-secondaryBackground mt-5">
            <div className="p-5 border-b-2 border-[rgba(240,142,128,.1)]">
                <span className="header w-full">CATEGORIES</span>

            </div>
            <div className="flex gap-1 flex-wrap p-5">
                {!categoriesList ? <>

                    <div className="flex items-center justify-center">
                        <span>Loading</span>
                    </div>

                </> : <>

                    {categoriesList?.map((item, index) => {
                        return (
                            <div key={index} className="p-2 rounded-sm text-[#505050] mt-4 bg-[rgba(240,142,128,.1)]">

                                <Link href={'#'} className="text-[#152035] ">
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