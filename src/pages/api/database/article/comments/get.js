import prisma from '../../../../../../lib/prisma'




async function getComments(req, res) {
    if (req.method === "GET") {



        try {

            const comments = await prisma.comments.findMany()

            if (comments) {
                return res.status(200).json({ success: true, data: comments });
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
export default getComments;