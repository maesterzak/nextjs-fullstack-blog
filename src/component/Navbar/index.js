import styles from "./styles.module.css";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { animated, useSpring } from '@react-spring/web'
import Button1 from "../Reuseable/Buttons/Button1";



export default function Navbar() {
  const { data: session } = useSession();

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

  return (
    <nav className="lg:h-24 w-full   sticky lg:px-5 py-5 z-10  bg-thirdBackground top-0 ">
      <div className="lg:container mx-auto px-8 ">
        <div className="flex w-full items-center justify-between">
          <div className="hidden md:block">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"> <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" /> </svg>
          </div>
          <div className="text-4xl font-bold">HAYLISTERS</div>
          <div className="flex flex-col md:hidden leading-[6px] font-bold text-xl">
            <span>___</span>
            <span>___</span>
            <span>___</span>
          </div>
          <div className="hidden md:block"><Button1 text={"Subscribe"} classList={"px-7 py-2 border-2 border-primaryColor flex justify-center items-center"} /></div>
        </div>
        <div className="mt-2 hidden md:flex  justify-center gap-3">
          <span>Automobile</span>
          <span>Automobile</span>
          <span>Automobile</span>
          <span>Automobile</span>
          <span>Automobile</span>
          <span>Automobile</span>
          <span>Automobile</span>
          {/* <span>Automobile</span>
        <span>Automobile</span>
        <span>Automobile</span> */}

        </div>
      </div>
    </nav>
  );
}
