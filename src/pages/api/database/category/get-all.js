import prisma from '../../../../../lib/prisma'




async function getAllCategories(req, res) {

    if (req.method === "GET") {


        try {

            const cartegories = await prisma.category.findMany({

            })

            if (cartegories) {
                return res.status(200).json({ success: true, data: cartegories });
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
export default getAllCategories;