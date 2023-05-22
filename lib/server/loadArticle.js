import { data } from "autoprefixer";
import prisma from "lib/prisma";

export async function loadArticle(param) {
    // Call an external API endpoint to get posts


    try {

        let article = await prisma.article.findUnique({
            where: {
                slug: param
            },
        })

        if (article) {
            article.createdAt = new Date(article.createdAt).toLocaleDateString()
            await prisma.article.update({
                where: {
                    slug: param
                },

                data: {
                    views: article.views + 1
                }
            })
            let similarArticles = await prisma.article.findMany({
                where: {
                    categoryId: article.categoryId,
                    id: {
                        not: {
                            equals: article.id
                        }
                    }
                }

            })
            const shuffled = similarArticles.sort(() => 0.5 - Math.random());
            similarArticles = shuffled.slice(0, 3)
            similarArticles.map(x => {
                x.createdAt = new Date(x.createdAt).toLocaleDateString()
                return x;
            })

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
            article['similarArticles'] = similarArticles

            return { success: true, data: article };
        } else {
            return { success: false };
        }
    } catch (err) {

        return { success: false, error: "Something is wrong", tt: err };
    }






}