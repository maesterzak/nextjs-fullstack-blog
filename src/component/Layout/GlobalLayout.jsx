import Footer from "../Footer";
import Navbar from "../Navbar";


export default function Layout({ children }) {

    return (
        <div className="container px-2  lg:px-8  mx-auto ">
            <div>
                <Navbar />
            </div>
            <div className=" flex justify-center ">
                <div className="container">
                    {children}
                </div>
            </div>
            <div className=" flex justify-center ">
                <div className="container px-2">
                    <Footer />
                </div>

            </div>
        </div>
    )
}
