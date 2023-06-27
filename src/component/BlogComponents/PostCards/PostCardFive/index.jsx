import React from 'react'
import Image from 'next/image'
import { images } from '@/images'
import Link from 'next/link'

function PostCardFive({ data }) {
    return (
        <div className='flex flex-col gap-5'>
            <Link href={`/${data.slug}`}>
                <Image
                    src={data.image}
                    width={700}
                    height={700}
                    style={{
                        width: "100%",
                        height: "100%"

                    }}
                    className='rounded-2xl'
                />
            </Link>
            <div>
                <Link className='text-lg md:text-xl lg:text-xl font-semibold' href={`/${data.slug}`}>{data.title}</Link>
            </div>
            <div>
                <Link href={`/category/${data.category.slug}`} className=' text-sm md:text-md lg:text-lg   py-0.5 rounded-lg text-linkColor2'>{data.category.name}</Link>
            </div>
        </div>
    )
}

export default PostCardFive