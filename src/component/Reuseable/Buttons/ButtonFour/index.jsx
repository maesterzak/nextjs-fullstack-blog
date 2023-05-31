export default function ButtonFour({ text, type, onClickHandler, }) {

    return (
        <button onClick={onClickHandler} type={type} className="items-center px-4 py-2 mr-3 w-full flex justify-center bg-secondaryBackground hover:bg-primaryBackground text-secondLink hover:text-link text-sm font-medium  bg-transparent border-2 border-link rounded-lg ">

            {text}
        </button>
    )
}