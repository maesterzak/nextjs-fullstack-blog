import Image from "next/image";
import styles from "./styles.module.css";
import PostCardOne from "../PostCards/PostCardOne";
import PostCardTwo from "../PostCards/PostCardTwo";
import { useState } from "react";
import { useEffect } from "react";
import { apiUrl } from "utils";
export default function Hero() {
  const [data, setData] = useState(undefined)
  const getHeroData = async () => {
    let res = await fetch('/api/database/article/hero-articles/')
    let response = await res.json()

    setData(response.data)
  }

  useEffect(() => {
    getHeroData()
  }, [])
  const dummyData = [1, 2, 3]

  return (
    <div className=" mx-auto w-full lg:h-1/2 ">
      <div className=" flex w-full   lg:h-[60%] overflow-hidden flex-col md:flex-row gap-2 md:justify-between ">
        <div className="md:w-[50%] w-full md:px-5 lg:px-0">
          <PostCardOne heroMainPost={data?.heroMainPost} />

        </div>
        <div className="md:w-[49%] p-5 md:p-0 h-[100%] gap-2 flex flex-col justify-between">
          <div className="h-1/3 w-full">
            <PostCardTwo topPosts={data?.topPosts[0]} />


          </div>
          <div className="h-1/3 w-full">
            <PostCardTwo topPosts={data?.topPosts[1]} />
          </div>
          <div className="h-1/3 w-full">
            <PostCardTwo topPosts={data?.topPosts[2]} />

          </div>

        </div>

      </div>

    </div>
  );
}
