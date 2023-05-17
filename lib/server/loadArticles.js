import prisma from "lib/prisma";

export async function loadArticles() {
    // Call an external API endpoint to get posts

    try {

        const articles = await prisma.article.findMany({
            include: {
                author: true,
                category: true
            }

        })

        if (articles) {
            return { success: true, data: articles };
        } else {
            return { success: false };
        }
    } catch (err) {
        console.log("g error", err)
        return { success: false, error: "Something is wrong", tt: err };
    }






}