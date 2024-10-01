import { SearchComponent } from "../app/posts/search/SearchComponent"
import PostItem from "./_components/post-item"

const Home = async () => {
  let data: Response
  let posts: Posts.Post[] = []

  try {
    data = await fetch("http://localhost:3108/posts", { cache: "no-store" })
    posts = await data.json()
  } catch (error) {
    console.error("Error getting posts:", error)
  }

  return (
    <div className="w-full">
      <div className="p-5 lg:px-24">
        <SearchComponent />
        <div className="space-y-4 overflow-y-auto">
          {posts &&
            posts.length > 0 &&
            posts.map((post: Posts.Post) => (
              <PostItem key={post.id} post={post} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default Home
