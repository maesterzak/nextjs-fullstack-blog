import ButtonFour from "@/component/Reuseable/Buttons/ButtonFour";
import ButtonOne from "@/component/Reuseable/Buttons/ButtonOne";
import ButtonTwo from "@/component/Reuseable/Buttons/ButtonTwo";
import { useSession } from "next-auth/react";
import { useState } from "react";

const { default: AdminLayout } = require("@/component/Layout/AdminLayout");
const { default: Image } = require("next/image");


export default function ProfilePage() {
    const session = useSession()
    const [edit, setEdit] = useState(false)

    const handleSubmit = () => {

    }

    return (
        <AdminLayout>
            {/* <div className="md:flex ">
                <div>
                    <Image
                        alt=""
                        src={session?.data?.user?.image}
                        width={700}
                        height={700}
                        sizes={"100vw"}
                        style={{
                            width: '100%',
                            height: 'auto'
                        }}


                    />
                </div>

            </div> */}
            {edit ?
                <div class="container mx-auto px-4 py-8">
                    <h1 class="text-3xl font-bold mb-4">Edit Profile</h1>
                    <form class="max-w-md">
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Name</label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your Name" value="John Doe" />
                        </div>/
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email</label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your Email" value="johndoe@example.com" />
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="New Password" />
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="confirm-password">Confirm Password</label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="confirm-password" type="password" placeholder="Confirm New Password" />
                        </div>
                        <ButtonFour text={"Submit"} />
                    </form>
                </div>
                :
                <div className="mb-5 mt-5 border-t-2">

                    <div class="max-w-md mx-auto mt-5 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                        <div className="mt-4 flex justify-end">
                            <ButtonTwo onClickHandler={() => setEdit(!edit)} text={"Edit"} />

                        </div>
                        <div class="flex justify-center flex-col items-center">
                            <div class="md:flex-shrink-0 w-[200px] h-[200px] overflow-hidden rounded-full">
                                <Image
                                    src={"/img/1.jpg"}
                                    alt="author"
                                    width={100}
                                    height={100}
                                    sizes={"10vw"}
                                    style={{
                                        width: '100%',
                                        height: '100%'
                                    }}

                                />
                                <img class="h-48 w-full object-cover md:h-full md:w-48" src="author-avatar.jpg" alt="Author Avatar" />
                            </div>
                            <div class="p-8">
                                <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Author</div>
                                <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">John Doe</a>
                                <p class="mt-2 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat arcu eget magna interdum, eget mattis nulla consectetur. Mauris lacinia ex sed tortor malesuada consectetur.</p>
                                <div class="mt-4">
                                    {/* <a href="#" class="text-indigo-500 hover:text-indigo-600">View Articles</a> */}
                                </div>
                                <div className="">
                                    <ul class="flex space-x-4">
                                        <li>
                                            <a href="#" class="text-gray-400 hover:text-gray-500">
                                                <span class="sr-only">Twitter</span>
                                                <Image
                                                    src={"/img/facebook.svg"}
                                                    width={40}
                                                    height={40}
                                                />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="text-gray-400 hover:text-gray-500">
                                                <span class="sr-only">Instagram</span>
                                                <Image
                                                    src={"/img/facebook.svg"}
                                                    width={40}
                                                    height={40}
                                                />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="text-gray-400 hover:text-gray-500">
                                                <span class="sr-only">LinkedIn</span>
                                                <Image
                                                    src={"/img/facebook.svg"}
                                                    width={40}
                                                    height={40}
                                                />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>



                </div>}
        </AdminLayout>
    )
}