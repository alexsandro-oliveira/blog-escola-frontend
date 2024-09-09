import { SearchIcon } from "lucide-react"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Header from "./_components/Header"
import Post from "./_components/Post-item"

const Home = () => {
  return (
    <div>
      <Header />
      <div className="p-5">
        <div className="mb-4 flex items-center gap-6">
          <Input placeholder="Faça sua busca" />

          <Button>
            <SearchIcon />
          </Button>
        </div>

        <div className="space-y-4">
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </div>
  )
}

export default Home
