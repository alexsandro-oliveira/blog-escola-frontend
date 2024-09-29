import { Card } from "@/app/_components/ui/card"

const PostNotFound = async () => {
  return (
    <div className="flex justify-center">
      <Card className="mt-8 w-[80%] min-w-[167px] rounded-2xl my-4">
        <p className="text-center my-4">Post não encontrado.</p>
      </Card>
    </div>
  )
}

export default PostNotFound
