import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

const TeacherPage = async () => {
  const session = await getServerSession()

  if (!session) {
    redirect("/")
  }
  return (
    <div>
      <div>Olá, {session?.user?.name}</div>
    </div>
  )
}

export default TeacherPage
