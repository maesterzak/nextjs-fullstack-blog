export default function ButtonTwo({ text, type, onClickHandler, classList = "" }) {

    return (
        <button type={type} className={classList}>
            {text}
        </button>
    )
}