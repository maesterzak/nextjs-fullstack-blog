import { apiUrl } from "utils"



async function getCategoryArticles(req, res) {

    if (req.method === "GET") {
        res.setHeader('Cache-Control', 's-maxage=3000')

        let { slug } = req.query
        console.log("slug", slug)
        try {

            let backendRes = await fetch(apiUrl + `category-posts/${slug}`)
            let response = await backendRes.json()
            console.log("vgb", response)
            if (backendRes.status == 200) {
                return res.status(200).json(response);
            } else {
                return res.status(backendRes.status).json({ success: false });
            }
        } catch (err) {
            console.log("eddd", err)
            return res.status(500).json({ error: "Something is wrong", tt: err });
        }
    } else {
        res.setHeader("Allow", ["GET"]);
        return res.status(405).json({ error: `Method ${req.method} not allowed` });
    }
};
export default getCategoryArticles;