import PostSearch from "@/app/_components/post-search"
import PostNotFound from "@/app/_components/post-not-found"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

const PostPage = async ({ searchParams }: Posts.Search) => {
  const session = await getServerSession()
  if (!session) {
    redirect("/")
  }

  let data: Response
  let posts: PostsAdmin.PostAdmin[] = []
  try {
    data = await fetch(`http://localhost:3108/posts/search?keyword=${searchParams.search}`, {
      cache: "no-store",
    })
    posts = await data.json()
  } catch (error) {
    console.error("Error getting post by id:", error)
  }

  return (
    <>
      {posts && posts.length ? (
        <div className="mb-8">
          {posts.map((item: PostsAdmin.PostAdmin) => (
            <PostSearch key={item._id} post={item} />
          ))}
        </div>
      ) : (
        <PostNotFound />
      )}
    </>
  )
}

export default PostPage
