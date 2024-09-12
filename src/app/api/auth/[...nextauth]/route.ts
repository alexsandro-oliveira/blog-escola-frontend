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
        email: {},
        password: {},
      },
      async authorize(credentials) {
        if (!credentials) {
          return null
        }
        try {
          const response = await fetch("http://localhost:3000/api/auth/signin", {})
        }
      },
    }),
  ],
})

export { handler as GET, handler as POST }
