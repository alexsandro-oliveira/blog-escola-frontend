import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { cookies } from "next/headers"

const handler = NextAuth({
  pages: {
    signIn: "/private/signin",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        if (!credentials) {
          return null
        }

        try {
          const response = await fetch(
            "http://localhost:3108/teachers/signin",
            {
              method: "POST",
              body: JSON.stringify({
                email: credentials?.email,
                password: credentials?.password,
              }),
              headers: {
                "Content-Type": "application/json",
              },
            },
          )

          if (response.status !== 201) return null
          const authData = await response.json()

          cookies().set("jwt", authData.access_token)
          return authData
        } catch (error) {
          console.error(error)
          return null
        }
      },
    }),
  ],
})

export { handler as GET, handler as POST }
