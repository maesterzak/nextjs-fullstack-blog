import prisma from '../../../../../../lib/prisma'




async function getCategory(req, res) {
    if (req.method === "GET") {

        let { id } = req.query
        console.log("nnm", id)

        try {

            const articles = await prisma.category.findMany({
                where: {
                    categoryId: id
                }
            })
            console.log("vnn", article)
            if (articles) {
                return res.status(200).json({ success: true, data: articles });
            } else {
                return res.status(404).json({ success: false });
            }
        } catch (err) {
            console.log("g error", err)
            return res.status(500).json({ error: "Something is wrong", tt: err });
        }
    } else {
        res.setHeader("Allow", ["GET"]);
        return res.status(405).json({ error: `Method ${req.method} not allowed` });
    }
};
export default getCategory;