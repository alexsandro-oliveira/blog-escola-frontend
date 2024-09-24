"use server"

import { revalidatePath } from "next/cache"
import { toast } from "sonner"

interface DeletePageProps {
  id: string
}

export const deletePost = async (id: DeletePageProps) => {
  try {
    await fetch(`http://localhost:3108/posts/${id}`, {
      method: "DELETE",
    })
    toast.success("Post apagado com sucesso")
  } catch (error) {
    console.error(error)
    toast.error("Erro ao apagar post")
  }
  revalidatePath("/posts")
}
