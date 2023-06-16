import Link from "next/link";
import { animated, useSpring } from '@react-spring/web'
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { images } from "@/images";
import Image from "next/image";


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
        from: { x: -250 },
    }))
    const toggleSideBar = (param) => {
        if (param == 'open') {
            api.start({
                from: {
                    x: -250,
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
                    x: -250,
                },
            })

        }
    }

    // const user = session?.data?.user;

    // if (user?.role !== "author") {
    //     return (
    //         <section className="grid h-screen place-items-center">
    //             <div className="w-25">
    //                 <p>You do not have permission to view this page!</p>
    //             </div>
    //         </section>
    //     );

    // }
    return (
        <>

            <div className="flex justify-end md:hidden">
                <div onClick={() => toggleSideBar('open')} style={{ lineHeight: '8px' }} className="flex flex-col m-0 gap-0 px-2">
                    <span>____</span>
                    <span>____</span>
                    <span>____</span>

                </div>

            </div>
            <div className="w-full h-screen overflow-hidden  flex-wrap md:flex">

                <animated.div style={{ ...springs }} className="w-[50%] md:w-[20%]  border-r-4 md:static z-10  md:z-0 bg-primaryColor h-screen fixed top-0 flex flex-col  items-center gap-3 md:hidden">
                    <div className="md:hidden flex w-full justify-end">
                        <button onClick={() => toggleSideBar('close')} className="text-black p-2 font-extrabold text-buttonText">X</button>
                    </div>
                    <div className="avatar flex flex-col gap-5">
                        <div className="w-24 rounded-full">
                            <Image
                                src={images.placeHolder3}
                            />
                        </div>
                        <span className="text-buttonText">Maesterzak</span>
                    </div>
                    <Link
                        href={"/dashboard/admin"}
                        className="rounded-sm bg-[#fff] w-36 p-2 flex justify-center"
                    >
                        Dashboard
                    </Link>
                    <Link
                        href={"/dashboard/admin/post"}
                        className="rounded-sm bg-[#fff] p-2 w-36 flex justify-center"
                    >
                        Posts
                    </Link>
                    <Link
                        href={"/dashboard/admin/category"}
                        className="rounded-sm bg-[#fff]    p-2  w-36 flex justify-center"
                    >
                        Categories
                    </Link>
                    <Link
                        href={"/dashboard/admin/comments"}
                        className="rounded-sm bg-[#fff]    p-2  w-36 flex justify-center"
                    >
                        Comments
                    </Link>
                    <Link
                        href={"/dashboard/admin/profile"}
                        className="rounded-sm bg-[#fff] p-2 w-36 flex justify-center"
                    >
                        Profile
                    </Link>
                    <Link
                        href={"/dashboard/admin/users"}
                        className="rounded-sm bg-[#fff]    p-2  w-36 flex justify-center"
                    >
                        Users
                    </Link>

                </animated.div>

                <div className="w-[50%] md:w-[20%]   fixed md:static py-12  bg-primaryColor   h-screen  flex-col  items-center gap-3 hidden md:flex">
                    <div className="avatar flex flex-col gap-5">
                        <div className="w-24 rounded-full">
                            <Image
                                src={images.placeHolder3}
                            />
                        </div>
                        <span className="text-buttonText">Maesterzak</span>
                    </div>

                    <div className="md: hidden flex w-full justify-end">
                        <button onClick={() => toggleSideBar('close')} className="text-black p-2 font-extrabold">X</button>
                    </div>
                    <Link
                        href={"/dashboard/admin"}
                        className="rounded-sm bg-[#fff] w-36 p-2 flex justify-center"
                    >
                        Dashboard
                    </Link>
                    <Link
                        href={"/dashboard/admin/post"}
                        className="rounded-sm bg-[#fff] p-2 w-36 flex justify-center"
                    >
                        Posts
                    </Link>
                    <Link
                        href={"/dashboard/admin/category"}
                        className="rounded-sm bg-[#fff]    p-2  w-36 flex justify-center"
                    >
                        Categories
                    </Link>
                    <Link
                        href={"/dashboard/admin/comments"}
                        className="rounded-sm bg-[#fff]    p-2  w-36 flex justify-center"
                    >
                        Comments
                    </Link>
                    <Link
                        href={"/dashboard/admin/profile"}
                        className="rounded-sm bg-[#fff] p-2 w-36 flex justify-center"
                    >
                        Profile
                    </Link>
                    <Link
                        href={"/dashboard/admin/users"}
                        className="rounded-sm bg-[#fff]    p-2  w-36 flex justify-center"
                    >
                        Users
                    </Link>

                </div>
                <div className="w-[95%] md:w-[80%] h-screen overflow-y-auto">{children}</div>
            </div>
        </>
    );
}
export default AdminLayout;
