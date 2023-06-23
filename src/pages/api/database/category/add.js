import prisma from '../../../../../lib/prisma'


async function addCategory(req, res) {
    if (req.method === "POST") {

        const body = req.body

        try {

            const category = await prisma.category.create({
                data: {
                    ...body
                }
            })

            if (category) {
                const categories = await prisma.category.findMany()
                return res.status(201).json({ success: true, data: categories });
            } else {
                return res.status(400).json({ success: false });
            }
        } catch (err) {

            return res.status(500).json({ error: "Something is wrong", tt: err });
        }
    } else {
        res.setHeader("Allow", ["POST"]);
        return res.status(405).json({ error: `Method ${req.method} not allowed` });
    }
};
export default addCategory;