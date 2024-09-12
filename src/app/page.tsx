import { SearchIcon } from "lucide-react"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Header from "./_components/Header"
import PostItem from "./_components/Post-item"

const Home = async () => {
  const data = await fetch("http://localhost:3109/posts/admin")
  const posts = await data.json()

  console.log(posts)

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

        <div className="space-y-4 overflow-auto">
          {posts.length > 0 &&
            posts.map((post) => <PostItem key={post.id} post={post} />)}
        </div>
      </div>
    </div>
  )
}

export default Home
