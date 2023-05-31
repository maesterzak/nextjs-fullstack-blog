import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const googleid = process.env.GOOGLE_CLIENT_ID
const googlesecret = process.env.GOOGLE_CLIENT_SECRET
console.log("googl", process.env.GOOGLE_CLIENT_ID, process.env.GOOGLE_CLIENT_SECRET)
export default NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: googleid,//"725114033035-s7rf7m06p71dnuq2qsjhf20ehrc5lhen.apps.googleusercontent.com",//process.env.GOOGLE_CLIENT_ID,
            clientSecret: googlesecret//"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"//process.env.GOOGLE_CLIENT_SECRET,
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