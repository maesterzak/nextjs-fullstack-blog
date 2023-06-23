import Footer from "../Footer";
import Navbar from "../Navbar";


export default function Layout({ children }) {

    return (
        <div className="flex flex-col ">
            <div>
                <Navbar />
            </div>
            <div className=" flex justify-center ">
                <div className="lg:container lg:px-8 w-full ">
                    {children}
                </div>
            </div>
            <div className="">
                <div >
                    <Footer />
                </div>

            </div>
        </div>
    )
}
