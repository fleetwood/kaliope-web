import { Profile, User } from "@prisma/client"
import NextAuth, { DefaultSession } from "next-auth"

declare module "next-auth" {
  interface Session {
    user: User & DefaultSession["user"]
    proffile: Profile & DefaultSession["profile"]
  }
}