"use client"

import Link from "next/link"
import { Button } from "../../_components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../_components/ui/card"
import { Input } from "../../_components/ui/input"
import { Label } from "../../_components/ui/label"

const Login = () => {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <Card className="mx-auto my-20 w-full max-w-md rounded-xl bg-white p-10 shadow-md">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Entrar</CardTitle>
          <CardDescription className="text-center">
            Por favor, digite seu e-mail e senha para entrar.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              type="email"
              placeholder="Digite seu e-mail"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Senha</Label>
            <Input
              id="password"
              type="password"
              placeholder="Digite sua senha"
              required
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-3">
          <Button className="w-full rounded bg-blue-500 py-2 font-bold text-white hover:bg-blue-700">
            Entrar
          </Button>
          <span>
            Não possui uma conta?
            <strong>
              <Link href="/sign-up"> Inscreva-se</Link>
            </strong>
          </span>
        </CardFooter>
      </Card>
    </main>
  )
}

export default Login
