import prisma from '../../../../lib/prisma'


async function addUser(req, res) {
    if (req.method === "POST") {

        const body = req.body
        console.log("Add us", body)
        try {

            const user = await prisma.users.create({
                data: {
                    ...body
                }
            })

            if (user) {
                return res.status(201).json({ success: true });
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
export default addUser;