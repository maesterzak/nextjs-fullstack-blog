import React from 'react'
import Image from 'next/image'
import { images } from '@/images'
import Link from 'next/link'

function PostCardFive({ data }) {
    return (
        <div className='flex flex-col gap-1'>
            <div>
                <Image
                    src={data.image}
                    width={700}
                    height={700}
                    style={{
                        width: "100%",
                        height: "100%"
                    }}
                />
            </div>
            <div>
                <Link className='text-lg md:text-xl lg:text-xl font-semibold' href={`/${data.slug}`}>{data.title}</Link>
            </div>
            <div>
                <Link href={`/category/${data.category.slug}`} className='text-linkColor text-sm md:text-md lg:text-lg bg-categoryBackgroundColor px-2 py-0.5 rounded-lg '>{data.category.name}</Link>
            </div>
        </div>
    )
}

export default PostCardFive