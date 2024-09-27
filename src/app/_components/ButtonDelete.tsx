"use client"

import { deletePost } from "../_actions/delete-post"
import { Button } from "./ui/button"
import { Trash2Icon } from "lucide-react"

interface PostPageProps {
  _id: string
}

export const ButtonDelete = (id: PostPageProps) => {
  const handleDelete = async () => {
    try {
      await deletePost(id._id)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Button className="w-fit" variant="destructive" onClick={handleDelete}>
      <Trash2Icon size={18} />
      <p className="text-xs">Apagar</p>
    </Button>
  )
}
