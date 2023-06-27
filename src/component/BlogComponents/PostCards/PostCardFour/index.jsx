import React from 'react'
import Image from "next/image";
import Link from "next/link";
import placeholder from '../../../../../public/img/ads-placeholder.png'
import { images } from '@/images';
import { TruncateText } from '@/component/Reuseable/TruncateText';


function PostCardFour({ classList = "", data }) {
    console.log("fcb", data)
    return (
        <div className={classList}>
            <Link href={`/category/${data.category.slug}`} className='w-full h-auto '>
                <Image src={data.image ?? images.placeHolder2} alt='article-image' width={700}
                    height={700}
                    style={{
                        width: "100%",
                        height: "auto"
                    }}
                    className='rounded-2xl'
                />

            </Link>
            <Link href={`/category/${data.category.slug}`} className="bg-categoryBackgroundColor px-2 py-0.5 w-fit rounded-lg   text-buttonText text-xs'">{data.category.name}</Link>
            <h2 className='font-bold pr-2'>{data.title}</h2>
            <div className='flex gap-4 text-xs'>
                <Link className='text-linkColor2' href={`/${data.slug}`}>{data.author.user.first_name} {data.author.user.last_name}</Link> <span>{data.published_date}</span>
            </div>
            <p className='pr-1 mb-3'>
                {TruncateText(200, data.body)}
            </p>
            <Link className='text-linkColor2' href={`/${data.slug}`}>
                Readmore
            </Link>

        </div>
    )
}

export default PostCardFour