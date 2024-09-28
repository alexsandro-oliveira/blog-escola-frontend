"use client"

import { fetchClient } from "../_lib/fetchClient"
import { Button } from "./ui/button"
import { Trash2Icon } from "lucide-react"

interface PostPageProps {
  _id: string
}

export const ButtonDelete = (id: PostPageProps) => {
  const handleDelete = async () => {
    fetchClient(`http://localhost:3108/posts/${id._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(id),
    }).catch((error) => console.error(error))
  }

  return (
    <Button className="w-fit" variant="destructive" onClick={handleDelete}>
      <Trash2Icon size={18} />
      <p className="text-xs">Apagar</p>
    </Button>
  )
}
