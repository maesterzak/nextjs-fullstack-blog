import prisma from "../../../../lib/prisma"

async function updateVote(req, res) {
    if (req.method === "POST") {

        const body = req.body

        try {


            const update = await prisma.vote.update({
                where: {
                    token: body.token,
                },
                data: {
                    ...body
                },
            })




            if (update) {

                return res.status(200).json({ success: true, data: update });
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
export default updateVote;