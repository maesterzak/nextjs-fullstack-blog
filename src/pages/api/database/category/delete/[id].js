import prisma from '../../../../../../lib/prisma'




async function getCategory(req, res) {
    if (req.method === "DELETE") {

        let { id } = req.query


        try {

            const category = await prisma.category.delete({
                where: {
                    id: id
                }
            })

            if (category) {
                const categories = await prisma.category.findMany()
                return res.status(200).json({ success: true, data: categories });
            } else {
                return res.status(400).json({ success: false });
            }
        } catch (err) {
            console.log("err", err)
            return res.status(500).json({ error: "Something is wrong", tt: err });
        }
    } else {
        res.setHeader("Allow", ["DELETE"]);
        return res.status(405).json({ error: `Method ${req.method} not allowed` });
    }
};
export default getCategory;