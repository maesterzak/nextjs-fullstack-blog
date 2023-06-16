export default function Button2({ text, type, onClickHandler, classList = "" }) {

    return (
        <button onClick={onClickHandler} type={type} className={classList}>

            {text}
        </button>
    )
}