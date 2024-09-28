import { SearchIcon } from "lucide-react"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import PostItem from "./_components/post-item"

const Home = async () => {
  let data: Response
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let posts: any
  try {
    data = await fetch("http://localhost:3108/posts")
    posts = await data.json()
  } catch (error) {
    console.error("Error getting posts:", error)
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

        <div className="space-y-4 overflow-y-auto">
          {posts && posts.length > 0 &&
            posts.map((post: Posts.Post) => (
              <PostItem key={post.id} post={post} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default Home
