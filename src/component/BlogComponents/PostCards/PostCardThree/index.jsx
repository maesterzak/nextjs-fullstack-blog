

export default function PostCardThree({ category, title }) {

    return (
        <div className="w-full mb-4">
            <span className="text-xs">Editors Pick  |  {category}</span>
            <h3 className="font-bold text-md">{title}</h3>

        </div>
    )
}