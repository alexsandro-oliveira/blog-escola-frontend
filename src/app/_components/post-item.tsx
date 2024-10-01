import Link from "next/link"
import { Avatar, AvatarImage } from "./ui/avatar"
import { Card, CardContent } from "./ui/card"
import { formatDistance } from "date-fns"
import { ptBR } from "date-fns/locale"
import { format } from "date-fns"

const PostItem = async ({ post }: { post: Posts.Post }) => {
  return (
    <Card className="min-w-[167px] rounded-2xl">
      <Link href={`/posts/${post.id}`}>
        <CardContent>
          <header className="mt-3 flex items-center justify-between">
            <div className="flex items-center">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="User avatar"
                  className="h-8 w-8 rounded-full"
                />
              </Avatar>
              <h1 className="text-xs">{post.author}</h1>
            </div>
            <time
              className="text-xs"
              title={format(
                new Date(post.createdAt),
                "dd 'de' MMMM 'de' yyyy",
                { locale: ptBR },
              )}
              dateTime={post.createdAt.toString()}
            >
              {formatDistance(new Date(), new Date(post.createdAt), {
                locale: ptBR,
              })}{" "}
              atrás
            </time>
          </header>

          <div className="mt-8">
            <p className="mb-4 font-bold">{post.title}</p>
            <p className="line-clamp-2 text-xs">{post.content}</p>
          </div>
        </CardContent>
      </Link>
    </Card>
  )
}

export default PostItem
