import prisma from "lib/prisma";
import parse from 'html-react-parser'

export async function loadCategoryArticles(param) {
    // Call an external API endpoint to get posts
    console.log("lp", param)

    try {

        let articles = await prisma.article.findMany({
            where: {
                category: {
                    name: param
                }
            },

            include: {
                author: true,
                category: true,

            }

        })

        if (articles) {
            console.log("pdkddkdkdk", param)
            articles.map(x => {

                x.createdAt = Math.floor(x.createdAt / 1000);
                x.createdAt = new Date(x.createdAt).toLocaleDateString()
                return x;
            })
            if (articles.length > 0) {
                articles = articles.reverse()
            }

            return { success: true, data: articles };
        } else {
            return { success: false };
        }
    } catch (err) {

        return { success: false, error: "Something is wrong", tt: err };
    }






}