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
    <SheetContent className="w-[300px]">
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>
      <SheetDescription />

      <div>
        <div className="flex items-center justify-between gap-3 border-b border-solid py-5">
          {session?.user ? (
            <h2 className="p-5 text-lg font-bold">
              Olá {session?.user?.name}!
            </h2>
          ) : (
            <>
              <h2 className="p-5 text-base font-bold">Olá. Faça seu Login!</h2>
              <SheetClose asChild>
                <Button size="icon">
                  <Link href="/api/auth/signin">
                    <LogInIcon />
                  </Link>
                </Button>
              </SheetClose>
            </>
          )}
        </div>

        <div className="flex flex-col gap-4 p-5">
          <SheetClose asChild>
            <Button className="justify-start gap-2" variant="ghost" asChild>
              <Link href="/">
                <HomeIcon size={18} className="text-primary" />
                Inicio
              </Link>
            </Button>
          </SheetClose>

          {session?.user && (
            <>
              <SheetClose asChild>
                <Button className="justify-start gap-2" variant="ghost" asChild>
                  <Link href="/private/posts-admin">
                    <FolderDotIcon size={18} className="text-primary" />
                    Admin
                  </Link>
                </Button>
              </SheetClose>
              <SheetClose asChild>
                <Button className="justify-start gap-2" variant="ghost" asChild>
                  <Link href="/private/new-post">
                    <FilePlus2Icon size={18} className="text-primary" />
                    Novo Post
                  </Link>
                </Button>
              </SheetClose>
              <SheetClose asChild>
                <Button className="justify-start gap-2" variant="ghost" asChild>
                  <Link href="/private/signup">
                    <UserPlusIcon size={18} className="text-primary" />
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
