"use client"

import { Button } from "./ui/button"
import { PencilIcon } from "lucide-react"
import Link from "next/link"

export const ButtonUpdate = (id: PostsAdmin.PostPageProps) => {
  return (
    <Button className="w-fit gap-1" variant="ghost" asChild>
      <Link href={`/private/update-post?id=${id._id}`}>
        <PencilIcon size={18} />
        <p className="text-xs">Editar</p>
      </Link>
    </Button>
  )
}
