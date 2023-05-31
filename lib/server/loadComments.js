import prisma from "lib/prisma";
import parse from 'html-react-parser'

export async function loadComments() {
    // Call an external API endpoint to get posts


    try {

        let comments = await prisma.comment.findMany({


            include: {
                user: true,
                article: true

            }

        })

        if (comments) {
            comments.map(x => {


                x.createdAt = new Date(x.createdAt).toLocaleDateString()
                x.user.createdAt = new Date(x.user.createdAt).toLocaleDateString()
                x.article.createdAt = new Date(x.article.createdAt).toLocaleDateString()
                return x;
            })
            comments = comments.reverse()

            return { success: true, data: comments };
        } else {
            return { success: false };
        }
    } catch (err) {
        console.log("g error", err)
        return { success: false, error: "Something is wrong", tt: err };
    }






}