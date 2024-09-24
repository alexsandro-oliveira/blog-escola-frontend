"use client"

import { signOut } from "next-auth/react"
import { Button } from "./ui/button"
import { LogOutIcon } from "lucide-react"

const ButtonLogout = () => {
  const handleLogoutClick = () => signOut()
  return (
    <Button
      className="w-fit justify-start gap-2 text-destructive"
      variant="ghost"
      onClick={handleLogoutClick}
    >
      <LogOutIcon size={18} />
      Sair
    </Button>
  )
}

export default ButtonLogout
