import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { NewPostForm } from "@/app/_components/NewPostForm"

const TeacherPage = async () => {
  const session = await getServerSession()

  if (!session) {
    redirect("/")
  }
  return (
    <div>
      <div className="p-5">
        <NewPostForm />
      </div>
    </div>
  )
}

export default TeacherPage
