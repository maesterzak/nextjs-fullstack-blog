

export default function ButtonOne({ text, type }) {

    return (
        <button type={type} className="inline-flex items-center px-4 py-2 mr-3 text-secondLink text-sm font-medium  bg-secondaryBackground border border-gray-300 rounded-lg text-white">

            {text}
        </button>
    )
}