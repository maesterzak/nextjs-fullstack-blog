import parse from "html-react-parser";

export const TruncateText = (length, text) => {
    let data = parse(text.substring(0, length))
    return data

}