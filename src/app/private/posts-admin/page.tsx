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

  const data = await fetchServer("http://localhost:3108/posts/admin")
  if (data.status !== 200) return { error: data.statusText }
  const posts = await data.json()

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
          {posts.length > 0 &&
            posts.map((post: PostsAdmin.PostAdmin) => (
              <PostItemAdmin key={post._id} post={post} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default PostsAdmin
