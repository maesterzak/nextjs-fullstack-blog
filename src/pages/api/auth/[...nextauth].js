import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: '184157599268-cuq0a8d7p7j7iuom22valcsi2bh339da.apps.googleusercontent.com',
            clientSecret: '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',
        }),
    ],




    callbacks: {
        jwt: async ({ token, user }) => {

            if (user) {

                token.id = user.id;
                token.email = user.email;


            }

            return token;
        },
        session: async ({ session, token, user }) => {
            if (token) {
                session.id = token.id;

            }
            let auth = await prisma.user.findUnique({
                where: {
                    id: user.id
                },
                include: {
                    author: true
                }
            })

            session.user['id'] = user.id
            if (auth.author.length > 0) {

                session.user['role'] = 'author'
                session.user['author'] = auth.author[0].id
            }
            else {
                session.user['role'] = 'user'

            }


            return session;
        },
        async redirect({ url, baseUrl }) {
            return "/";
        },
    },
});