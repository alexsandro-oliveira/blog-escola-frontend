import { SearchIcon } from "lucide-react"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import PostItem from "./_components/post-item"
import Header from "@/app/_components/header"
import { Footer } from "./_components/Footer"

const Home = async () => {
  const data = await fetch("http://localhost:3108/posts")
  const posts = await data.json()

  return (
    <div className="w-full">
      <Header />
      <div className="p-5">
        <div className="mb-4 flex items-center gap-6">
          <Input placeholder="Faça sua busca" />

          <Button>
            <SearchIcon />
          </Button>
        </div>

        <div className="space-y-4 overflow-y-auto">
          {posts.length > 0 &&
            posts.map((post: Posts.Post) => (
              <PostItem key={post.id} post={post} />
            ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
