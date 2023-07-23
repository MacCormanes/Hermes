import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { options } from "./options"

const handler = NextAuth(options)

export { handler as GET, handler as POST}