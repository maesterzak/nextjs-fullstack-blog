import Image from "next/image";
import styles from "./styles.module.css";
import PostCardOne from "../PostCards/PostCardOne";
import PostCardTwo from "../PostCards/PostCardTwo";

export default function Hero() {
  return (
    <div className="container mx-auto h-4/5 ">
      <div className=" flex flex-col md:flex-row gap-2 md:justify-between ">
        <div className="md:w-[50%] w-full">
          <PostCardOne />

        </div>
        <div className="md:w-[49%] h-full gap-2 flex flex-col justify-between">
          <div className="h-1/3 w-full">
            <PostCardTwo />


          </div>
          <div className="h-1/3 w-full">
            <PostCardTwo />
          </div>
          <div className="h-1/3 w-full">
            <PostCardTwo />

          </div>

        </div>

      </div>

    </div>
  );
}
