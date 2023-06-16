import Image from 'next/image'
import Link from 'next/link'
import styles from './styles.module.css'
import ButtonOne from '../Reuseable/Buttons/ButtonOne'
import Button1 from '../Reuseable/Buttons/Button1'
import { images } from '@/images'
export default function Footer() {

    return (
        <>

            <footer className='lg:h-24 w-full lg:mb-12  md:px-5 lg:container mx-auto text-sm md:text-md flex-col gap-10'>
                <div className='bg-thirdBackground p-5 md:p-10 grid grid-cols-8 border-2 border-primaryColor'>
                    <div className='col-span-8 md:col-span-1 flex justify-center items-start'>
                        <Image
                            src={images.telegramIcon}
                            className='w-12'
                        />

                    </div>
                    <div className='col-span-8 md:col-span-7 flex flex-col gap-2 lg:flex-row lg:items-end'>
                        <div className='flex flex-col gap-2'>
                            <h2 className='text-center md:text-start'>
                                Sign up for our newsletters</h2>
                            <span className='text-center md:text-start'>The best of Business news, in your inbox.</span>
                        </div>
                        <div className='flex flex-col md:flex-row gap-3 mt-5 w-full h-fit '>
                            <input className='w-full' placeholder='Email address' />
                            <Button1 text={"Subscribe"} classList={"px-7 py-2 border-2 border-primaryColor flex justify-center items-center"} />
                        </div>
                    </div>


                </div>
                <div className='grid grid-cols-4 gap-5 mt-10'>
                    <div className='col-span-4 md:col-span-1 lg:col-span-1 flex flex-col gap-5'>
                        <h2 className='text-2xl font-semibold text-center md:text-start'>About</h2>
                        <p className='flex text-center md:text-start'>
                            Turpis erat tincidunt et viverra id nunc molestie et faucibus diam, proin lectus aliquam mattis ac nunc elementum accumsan libero.
                        </p>

                    </div>
                    <div className='col-span-4 md:col-span-1 lg:col-span-1 flex flex-col items-center gap-5'>
                        <h2 className='text-2xl font-semibold'>Company</h2>
                        <ul className='text-md'>
                            <li><Link href={"/"}>About Us</Link></li>
                            <li><Link href={"/"}>Contact Us</Link></li>
                            <li><Link href={"/"}>Our Team Us</Link></li>
                            <li><Link href={"/"}>Advertise</Link></li>
                        </ul>

                    </div>

                    <div className='col-span-4 md:col-span-1 lg:col-span-1 flex flex-col items-center md:items-start gap-5'>
                        <h2 className='text-2xl font-semibold'>Legal</h2>
                        <ul className='text-md'>
                            <li><Link href={"/"}>Privacy Policy</Link></li>
                            <li><Link href={"/"}>Terms of Service</Link></li>
                            <li><Link href={"/"}>Code of Conduct</Link></li>
                            <li><Link href={"/"}>Advertise</Link></li>
                        </ul>

                    </div>

                    <div className='col-span-4 md:col-span-1 lg:col-span-1 flex flex-col items-center gap-5'>
                        <h2 className='text-2xl font-semibold'>Follow Us</h2>
                        <ul className='text-md'>
                            <li><Link href={"/"}>Facebook</Link></li>
                            <li><Link href={"/"}>Twitter</Link></li>
                            <li><Link href={"/"}>YouTubr</Link></li>

                        </ul>

                    </div>

                </div>
                <div className='flex flex-col md:flex-row justify-center md:justify-between text-sm items-center mt-20 mb-10 gap-3'>
                    <span>Copyright 2023 Info Blog</span>
                    <span>Powered By Devmaesters</span>

                </div>



            </footer>
        </>
    )
}