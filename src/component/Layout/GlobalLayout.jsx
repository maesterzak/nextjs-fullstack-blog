import Footer from "../Footer";
import Navbar from "../Navbar";


export default function Layout({ children }) {

    return (
        <div className="lg:container lg:px-40 mx-auto min-h-[100vh]">
            <div>
                <Navbar />
            </div>
            <div className=" flex justify-center min-h-[80vh]">
                <div className="container">
                    {children}
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}
