"use client"

import { toast } from "sonner"
import { Button } from "./ui/button"
import { Trash2Icon } from "lucide-react"
import { deletePost } from "../_actions/delete-post"

export const ButtonDelete = (id: PostsAdmin.PostPageProps) => {
  const handleDelete = async () => {
    try {
      await deletePost(id)
      toast.success("Post apagado com sucesso!")
    } catch (error) {
      console.error(error)
      toast.error("Erro ao apagar post.")
    }
  }

  return (
    <Button
      className="w-fit gap-1 text-destructive"
      variant="ghost"
      onClick={handleDelete}
    >
      <Trash2Icon size={18} />
      <p className="text-xs">Apagar</p>
    </Button>
  )
}
