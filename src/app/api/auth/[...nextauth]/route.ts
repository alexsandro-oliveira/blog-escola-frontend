import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
  pages: {
    signIn: "/signin",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) {
          return null
        }

        if (
          credentials.email === "admin@email.com" &&
          credentials.password === "123"
        ) {
          return {
            id: 1,
            name: "Admin",
            email: "admin",
          }
        }
        return null
      },
    }),
  ],
})

export { handler as GET, handler as POST }
