import MainLayout from "@/component/Layout/MainLayout";
import Button1 from "@/component/Reuseable/Buttons/Button1";
import ButtonFour from "@/component/Reuseable/Buttons/Button2";
import ButtonOne from "@/component/Reuseable/Buttons/ButtonOne";
import ButtonTwo from "@/component/Reuseable/Buttons/ButtonTwo";
import { images } from "@/images";
import Image from "next/image";

export default function ContactUsPage() {
    const handleSubmit = () => {

    }

    return (
        <MainLayout>
            <div class="container mx-auto px-4 py-8 lg:px-36 ">
                <div className="grid grid-cols-8 gap-10">
                    <div className="col-span-8 md:col-span-4">
                        <h1 class="text-3xl font-bold mb-4">Contact Us</h1>
                        <p class="text-lg mb-4">We`d love to hear from you! If you have any questions, feedback, or suggestions, please don`t hesitate to get in touch with us.</p>
                        <form onSubmit={handleSubmit} class="max-w-md">
                            <div class="mb-4">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Name</label>
                                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your Name" />
                            </div>
                            <div class="mb-4">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email</label>
                                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your Email" />
                            </div>
                            <div class="mb-4">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="message">Message</label>
                                <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" rows="5" placeholder="Your Message"></textarea>
                            </div>
                            <div>
                                <Button1 text={"Send Message"} classList={"px-7 py-2 w-full border-2 border-primaryColor flex justify-center items-center"} />
                            </div>
                            {/* <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Submit</button> */}
                        </form>
                    </div>

                    <div className="col-span-8 md:col-span-4 hidden md:block">
                        <Image
                            src={images.placeHolder2}
                            className={"w-full h-full"}
                        />

                    </div>
                </div>
            </div>
        </MainLayout>
    )
} 