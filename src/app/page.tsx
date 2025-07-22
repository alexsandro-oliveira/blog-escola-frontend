import { SearchComponent } from "./_components/SearchComponent"
import PostItem from "./_components/post-item"

const Home = async () => {
  const data = await fetch("http://localhost:3108/posts", { cache: "no-store" })
  const posts = await data.json()

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
