"use client"

import { SessionProvider } from "next-auth/react"
import { Suspense, type ReactNode } from "react"

const AuthProvider = ({ children }: { children: ReactNode }) => {
  return (
    <SessionProvider>
      <Suspense fallback={null}>{children}</Suspense>
    </SessionProvider>
  )
}

export default AuthProvider
