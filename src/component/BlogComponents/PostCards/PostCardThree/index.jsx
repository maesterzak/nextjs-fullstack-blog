

export default function PostCardThree({ category, title }) {

    return (
        <div className="w-full mb-4">
            <span className="text-xs">Editors Pick  |  {category}</span>
            <p className="font-bold text-md ">{title}</p>

        </div>
    )
}