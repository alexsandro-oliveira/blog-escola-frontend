import Header from "@/app/_components/header"
import { Avatar, AvatarImage } from "@/app/_components/ui/avatar"
import { Card, CardContent, CardFooter } from "@/app/_components/ui/card"

interface PostPageProps {
  params: {
    id: string
  }
}

const PostPage = async ({ params }: PostPageProps) => {
  const data = await fetch(`http://localhost:3108/posts/${params.id}`)
  const post = await data.json()

  return (
    <>
      <Header />

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
              title="07 de Setembro de 2024"
              dateTime="2024-09-07 22:15:00"
            >
              Publicado há 1h
            </time>
          </CardFooter>
        </Card>
      </div>
    </>
  )
}

export default PostPage
