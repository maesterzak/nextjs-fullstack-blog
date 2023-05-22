import prisma from "lib/prisma";

export async function loadCategories() {
    // Call an external API endpoint to get posts

    try {

        const cartegories = await prisma.category.findMany({

        })

        if (cartegories) {

            return { success: true, data: cartegories };
        } else {
            return { success: false };
        }
    } catch (err) {

        return { success: false, error: "Something is wrong", tt: err };
    }






}