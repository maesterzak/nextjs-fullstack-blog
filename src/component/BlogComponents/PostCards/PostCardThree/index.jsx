import Link from "next/link";


export default function PostCardThree({ category, title, slug }) {

    return (
        <div className="w-full mb-4">
            <span className="text-xs">Recent Article  |  {category}</span>
            <br />
            <Link href={`/${slug}`} className="font-bold text-md ">{title}</Link>

        </div>
    )
}