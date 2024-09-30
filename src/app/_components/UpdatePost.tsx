import UpdatePostForm from "@/app/_components/UpdatePostForm"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

const UpdatePost = async ({ id }: { id: PostsAdmin.PostPageProps }) => {
  const session = await getServerSession()

  if (!session) {
    redirect("/")
  }

  let data: Response
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let post: any
  try {
    data = await fetch(`http://localhost:3108/posts/${id._id}`)
    post = await data.json()
  } catch (error) {
    console.error("Error getting post by id:", error)
  }

  console.log(post)
  return (
    <div>
      <div className="p-5">
        <UpdatePostForm />
      </div>
    </div>
  )
}

export default UpdatePost
