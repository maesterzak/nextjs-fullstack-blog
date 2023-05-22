import prisma from '../../../../../../lib/prisma'


async function addComment(req, res) {
    if (req.method === "POST") {

        const body = req.body

        try {

            const comment = await prisma.comment.create({
                data: {
                    ...body
                }
            })

            if (comment) {
                return res.status(201).json({ success: true, data: comment });
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
export default addComment;