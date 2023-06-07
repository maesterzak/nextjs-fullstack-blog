import React from 'react'
import Image from "next/image";
import Link from "next/link";
import placeholder from '../../../../../public/img/ads-placeholder.png'
import { images } from '@/images';


function PostCardFour({ className = "" }) {
    return (
        <div className={className}>
            <Link href={"/"} className='w-full h-auto'>
                <Image src={images.placeHolder2} className='w-full h-full' alt='article-image' />

            </Link>
            <Link className='text-linkColor2 text-xs' href={"/"}>Stock Market</Link>
            <h3 className='font-bold text-xl pr-2'>What Your Relationship With Stock Market Says About You</h3>
            <div className='flex gap-4 text-xs'>
                <span>maesterzak</span> <span>June 30, 2023</span>
            </div>
            <p className='pr-1'>
                Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet …
            </p>

        </div>
    )
}

export default PostCardFour