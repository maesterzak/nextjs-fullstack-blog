import { data } from "autoprefixer";
import prisma from "lib/prisma";

export async function loadArticle(param) {
    // Call an external API endpoint to get posts


    try {

        const article = await prisma.article.findUnique({
            where: {
                slug: param
            }
        })
        console.log("vnn", article)
        if (article) {
            let category = await prisma.category.findUnique({
                where: {
                    id: article.categoryId
                }
            })
            let author = await prisma.author.findUnique({
                where: {
                    id: article.authorId
                }
            })
            article['category'] = category
            article['author'] = author
            return { success: true, data: article };
        } else {
            return { success: false };
        }
    } catch (err) {
        console.log("g error", err)
        return { success: false, error: "Something is wrong", tt: err };
    }






}