import prisma from '../../../../../../lib/prisma'




async function getMostViewedArticles(req, res) {
    if (req.method === "GET") {




        try {

            let articles = await prisma.article.findMany({
                orderBy: {
                    views: 'desc'
                }

            })

            if (articles) {
                articles = articles.slice(0, 3)
                articles.map(x => {


                    x.createdAt = new Date(x.createdAt).toLocaleDateString()
                    return x;
                })

                return res.status(200).json({ success: true, data: articles });
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
export default getMostViewedArticles;