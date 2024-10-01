import Link from "next/link"
import { Avatar, AvatarImage } from "./ui/avatar"
import { Card, CardContent } from "./ui/card"
import { format, formatDistance } from "date-fns"
import { ptBR } from "date-fns/locale"
import { ButtonDelete } from "./ButtonDelete"
import { ButtonUpdate } from "./ButtonUpdate"

const PostItemAdmin = async ({ post }: { post: PostsAdmin.PostAdmin }) => {
  return (
    <Card className="min-w-[167px] rounded-2xl">
      <Link href={`/posts/${post._id}`}>
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
            <p className="line-clamp-2 truncate text-xs">{post.content}</p>
          </div>
        </CardContent>
      </Link>
      <div className="flex justify-end">
        <ButtonUpdate _id={post._id} />
        <ButtonDelete _id={post._id} />
      </div>
    </Card>
  )
}

export default PostItemAdmin
