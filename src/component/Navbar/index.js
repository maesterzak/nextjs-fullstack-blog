import styles from "./styles.module.css";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { animated, useSpring } from '@react-spring/web'
import Button1 from "../Reuseable/Buttons/Button1";
import { useRouter } from "next/router";
import useSWR, { useSWRConfig } from "swr";
import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const fetcher = (url) => axios(url).then(r => r.data);


export default function Navbar() {
  const router = useRouter()
  const [isOPen, setIsOpen] = useState(false)
  const handleClick = () => {
    setIsOpen(!isOPen)
  }
  let { data, error, isLoading } = useSWR('/api/database/category/get-all/', fetcher, {

    revalidateOnFocus: false,
  });
  console.log("assss", data, error)

  const [springs, api] = useSpring(() => ({
    from: { y: -300, x: 0 },

  }))
  const toggleUser = (param) => {
    if (param == 'open') {
      api.start({
        from: {
          y: -300,
        },
        to: {
          y: 100,
        },
      })
    }
    else if (param == "close") {
      api.start({
        from: {
          y: 0,
        },
        to: {
          y: -200,
        },
      })

    }
  }

  const submitHandler = (e) => {
    e.preventDefault()
    var formData = new FormData(e.target);
    let form_values = Object.fromEntries(formData);
    if (form_values.search) {
      let url = `/search?q=${form_values.search}
    `
      router.push(url)
    }


  }

  return (
    <nav className=" w-full md:mb-10    sticky   z-10  bg-secondaryBackground top-0 ">

      <div className="lg:container mx-auto px-5 py-5 lg:px-5">
        <div className="flex w-full items-center justify-between">
          <Link href={"/"} className="flex items-center gap-1">
            <div className="bg-[red] w-16 h-16 rounded-full overflow-hidden">

            </div>
            <span className="text-2xl text-secondLink font-bold">Haylisters</span>
          </Link>


          <button onClick={handleClick} className="flex flex-col md:hidden leading-[6px] font-bold text-xl">
            <span className={`bg-[#fff] block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${isOPen ? "rotate-45 translate-y-2S" : "-translate-y-1"}`}></span>
            <span className={`bg-[#fff] block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOPen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`bg-[#fff] block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${isOPen ? "-rotate-45 -translate-y-2" : "translate-y-1"}`}></span>
          </button>

          <div className="hidden md:flex gap-2 items-center">
            <div className="hidden md:block">
              <form onSubmit={submitHandler} className="flex">
                <input required className="h-[40px]" name="search" placeholder="Search..." /><Button1 text={"Search"} classList={"px-3   outline-none rounded-r-lg  flex justify-center items-center bg-categoryBackgroundColor text-secondLink "} />
              </form>
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"> <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" /> </svg> */}
            </div>
            {/* <Button1 text={"Subscribe"} classList={"px-7 py-2 border-2 border-primaryColor rounded-xl flex justify-center items-center"} /> */}
          </div>
        </div>

      </div>
      <div className="mt-2 hidden md:flex py-2 justify-center gap-3  bg-thirdBackground text-secondLink ">
        {isLoading || error ?
          <>
            <Link href={"/"} className="px-5 py-2 shadow-xl rounded-lg text-[#fff] bg-loadingSkeleton animate-pulse hover:shadow-3xl">Loading</Link>
            <Link href={"/"} className="px-5 py-2 shadow-xl rounded-lg text-[#fff] bg-loadingSkeleton animate-pulse hover:shadow-3xl">Loading</Link>
            <Link href={"/"} className="px-5 py-2 shadow-xl rounded-lg text-[#fff] bg-loadingSkeleton animate-pulse hover:shadow-3xl">Loading</Link>
            <Link href={"/"} className="px-5 py-2 shadow-xl rounded-lg text-[#fff] bg-loadingSkeleton animate-pulse hover:shadow-3xl">Loading</Link>

          </>
          :
          <>
            <Link href={`/`} className="px-5 py-2 font-bold shadow-xl rounded-lg hover:bg-secondaryBackground">Home</Link>
            {data.data.map((e, index) => {
              return (
                <Link key={index} href={`/category/${e.slug}`} className="px-5 py-2 hover:bg-secondaryBackground font-bold shadow-2xl rounded-lg ">{e.name}</Link>
              )
            })}
          </>

        }

      </div>

      {/* mobile nav */}
      <motion.div
        initial={{ x: "-100%", width: "100%" }}

        animate={{ x: isOPen ? "0%" : "-100%", width: "100%" }}
        transition={{ duration: 0.7, ease: "easeIn" }}
        onClick={() => setIsOpen(false)} className=" backdrop-blur-sm  fixed top-0 h-full ">
        <div onClick={(e) => e.stopPropagation()} className=" w-3/5 h-full bg-thirdBackground text-secondLink top-0 flex flex-col items-center py-10 gap-5">
          {isLoading || error ?
            <>
              <Link href={"/"} className="px-5 py-2 shadow-xl rounded-lg text-[#fff] bg-loadingSkeleton animate-pulse hover:shadow-3xl">Loading</Link>
              <Link href={"/"} className="px-5 py-2 shadow-xl rounded-lg text-[#fff] bg-loadingSkeleton animate-pulse hover:shadow-3xl">Loading</Link>
              <Link href={"/"} className="px-5 py-2 shadow-xl rounded-lg text-[#fff] bg-loadingSkeleton animate-pulse hover:shadow-3xl">Loading</Link>
              <Link href={"/"} className="px-5 py-2 shadow-xl rounded-lg text-[#fff] bg-loadingSkeleton animate-pulse hover:shadow-3xl">Loading</Link>

            </>
            :
            <>
              <Link href={`/`} onClick={() => setIsOpen(false)} className="px-5 py-2 font-bold">Home</Link>
              {data?.data?.map((e, index) => {
                return (
                  <Link key={index} onClick={() => setIsOpen(false)} href={`/category/${e.slug}`} className="px-5 py-2 font-bold">{e.name}</Link>

                )
              })}
            </>}

          <div className="flex flex-col gap-2 items-center mt-20">
            <div className="p-1">
              <form onSubmit={submitHandler} className="flex">
                <input required className="h-[40px] w-full" name="search" placeholder="Search..." />
                <button type={"submit"} className="flex justify-center items-center p-1 border-2 ">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"> <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" /> </svg>
                </button>
                {/* <Button1 text={"Search"} classList={"px-3  border-2 outline-none rounded-r-lg border-primaryColor flex justify-center items-center"} /> */}
              </form>
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"> <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" /> </svg> */}
            </div>

            {/* <Button1 text={"Subscribe"} classList={"px-7 py-2 border-2 border-primaryColor rounded-xl flex justify-center items-center"} /> */}
          </div>

        </div>
      </motion.div>
      {/* end mobile nav */}
    </nav>
  );
}
