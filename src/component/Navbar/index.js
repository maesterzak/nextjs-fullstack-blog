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
    <nav className="h-24 w-full sticky px-5 py-5 z-10 container mx-auto bg-primaryBackground top-0 ">
      <div className="flex w-full justify-between">
        <div>search</div>
        <div>QUNO</div>
        <div><Button1 text={"Subscribe"} classList={"px-5 py-1 border-2 border-primaryColor flex justify-center items-center"} /></div>
      </div>
      <div className="mt-2 flex justify-center gap-3">
        <span>Automobile</span>
        <span>Automobile</span>
        <span>Automobile</span>
        {/* <span>Automobile</span>
        <span>Automobile</span>
        <span>Automobile</span> */}

      </div>
    </nav>
  );
}
