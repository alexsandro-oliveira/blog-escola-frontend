import { Avatar, AvatarImage } from "@/app/_components/ui/avatar"
import { Card, CardContent, CardFooter } from "@/app/_components/ui/card"
import { format, formatDistance } from "date-fns"
import { ptBR } from "date-fns/locale"
import PostNotFound from "@/app/_components/post-not-found"

const PostSearch = async ({
  post,
}: {
  post: Posts.Post | PostsAdmin.PostAdmin
}) => {
  return (
    <>
      {post ? (
        <div className="flex justify-center">
          <Card className="mt-8 w-[80%] min-w-[167px] rounded-2xl">
            <CardContent>
              <div className="mt-8">
                <p className="mb-8 text-xl font-bold">{post.title}</p>
                <p className="text-justify">{post.content}</p>
              </div>
            </CardContent>
            <CardFooter className="mt-10 flex items-center justify-between">
              <div className="flex items-center">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="User avatar"
                    className="h-8 w-8 rounded-full"
                  />
                </Avatar>
                <div>
                  <h1 className="text-sm">{post.author}</h1>
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
                {formatDistance(new Date(), new Date(post.createdAt), {
                  locale: ptBR,
                })}{" "}
                atrás
              </time>
            </CardFooter>
          </Card>
        </div>
      ) : (
        <PostNotFound />
      )}
    </>
  )
}

export default PostSearch
