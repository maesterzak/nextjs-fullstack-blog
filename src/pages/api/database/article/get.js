import { apiUrl } from "utils";




async function getAllArticle(req, res) {

    if (req.method === "GET") {
        res.setHeader('Cache-Control', 's-maxage=3000')

        let url = req.query
        console.log("fccc", url)
        try {

            let res = await fetch(apiUrl + "articles/")
            let response = await res.json()

            if (res.status == 200) {
                return res.status(200).json({ success: true, data: response });
            } else {
                return res.status(res.status).json({ success: false });
            }
        } catch (err) {

            return res.status(500).json({ error: "Something is wrong", tt: err });
        }
    } else {
        res.setHeader("Allow", ["GET"]);
        return res.status(405).json({ error: `Method ${req.method} not allowed` });
    }
};
export default getAllArticle;