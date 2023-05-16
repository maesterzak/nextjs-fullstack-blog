import prisma from '../../../../../lib/prisma'




async function getAllCategories(req, res) {
    if (req.method === "GET") {

        // let { id } = req.query
        console.log("nnm", id)

        try {

            const cartegories = await prisma.category.findMany({

            })
            console.log("vnn", cartegories)
            if (cartegories) {
                return res.status(200).json({ success: true, data: cartegories });
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
export default getAllCategories;