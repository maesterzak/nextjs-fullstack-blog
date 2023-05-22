import prisma from '../../../../../lib/prisma'




async function getAllArticle(req, res) {
    if (req.method === "GET") {



        try {

            const article = await prisma.article.findMany()

            if (article) {
                return res.status(200).json({ success: true, data: article });
            } else {
                return res.status(404).json({ success: false });
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