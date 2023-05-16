import prisma from '../../../../lib/prisma'




async function getVote(req, res) {
    if (req.method === "POST") {

        const body = req.body


        try {

            const Vote = await prisma.vote.findUnique({
                where: {
                    token: body.token
                }
            })

            if (Vote) {
                return res.status(200).json({ success: true, data: Vote });
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
export default getVote;