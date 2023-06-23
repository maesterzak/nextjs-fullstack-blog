import React from 'react'
import Image from 'next/image'
import { images } from '@/images'
import Link from 'next/link'

function PostCardFive() {
    return (
        <div className='flex flex-col gap-1'>
            <div>
                <Image
                    src={images.placeHolder3}
                    className='w-full'
                />
            </div>
            <div>
                <Link className='text-lg md:text-xl lg:text-xl font-semibold' href={"/"}>8 Surprising Ways Politics Can Affect You</Link>
            </div>
            <div>
                <span className='text-linkColor2 text-sm md:text-md lg:text-lg'>Politics</span>
            </div>
        </div>
    )
}

export default PostCardFive