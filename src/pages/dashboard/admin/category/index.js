import AdminLayout from "../../../../component/Layout/AdminLayout.jsx";
import Link from "next/link";
import Image from "next/image";
import postData from "@/component/formHandlers/postHandler";
import { ToastContainer, toast } from 'react-toastify';
import getHandler from "@/component/formHandlers/getHandler";
import { loadCategories } from "lib/server/loadCategories";
import { useState } from "react";
import deleteData from "@/component/formHandlers/deleteHandler";
import ButtonOne from "@/component/Reuseable/Buttons/ButtonOne/index.jsx";
import ButtonTwo from "@/component/Reuseable/Buttons/ButtonTwo/index.jsx";
import Button1 from "@/component/Reuseable/Buttons/Button1/index.jsx";
import Button2 from "@/component/Reuseable/Buttons/Button2/index.jsx";



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

        form_values.name = form_values.name.charAt(0).toUpperCase() + form_values.name.slice(1)




        addCategory(form_values)
        e.target.reset()


    }


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
            console.log("jj", res)
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
            <div className="w-full px-6 flex flex-col gap-10 relative">
                <h1 className="header">Categories</h1>


                <form className="flex gap-5 justify-end" onSubmit={submitHandler}>
                    <input required className="w-[30%] p-2 rounded-md " placeholder="Enter category name" name="name" />

                    <Button1 classList={"bg-linkColor2 px-10 text-buttonText rounded md"} type={'submit'} text={'Add'} />
                </form>






                <div className="w-full flex-col">
                    {/* ta */}
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {categories?.map((e, index) => {
                                    return (
                                        <tr key={index}>
                                            <th>{index}</th>
                                            <td>{e.name}</td>
                                            <td><Button2 type={'button'} classList="bg-linkColor2 text-buttonText p-4" text={'Edit'} /></td>
                                            <td><Button2 type={'button'} classList="bg-[red] text-buttonText p-4" text={'Delete'} onClickHandler={() => deleteCat(e.id)} /></td>
                                        </tr>
                                    )
                                })}



                            </tbody>
                        </table>
                    </div>

                    {/* end */}




                </div>





            </div>

        </AdminLayout>
    )
}
export default Categories;