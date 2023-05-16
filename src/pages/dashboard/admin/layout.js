import Link from "next/link";
import { animated, useSpring } from '@react-spring/web'
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";



// export const getServerSideProps = async ({ req, res }) => {
//   const { user } = req.session;
//   const session = useSession()
//   console.log("hjjjj", session)
//   if (!session.data.user.role == 'admin') {
//     return {
//       redirect: {
//         destination: '/',
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: { user },
//   };
// };

// export async function getServerSideProps() {
//   const session = useSession()
//   console.log("hjjjj", session)
//   // Fetch data from external API
//   const res = await fetch(`https://.../data`);
//   const data = await res.json();

//   // Pass data to the page via props
//   return { props: { data } };
// }

function AdminLayout({ children }) {
  const session = useSession()
  const route = useRouter()


  const [springs, api] = useSpring(() => ({
    from: { x: -200 },
  }))
  const toggleSideBar = (param) => {
    if (param == 'open') {
      api.start({
        from: {
          x: -200,
        },
        to: {
          x: 0,
        },
      })
    }
    else if (param == "close") {
      api.start({
        from: {
          x: 0,
        },
        to: {
          x: -200,
        },
      })

    }
  }

  const user = session?.data.user;
  console.log("jkd", user)
  if (user?.role !== "author") {
    return (
      <section className="grid h-screen place-items-center">
        <div className="w-25">
          <p>You do not have permission to view this page!</p>
        </div>
      </section>
    );

  }
  return (
    <>

      <div className="flex justify-end md:hidden">
        <div onClick={() => toggleSideBar('open')} style={{ lineHeight: '8px' }} className="flex flex-col m-0 gap-0 px-2">
          <span>____</span>
          <span>____</span>
          <span>____</span>

        </div>

      </div>
      <div className="w-full  flex-wrap md:flex">

        <animated.div style={{ ...springs }} className="w-[50%] md:w-[20%]  border-r-4 fixed md:static z-10  md:z-1 bg-[#FFF6EF]  border-[rgba(240,142,128,.1)] h-[80vh] flex flex-col text-[white] items-center gap-3 md:hidden">
          <div className="md:hidden flex w-full justify-end">
            <button onClick={() => toggleSideBar('close')} className="text-black p-2 font-extrabold">X</button>
          </div>
          <Link
            href={"/dashboard/admin"}
            className="rounded-sm bg-[#f08e80] hover:text-[white] w-36 p-2 flex justify-center"
          >
            Dashboard
          </Link>
          <Link
            href={"/dashboard/admin/post"}
            className="rounded-sm bg-[#f08e80] p-2 hover:text-[white] w-36 flex justify-center"
          >
            Posts
          </Link>
          <Link
            href={"/dashboard/admin/category"}
            className="rounded-sm bg-[#f08e80]   p-2 hover:text-[white] w-36 flex justify-center"
          >
            Categories
          </Link>
          <Link
            href={"/dashboard/admin/post"}
            className="rounded-sm bg-[#f08e80]   p-2 hover:text-[white] w-36 flex justify-center"
          >
            Comments
          </Link>
          <Link
            href={"/dashboard/admin/post"}
            className="rounded-sm bg-[#f08e80]   p-2 hover:text-[white] w-36 flex justify-center"
          >
            Profile
          </Link>
        </animated.div>

        <div className="w-[50%] md:w-[20%]  border-r-4 fixed md:static z-10  md:z-1 bg-[#FFF6EF]  border-[rgba(240,142,128,.1)] h-[80vh]  flex-col text-[white] items-center gap-3 hidden md:flex">
          <div className="md:hidden flex w-full justify-end">
            <button onClick={() => toggleSideBar('close')} className="text-black p-2 font-extrabold">X</button>
          </div>
          <Link
            href={"/dashboard/admin"}
            className="rounded-sm bg-[#f08e80] hover:text-[white] w-36 p-2 flex justify-center"
          >
            Dashboard
          </Link>
          <Link
            href={"/dashboard/admin/post"}
            className="rounded-sm bg-[#f08e80] p-2 hover:text-[white] w-36 flex justify-center"
          >
            Posts
          </Link>
          <Link
            href={"/dashboard/admin/category"}
            className="rounded-sm bg-[#f08e80]   p-2 hover:text-[white] w-36 flex justify-center"
          >
            Categories
          </Link>
          <Link
            href={"/dashboard/admin/post"}
            className="rounded-sm bg-[#f08e80]   p-2 hover:text-[white] w-36 flex justify-center"
          >
            Comments
          </Link>
          <Link
            href={"/dashboard/admin/post"}
            className="rounded-sm bg-[#f08e80]   p-2 hover:text-[white] w-36 flex justify-center"
          >
            Profile
          </Link>

        </div>
        <div className="w-[95%] md:w-[80%]">{children}</div>
      </div>
    </>
  );
}
export default AdminLayout;
