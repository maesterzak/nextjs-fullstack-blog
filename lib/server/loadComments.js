import prisma from "lib/prisma";
import parse from 'html-react-parser'

export async function loadComments(param) {
    // Call an external API endpoint to get posts
    console.log("tryouts", param)

    try {

        let comments = await prisma.comment.findMany({
            // where: {

            //     article: {
            //         equals: param
            //     }
            // },

            include: {
                user: true

            }

        })

        if (comments) {
            comments.map(x => {


                x.createdAt = new Date(x.createdAt).toLocaleDateString()
                x.user.createdAt = new Date(x.user.createdAt).toLocaleDateString()
                return x;
            })
            comments = comments.reverse()
            console.log("op", comments)
            return { success: true, data: comments };
        } else {
            return { success: false };
        }
    } catch (err) {
        console.log("g error", err)
        return { success: false, error: "Something is wrong", tt: err };
    }






}