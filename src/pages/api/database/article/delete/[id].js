import prisma from '../../../../../../lib/prisma'




async function deleteArticle(req, res) {
    if (req.method === "DELETE") {

        let { id } = req.query
        console.log("nnm", id)
        // id = parseInt(id)
        try {

            const article = await prisma.article.delete({
                where: {
                    id: id
                }
            })

            if (article) {
                const articles = await prisma.article.findMany()
                return res.status(200).json({ success: true, data: articles });
            } else {
                return res.status(400).json({ success: false });
            }
        } catch (err) {
            console.log("g error", err)
            return res.status(500).json({ error: "Something is wrong", tt: err });
        }
    } else {
        res.setHeader("Allow", ["DELETE"]);
        return res.status(405).json({ error: `Method ${req.method} not allowed` });
    }
};
export default deleteArticle;