interface GetPostsByIdProps {
  id: string
}

export const getPostsById = async (id: GetPostsByIdProps) => {
  let data: Response
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let post: any
  try {
    data = await fetch(`http://localhost:3108/posts/${id}`)
    post = await data.json()
    return post
  } catch (error) {
    console.error("Error getting post by id:", error)
  }
}
