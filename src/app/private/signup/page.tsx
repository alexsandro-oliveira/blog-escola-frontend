import { getServerSession } from "next-auth"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../_components/ui/card"

import SignupForm from "@/app/_components/SignupForm"
import { redirect } from "next/navigation"

const SignUp = async () => {
  const session = await getServerSession()

  if (!session) {
    redirect("/")
  }
  return (
    <main className="flex min-h-screen items-center justify-center">
      <Card className="mx-auto my-20 w-[90%] max-w-md rounded-xl p-10 shadow-md">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Cadastrar</CardTitle>
          <CardDescription className="text-center">
            Por favor, preencha os dados abaixo.
          </CardDescription>
        </CardHeader>
        <SignupForm />
      </Card>
    </main>
  )
}

export default SignUp
