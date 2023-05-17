import styles from "./styles.module.css";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { animated, useSpring } from '@react-spring/web'



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
    <nav className="h-24 w-full sticky px-5 py-5 z-10 bg-[#FFF6EF] top-0 flex justify-between align-middle">
      <div>
        <span className="text-6xl site-name">
          <Link href={"/"}>Quno</Link>
        </span>
      </div>
      <div></div>
      <div className="gap-1 relative" style={{ display: "flex", alignItems: "center" }}>
        {/* <div className="flex bg-slate-500 h-[100%] align-middle justify-center">
          <svg
            className="w-7 h-7"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          > */}
        {/* <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            ></path> */}
        {/* </svg>
        </div> */}

        <div onClick={() => toggleUser('open')} className="relative w-10 h-10">
          <Image
            width={700}
            height={700}
            sizes={"100vw"}
            style={{
              width: "100%",
              height: "100%",
            }}
            className="mt-2 w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 "
            src={session?.user?.image ?? "/img/1.jpg"}
            alt="Bordered avatar"
          />
        </div>
        <animated.div style={{ ...springs }} className="absolute shadow-2xl bg-[#f7dac4]   w-[200px] right-1  flex  flex-col ">
          <div onClick={() => toggleUser('close')} className="flex justify-end cursor-pointer font-bold p-2 text-[#f08e80]">
            X
          </div>
          {session?.user ? <div className="flex flex-col gap-1 justify-center items-center py-4">
            <button className="bg-[#f08e80]  text-white rounded-md px-4 h-[30px] w-[90px]" onClick={() => signOut()}>Logout</button>
            {session.user.role == 'author' &&
              <Link href={'/dashboard/admin'} className="bg-[#f08e80] hover:text-white text-white rounded-md px-2 h-[30px] w-[90px]" >Dashboard</Link>
            }
          </div> :
            <div className="flex flex-col gap-1 justify-center items-center py-4">
              <button className="bg-[#f08e80] text-white rounded-md px-4 h-[30px] w-[90px]" onClick={() => signIn()}>Login</button>
              <button className="bg-[#f08e80] text-white rounded-md px-4 h-[30px] w-[90px]" onClick={() => signIn()}>Signup</button>

            </div>

          }

        </animated.div>
      </div>

    </nav>
  );
}
