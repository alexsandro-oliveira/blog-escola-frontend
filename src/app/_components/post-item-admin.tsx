import Link from "next/link"
import { Avatar, AvatarImage } from "./ui/avatar"
import { Card, CardContent } from "./ui/card"

interface PostAdminProps {
  post: PostsAdmin.PostAdmin
}

const PostItemAdmin = async ({ post }: PostAdminProps) => {
  return (
    <Card className="min-w-[167px] rounded-2xl">
      <Link href={`/posts/${post._id}`}>
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
            <p className="mb-4">{post.title}</p>
            <p className="line-clamp-2 text-xs">{post.content}</p>
          </div>
        </CardContent>
      </Link>
    </Card>
  )
}

export default PostItemAdmin
