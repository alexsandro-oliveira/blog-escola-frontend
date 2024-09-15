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
<<<<<<< HEAD
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
=======
        email: {},
        password: {},
>>>>>>> 8e8fd787e2ae023a332b53d274dd01389ea3913c
      },
      async authorize(credentials) {
        if (!credentials) {
          return null
        }
<<<<<<< HEAD

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
=======
        try {
          const response = await fetch("http://localhost:3000/api/auth/signin", {})
        }
>>>>>>> 8e8fd787e2ae023a332b53d274dd01389ea3913c
      },
    }),
  ],
})

export { handler as GET, handler as POST }
