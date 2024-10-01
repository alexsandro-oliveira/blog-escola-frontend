import PostNotFound from "@/app/_components/post-not-found"
import UpdatePostForm from "@/app/_components/UpdatePostForm"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

const UpdatePost = async ({ searchParams }: Posts.Search) => {
  const session = await getServerSession()

  if (!session) {
    redirect("/")
  }

  let data: Response
  let post: PostsAdmin.PostAdmin | null = null

try {
  data = await fetch(`http://localhost:3108/posts/${searchParams.id}`)
  post = await data.json()
} catch (error) {
  console.error("Error getting post by id:", error)
}

return (
  <>
    {post ? (
      <div>
        <div className="p-5">
          <UpdatePostForm post={post} />
        </div>
      </div>
    ) : (
      <PostNotFound />
    )}
  </>
)

}

export default UpdatePost
