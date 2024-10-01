"use client"

import {
  FilePlus2Icon,
  FolderDotIcon,
  HomeIcon,
  LogInIcon,
  LogOutIcon,
  Sheet,
  UserPlusIcon,
} from "lucide-react"
import { Button } from "./ui/button"
import {
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "./ui/sheet"
import Link from "next/link"

import { signOut, useSession } from "next-auth/react"

const SidebarSheet = () => {
  const { data: session } = useSession()

  const handleLogoutClick = () => signOut()

  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>
      <SheetDescription />

      <div>
        <div className="flex items-center justify-between gap-3 border-b border-solid py-5">
          <h2 className="p-5 text-lg font-bold">
            Olá {session?.user?.name}, faça seu login!
          </h2>

          <Button size="icon">
            <Link href="/api/auth/signin">
              <LogInIcon />
            </Link>
          </Button>
        </div>

        <div className="flex flex-col gap-4 p-5">
          <SheetClose asChild>
            <Button className="justify-start gap-2" variant="ghost" asChild>
              <Link href="/">
                <HomeIcon size={18} />
                Inicio
              </Link>
            </Button>
          </SheetClose>

          {session?.user && (
            <>
              <SheetClose asChild>
                <Button className="justify-start gap-2" variant="ghost" asChild>
                  <Link href="/private/posts-admin">
                    <FolderDotIcon size={18} />
                    Admin
                  </Link>
                </Button>
              </SheetClose>
              <SheetClose asChild>
                <Button className="justify-start gap-2" variant="ghost" asChild>
                  <Link href="/private/new-post">
                    <FilePlus2Icon size={18} />
                    Novo Post
                  </Link>
                </Button>
              </SheetClose>
              <SheetClose asChild>
                <Button className="justify-start gap-2" variant="ghost" asChild>
                  <Link href="/private/signup">
                    <UserPlusIcon size={18} />
                    Criar Professor
                  </Link>
                </Button>
              </SheetClose>

              <Button
                className="w-fit justify-start gap-2 text-destructive"
                variant="ghost"
                onClick={handleLogoutClick}
              >
                <LogOutIcon size={18} />
                Sair
              </Button>
            </>
          )}
        </div>
      </div>
    </SheetContent>
  )
}

export default SidebarSheet
