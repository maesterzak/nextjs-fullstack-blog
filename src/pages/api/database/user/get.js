import prisma from '../../../../lib/prisma'




async function getUser(req, res) {
    if (req.method === "POST") {

        const body = req.body
        console.log("nnm", body)

        try {

            const user = await prisma.users.findUnique({
                where: {
                    address: body.address
                }
            })
            console.log("vnn", user)
            if (user) {
                return res.status(200).json({ success: true, data: user });
            } else {
                return res.status(404).json({ success: false });
            }
        } catch (err) {
            console.log("g error", err)
            return res.status(500).json({ error: "Something is wrong", tt: err });
        }
    } else {
        res.setHeader("Allow", ["POST"]);
        return res.status(405).json({ error: `Method ${req.method} not allowed` });
    }
};
export default getUser;