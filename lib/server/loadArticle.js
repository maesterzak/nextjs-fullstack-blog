import { data } from "autoprefixer";
import prisma from "lib/prisma";

export async function loadArticle(param) {
    // Call an external API endpoint to get posts


    try {

        let article = await prisma.article.findUnique({
            where: {
                slug: param
            },
            include: {
                comment: {
                    include: {
                        user: true
                    }
                },
                author: true,
                category: true
            }

        })

        if (article) {
            article.createdAt = new Date(article.createdAt).toLocaleDateString()
            article.comment.map((e) => {

                e.createdAt = new Date(e.createdAt).toLocaleDateString()

                e.user.createdAt = new Date(e.user.createdAt).toLocaleDateString()
                return e
            })

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


            article['similarArticles'] = similarArticles

            return article;
        } else {
            return undefined;
        }
    } catch (err) {
        console.log("fire fi", err)
        return { success: false, error: "Something is wrong", tt: err };
    }






}