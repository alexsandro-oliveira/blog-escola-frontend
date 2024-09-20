"use client"

import { signIn } from "next-auth/react"

import Link from "next/link"
import { Button } from "./ui/button"
import { CardContent, CardFooter } from "./ui/card"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { useSearchParams } from "next/navigation"

export default function SigninForm() {
  const searchParams = useSearchParams()

  const error = searchParams.get("error")

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    }

    signIn("credentials", {
      ...data,
      callbackUrl: "/",
    })
  }

  return (
    <form onSubmit={handleLogin}>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">E-mail</Label>
          <Input
            name="email"
            id="email"
            type="email"
            placeholder="Digite seu e-mail"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Senha</Label>
          <Input
            name="password"
            id="password"
            type="password"
            placeholder="Digite sua senha"
            required
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-3">
        <div className="flex w-full justify-between gap-4">
          <Button className="w-full" variant="outline" asChild>
            <Link href="/">Voltar</Link>
          </Button>
          <Button className="w-full" type="submit">
            Entrar
          </Button>
        </div>
        {error === "CredentialsSignin" && (
          <p className="text-center text-destructive">
            Credenciais inválidas, tente novamente.
          </p>
        )}
      </CardFooter>
    </form>
  )
}
