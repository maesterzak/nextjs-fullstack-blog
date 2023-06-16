import AdminLayout from "@/component/Layout/AdminLayout";
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
import { useRef, useMemo } from "react";
import CKeditor from "@/component/CKeditor";
import { useEffect } from "react";



// const QuillNoSSRWrapper = dynamic(import('react-quill'), {
//   ssr: false,
//   loading: () => <p>Loading ...</p>,
// })
const QuillNoSSRWrapper = dynamic(
  async () => {
    const { default: RQ } = await import('react-quill');
    // eslint-disable-next-line react/display-name
    return ({ forwardedRef, ...props }) => <RQ ref={forwardedRef} {...props} />;
  },
  { ssr: false }
);


export const getStaticProps = async () => {

  // const [image, setImage] = useState(undefined);
  let res = await loadCategories()
  let data
  if (res.success) {
    data = res.data
  }
  else {
    return undefined
  }
  return {
    props: { categories: data },
    revalidate: 10, // In seconds
  }
}

function AddPost({ categories }) {

  const router = useRouter()
  const session = useSession()
  const quillRef = useRef();
  const [value, setValue] = useState("**Hello world!!!**");
  const preset_key = 'mkultra'

  const [editorLoaded, setEditorLoaded] = useState(false);
  const [data, setData] = useState("");
  useEffect(() => {
    setEditorLoaded(true);
  }, []);

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
    console.log("ll", res)

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

  //star
  const upload = async (formData2) => {
    let cloud_name = 'dekwrxtrq'
    const data5 = await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, {
      method: 'POST',
      body: formData2
    })

    let response = await data5.json()

    return response.secure_url

  }


  const imageHandler = (e) => {

    const editor = quillRef.current.getEditor();

    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      if (/^image\//.test(file.type)) {

        const formData = new FormData();
        formData.append("file", file);
        await formData.append('upload_preset', preset_key);
        const url = await upload(formData); // upload data into server or aws or cloudinary

        editor.insertEmbed(editor.getSelection(), "image", url);
      } else {
        ErrorToast('You could only upload images.');
      }
    };
  }
  const modules2 = useMemo(() => ({
    toolbar: {
      container: [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        ['bold', 'italic', 'underline', "strike"],
        [{ 'list': 'ordered' }, { 'list': 'bullet' },
        { 'indent': '-1' }, { 'indent': '+1' }],
        ['image', "link",],
        [{ 'color': ['#000000', '#e60000', '#ff9900', '#ffff00', '#008a00', '#0066cc', '#9933ff', '#ffffff', '#facccc', '#ffebcc', '#ffffcc', '#cce8cc', '#cce0f5', '#ebd6ff', '#bbbbbb', '#f06666', '#ffc266', '#ffff66', '#66b966', '#66a3e0', '#c285ff', '#888888', '#a10000', '#b26b00', '#b2b200', '#006100', '#0047b2', '#6b24b2', '#444444', '#5c0000', '#663d00', '#666600', '#003700', '#002966', '#3d1466'] }]
      ],
      handlers: {
        image: imageHandler
      }
    },
  }), [])

  //end

  const submitHandler = async (e) => {



    e.preventDefault();
    var formData = new FormData(e.target);
    const form_values = await Object.fromEntries(formData);
    let slug = await form_values.title.replace(/\s+/g, '-').toLowerCase()

    let secure_url
    if (form_values.image.name != '') {
      const formData2 = await new FormData();

      // for (const file of fileInput.files) {
      //   formData2.append('file', file);
      // }
      await formData2.append('file', form_values.image);
      await formData2.append('upload_preset', preset_key);




      secure_url = await upload(formData2)
    }


    let data = {

      authorId: session?.data?.user?.author,

      title: form_values.title,
      body: value,
      image: secure_url ?? '',
      summary: form_values.summary,
      categoryId: form_values.category,
      slug: slug

    }

    addArticle(data)


  }




  return (
    <AdminLayout>

      <form onSubmit={submitHandler} className="p-5 grid gap-4 overflow-y-auto">
        <h1 className="header">ADD POST</h1>
        <label>Title *</label>
        <input required placeholder="Enter title" className="p-4 appearance-none border-2 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[rgba(240,142,128,.1)]" name="title" />
        {/* <input placeholder="Category" className="p-4 appearance-none border-2 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[rgba(240,142,128,.1)]" name="title" /> */}
        <label>Category *</label>
        <select className="border-2 h-8 border-link" required name="category">
          <option selected disabled>Select Category</option>
          {categories.map((e, index) => {
            return (
              <option key={index} value={e.id}>{e.name}</option>
            )

          })}

        </select>
        {/* {categories.map((e, index) => {
          e.name
        })} */}
        <div className="">
          <label>Body *</label>
          <div className="h-4/5">
            <CKeditor
              name="description"

              onChange={(data) => {
                setData(data);
              }}
              editorLoaded={editorLoaded}
            />

          </div>
          {/* <QuillNoSSRWrapper forwardedRef={quillRef} className="h-[60vh] mb-10" value={value} onChange={setValue} modules={modules2} formats={formats} theme="snow" /> */}
        </div>
        <label className="">Summary *</label>
        <textarea maxLength={150} required name="summary" className="p-4 appearance-none border-2 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[rgba(240,142,128,.1)]" placeholder="Enter Summary"></textarea>
        {/* <QuillNoSSRWrapper className="h-[60vh] mb-10"  theme="snow" /> */}
        <label>Select Post Image</label>
        <input placeholder="Select" name="image" type={'file'} />
        <div className="flex justify-center">
          <button className="rounded-sm bg-link  p-2 hover:text-secondLink text-secondLink w-36 flex justify-center">Save</button>
        </div>
      </form>


    </AdminLayout>

  )
}
export default AddPost;