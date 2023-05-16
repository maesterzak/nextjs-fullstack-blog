import prisma from '../../../../../lib/prisma'


async function addArticle(req, res) {
    if (req.method === "POST") {

        const body = req.body
        console.log("Addii launchpad", body)
        try {

            const article = await prisma.article.create({
                data: {
                    ...body
                }
            })

            if (article) {
                return res.status(201).json({ success: true });
            } else {
                return res.status(400).json({ success: false });
            }
        } catch (err) {
            console.log("cc", err)
            return res.status(500).json({ error: "Something is wrong", tt: err });
        }
    } else {
        res.setHeader("Allow", ["POST"]);
        return res.status(405).json({ error: `Method ${req.method} not allowed` });
    }
};
export default addArticle;