"use client"

import { useRouter } from "next/navigation"
import { Button } from "./ui/button"
import { Undo2 } from "lucide-react"

export const ButtonBack = () => {
  const router = useRouter()

  return (
    <Button onClick={router.back} variant="outline" size="icon">
      <Undo2 size={18} />
    </Button>
  )
}
