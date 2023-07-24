import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import FacebookProvider from 'next-auth/providers/facebook';
import GoogleProvider from 'next-auth/providers/google'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const options: NextAuthOptions = {
    providers: [
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID as string,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: {
                    label: "Email",
                    type: 'email',
                },
                password: {
                    label: 'Password',
                    type: 'password',
                }
            },
            async authorize(credentials) {
                // This is where you need to retrieve user data
                // to verify with credentials
                // https://next-auth.js.org/configuration/providers/credentials
                //database for users i.e. firestore
                const user = { id: '27', email: 'janmarc132@gmail.com', password: 'nextauth'}

                if (credentials?.email === user.email && credentials?.password === user.password) {
                    return user
                } else {
                    return null
                }
            }
        })
    ],
    pages: {
        signIn: '/signIn',
    },
    callbacks: {
        async redirect ({url}) {
            //Allows relative callback URLs
            if (url.includes ('/signIn')) return '/';
            if (!url.includes('/')) return '/signIn';
            return url;
        }
    }

}   