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
                <span className='text-linkColor2 text-sm md:text-md lg:text-lg'>{data.category.name}</span>
            </div>
        </div>
    )
}

export default PostCardFive