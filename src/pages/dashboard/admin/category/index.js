import AdminLayout from "../layout";
import Link from "next/link";
import Image from "next/image";
import postData from "@/component/formHandlers/postHandler";
import { ToastContainer, toast } from 'react-toastify';
import getHandler from "@/component/formHandlers/getHandler";
import { loadCategories } from "lib/server/loadCategories";
import { useState } from "react";
import deleteData from "@/component/formHandlers/deleteHandler";



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
        props: { param: data },
        revalidate: 10, // In seconds
    }
}


function Categories({ param }) {
    const [categories, setCategories] = useState(param)
    const addCategory = async (param) => {
        var url = '/api/database/category/add/'
        let res = await postData(url, param)
        console.log("response", res)
        if (res.code == 201) {
            toast.success('Category Created', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

            setCategories(res.data)

        }
        else {
            toast.error('Something went wrong', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }



    const submitHandler = (e) => {
        e.preventDefault();
        var formData = new FormData(e.target);
        const form_values = Object.fromEntries(formData);
        console.log('form values', form_values)


        addCategory(form_values)


    }
    console.log("pp", categories)

    const deleteCat = async (param) => {
        let url = `/api/database/category/delete/${param}`
        let res = await deleteData(url)
        if (res.code == 200) {
            toast.success('Category Deleted', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setCategories(res.data)
        }
        else {
            toast.error('Something went wrong', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }

    }

    return (
        <AdminLayout>
            <div className="w-full px-6  relative">
                <h1 className="header">Categories</h1>


                <form className="flex gap-5" onSubmit={submitHandler}>
                    <input className="w-[30%] p-2 rounded-md " placeholder="Enter category name" name="name" />
                    <button type={"submit"} className="inline-flex items-center px-4 py-2 mr-3 text-secondLink text-sm font-medium  bg-secondaryBackground border border-gray-300 rounded-lg text-white hover:text-[#505050]">

                        add
                    </button>
                </form>






                <div className="w-full flex-col">
                    <div>
                        {categories?.map((item, index) => {
                            return (
                                <div className="flex w-full p-4" key={index}>

                                    <div className="w-[75%] px-3 grid">
                                        <span href={'#'} className="text-[#152035] text-[14px] text-lg header">{item.name}</span>
                                        <div className=" flex gap-3">

                                            <button href="#" className="inline-flex items-center p-2  mr-3 text-sm font-medium text-secondLink  bg-secondaryBackground border border-gray-300 rounded-lg text-white hover:text-[#505050]">
                                                edit
                                            </button>
                                            <button onClick={() => deleteCat(item.id)} href="#" className="inline-flex items-center p-2  mr-3 text-sm font-medium text-secondLink  bg-secondaryBackground border border-gray-300 rounded-lg text-white hover:text-[#505050]">
                                                delete
                                            </button>
                                        </div>

                                    </div>



                                </div>

                            )
                        })}
                    </div>



                </div>





            </div>

        </AdminLayout>
    )
}
export default Categories;