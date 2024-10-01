"use client"

import { Button } from "./ui/button"
import { PencilIcon } from "lucide-react"
import UpdatePage from "./UpdatePost"

export const ButtonUpdate = (id: PostsAdmin.PostPageProps) => {
  const handleUpdate = () => {
    ;<UpdatePage id={id} />
  }

  return (
    <Button className="w-fit gap-1" variant="ghost" onClick={handleUpdate}>
      <PencilIcon size={18} />
      <p className="text-xs">Editar</p>
    </Button>
  )
}
