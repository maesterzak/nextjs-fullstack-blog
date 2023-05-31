import MainLayout from "@/component/Layout/MainLayout";
import ButtonFour from "@/component/Reuseable/Buttons/ButtonFour";


export default function ContactUsPage() {
    const handleSubmit = () => {

    }

    return (
        <MainLayout>
            <div class=" mx-auto px-4 py-8 ">
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
                    <ButtonFour text={"Submit"} type={"submit"} />
                    {/* <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Submit</button> */}
                </form>
            </div>
        </MainLayout>
    )
} 