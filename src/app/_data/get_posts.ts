"use server"

interface PostProps {
  title: string
  content: string
  author: string
}

export async function getStaticProps(): Promise<PostProps[]> {
  const response = await fetch("")
  const data = await response.json()

  return data
}
