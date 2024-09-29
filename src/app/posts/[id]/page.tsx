import PostSearch from "@/app/_components/post-search"
import PostNotFound from "@/app/_components/post-not-found"

const PostPage = async ({ params }: { params: Posts.PostId }) => {
  let data: Response
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let post: any
  try {
    data = await fetch(`http://localhost:3108/posts/${params.id}`)
    post = await data.json()
  } catch (error) {
    console.error("Error getting post by id:", error)
  }

  return (
    <>
      {post && post._id ? (
        <div className="mb-8">
          <PostSearch key={post.id} post={post} />
        </div>
      ) : (
        <PostNotFound />
      )}
    </>
  )
}

export default PostPage
