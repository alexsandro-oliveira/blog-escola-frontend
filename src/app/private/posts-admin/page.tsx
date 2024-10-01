import PostItemAdmin from "@/app/_components/post-item-admin"
import { Button } from "@/app/_components/ui/button"
import { Input } from "@/app/_components/ui/input"
import { fetchServer } from "@/app/_lib/fetchServer"
import { SearchIcon } from "lucide-react"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

const PostsAdmin = async () => {
  const session = await getServerSession()
  if (!session?.user) {
    redirect("/")
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let posts: any
  try {
    const data = await fetchServer("http://localhost:3108/posts/admin", {
      cache: "no-store",
    })
    if (data.status !== 200) return { error: data.statusText }
    posts = await data.json()
  } catch (error) {
    console.error("Error fetching posts:", error)
    return { error: "Failed to fetch posts" }
  }

  return (
    <div className="w-full">
      <div className="p-5 lg:px-24">
        <div className="mb-4 flex items-center gap-6">
          <Input placeholder="Faça sua busca" />

          <Button>
            <SearchIcon />
          </Button>
        </div>

        <div className="space-y-4 overflow-auto">
          {posts &&
            posts.length > 0 &&
            posts.map((post: PostsAdmin.PostAdmin) => (
              <PostItemAdmin key={post._id} post={post} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default PostsAdmin
