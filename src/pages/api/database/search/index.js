import { apiUrl } from "utils"



async function searchArticle(req, res) {

    if (req.method === "GET") {

        let q = req.query


        try {

            let backendRes = await fetch(apiUrl + `search?q=${q.q}&page=${q.page}`)
            let response = await backendRes.json()

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
export default searchArticle;