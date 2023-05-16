import AdminLayout from "../layout";
// import MDEditor from '@uiw/react-md-editor';
import { useState } from "react";
// import rehypeSanitize from "rehype-sanitize";
import 'react-quill/dist/quill.snow.css'
import dynamic from "next/dynamic";
import postData from "@/component/formHandlers/postHandler";
import { ToastContainer, toast } from 'react-toastify';
import { useSession } from "next-auth/react";
import { loadCategories } from "lib/server/loadCategories";
import { useRouter } from "next/router";

const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
})


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
    props: { categories: data }
  }
}

function AddPost({ categories }) {

  const router = useRouter()
  const session = useSession()
  const [value, setValue] = useState("**Hello world!!!**");


  const modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }, { font: [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image', 'video'],
      ['clean'],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  }
  const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'video',
  ]

  const addArticle = async (param) => {
    var url = '/api/database/article/add/'
    let res = await postData(url, param)

    if (res.code == 201) {
      toast.success('Post Created', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      router.push('/dashboard/admin/post')

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

    let slug = form_values.title.replace(/\s+/g, '-').toLowerCase()

    let data = {

      authorId: 1,
      title: form_values.title,
      body: value,
      image: '/img/1.jpg',
      summary: form_values.summary,
      categoryId: parseInt(form_values.category),
      slug: slug

    }
    addArticle(data)


  }




  return (
    <AdminLayout>

      <form onSubmit={submitHandler} className="p-5 grid gap-4 overflow-y-auto">
        <h1 className="header">ADD POST</h1>

        <input placeholder="Enter title" className="p-4 appearance-none border-2 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[rgba(240,142,128,.1)]" name="title" />
        {/* <input placeholder="Category" className="p-4 appearance-none border-2 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[rgba(240,142,128,.1)]" name="title" /> */}

        <select name="category">
          <option selected="selected" disabled>Select Category</option>
          {categories.map((e, index) => {
            return (
              <option key={index} value={e.id}>{e.name}</option>
            )

          })}

        </select>
        {/* {categories.map((e, index) => {
          e.name
        })} */}
        <div className="h-[65vh]">
          <label>Body</label>
          <QuillNoSSRWrapper className="h-[60vh] mb-10" value={value} onChange={setValue} modules={modules} formats={formats} theme="snow" />
        </div>
        <label className="mt-10">Summary</label>
        <textarea name="summary" className="p-4 appearance-none border-2 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[rgba(240,142,128,.1)]" placeholder="Enter Summary"></textarea>
        {/* <QuillNoSSRWrapper className="h-[60vh] mb-10"  theme="snow" /> */}
        <label>Select Post Image</label>
        <input placeholder="Select " name="image" type={'file'} />
        <div className="flex justify-center">
          <button className="rounded-sm bg-[#f08e80] text-white  p-2 hover:text-[white] w-36 flex justify-center">Save</button>
        </div>
      </form>


    </AdminLayout>

  )
}
export default AddPost;