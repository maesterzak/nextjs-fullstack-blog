import { loadArticle } from 'lib/server/loadArticle';
import prisma from '../../../../../../lib/prisma'




async function getArticle(req, res) {

    if (req.method === "GET") {

        let { slug } = req.query


        try {

            let data = await loadArticle(slug)
            return res.status(200).json(data);

        } catch (err) {
            console.log("iiii", err)
            return res.status(500).json({ error: "Something is wrong", tt: err });
        }
    } else {
        res.setHeader("Allow", ["GET"]);
        return res.status(405).json({ error: `Method ${req.method} not allowed` });
    }
};
export default getArticle;