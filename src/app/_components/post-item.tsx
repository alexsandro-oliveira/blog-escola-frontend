import { Avatar, AvatarImage } from "./ui/avatar"
import { Card, CardContent } from "./ui/card"

const Post = () => {
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
            <h1>Autor</h1>
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
          <p className="mb-4">Titulo</p>
          <p className="line-clamp-3 text-xs">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
            voluptas voluptate itaque totam libero explicabo. Ipsa impedit,
            molestias autem quod laudantium nesciunt asperiores alias minima
            laborum unde, harum optio. Corrupti!
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

export default Post
