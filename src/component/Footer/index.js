import Image from 'next/image'
import Link from 'next/link'
import styles from './styles.module.css'
export default function Footer() {

    return (
        <>

            <footer className="p-4 border-t-4 bg-thirdBackground text-secondLink shadow md:px-6 md:py-8 ">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link href="#" className="flex items-center mb-4 sm:mb-0 text-secondLink ">
                        <div className='relative h-14 w-14'>
                            {/* <Image src="https://flowbite.com/docs/images/logo.svg" layout='fill' className="h-8 mr-3" alt="Flowbite Logo" /> */}
                        </div>
                        <span className='text-6xl site-name'>Quno</span>
                    </Link>
                    <ul className="flex flex-wrap items-center mb-6 text-sm text-[#505050] sm:mb-0">
                        <li>
                            <a href="#" className="mr-4 hover:underline text-secondLink  md:mr-6 ">About</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline text-secondLink md:mr-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline text-secondLink md:mr-6 ">Licensing</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline text-secondLink">Contact</a>
                        </li>
                    </ul>
                </div>

            </footer>

        </>
    )
}