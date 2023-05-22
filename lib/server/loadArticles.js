import prisma from "lib/prisma";
import parse from 'html-react-parser'

export async function loadArticles() {
    // Call an external API endpoint to get posts

    try {

        let articles = await prisma.article.findMany({

            include: {
                author: true,
                category: true,

            }

        })

        if (articles) {
            articles.map(x => {

                x.createdAt = Math.floor(x.createdAt / 1000);
                x.createdAt = new Date(x.createdAt).toLocaleDateString()
                return x;
            })
            articles = articles.reverse()
            return { success: true, data: articles };
        } else {
            return { success: false };
        }
    } catch (err) {

        return { success: false, error: "Something is wrong", tt: err };
    }






}