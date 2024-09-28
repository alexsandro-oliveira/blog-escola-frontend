import { Avatar, AvatarImage } from "@/app/_components/ui/avatar"
import { Card, CardContent, CardFooter } from "@/app/_components/ui/card"
import { format, formatDistance } from "date-fns"
import { ptBR } from "date-fns/locale"

interface PostPageProps {
  params: {
    id: string
  }
}

const PostPage = async ({ params }: PostPageProps) => {
  let data: Response
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let post: any
  try {
    data = await fetch(`http://localhost:3108/posts/${params.id}`)
    post = await data.json()
    return post
  } catch (error) {
    console.error("Error getting post by id:", error)
  }

  return (
    <>
      <div className="flex justify-center">
        <Card className="mt-8 w-[80%] min-w-[167px] rounded-2xl">
          <CardContent>
            <div className="mt-8">
              <p className="mb-8 text-2xl font-bold">{post.title}</p>
              <p className="text-justify text-xl">{post.content}</p>
            </div>
          </CardContent>
          <CardFooter className="mt-10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="User avatar"
                />
              </Avatar>
              <div>
                <p className="text-sm">Autor</p>
                <h1>{post.author}</h1>
              </div>
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
              Publicado há{" "}
              {formatDistance(new Date(), new Date(post.createdAt), {
                locale: ptBR,
              })}{" "}
              atrás
            </time>
          </CardFooter>
        </Card>
      </div>
    </>
  )
}

export default PostPage
