import Link from "next/link"
import { Avatar, AvatarImage } from "./ui/avatar"
import { Card, CardContent } from "./ui/card"

interface PostItemProps {
  post: {
    _id: string
    title: string
    author: string
    content: string
  }
}

const PostItem = async ({ post }: PostItemProps) => {
  const objectId = post._id
  const id = objectId.toString()

  return (
    <Card className="min-w-[167px] rounded-2xl">
      <CardContent>
        <header className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="User avatar"
              />
            </Avatar>
            <h1>{post.author}</h1>
          </div>
          <time
            className="text-xs"
            title="07 de Setembro de 2024"
            dateTime="2024-09-07 22:15:00"
          >
            Publicado há 1h
          </time>
        </header>

        <div className="mt-8">
          <Link href={`/posts/${id}`}>
            <p className="mb-4">{post.title}</p>
            <p className="line-clamp-2 text-xs">{post.content}</p>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

export default PostItem
