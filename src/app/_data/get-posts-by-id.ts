interface GetPostsByIdProps {
  id: string
}

export const getPostsById = async (id: GetPostsByIdProps) => {
  const data = await fetch(`http://localhost:3108/posts/${id}`)
  const post = await data.json()
  return post
}
