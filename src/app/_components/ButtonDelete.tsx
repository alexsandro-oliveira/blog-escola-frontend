import { toast } from "sonner"
import { deletePost } from "../_actions/delete-post"
import { Button } from "./ui/button"
import { Trash2Icon } from "lucide-react"

interface PostPageProps {
  id: string
}

export const ButtonDelete = (id: PostPageProps) => {
  const handleDelete = async () => {
    try {
      await deletePost(id)
      toast.success("Post apagado com sucesso")
    } catch (error) {
      console.error(error)
      toast.error("Erro ao apagar post")
    }
  }

  return (
    <Button className="w-fit" variant="destructive" onClick={handleDelete}>
      <Trash2Icon size={18} />
      Apagar
    </Button>
  )
}
