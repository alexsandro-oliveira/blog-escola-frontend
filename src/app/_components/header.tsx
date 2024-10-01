"use client"

import { ChevronLeftIcon, MenuIcon } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import { Sheet, SheetTrigger } from "./ui/sheet"
import SidebarSheet from "./Sidebar"
import Link from "next/link"
import ButtonLogout from "./ButtonLogout"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

const Header = () => {
  const { data: session } = useSession()
  const router = useRouter()

  return (
    <Card className="rounded-t-none">
      <CardContent className="flex flex-row items-center justify-between p-5 lg:px-8">
        <Button onClick={router.back} variant="outline" size="icon">
          <ChevronLeftIcon size={18} />
        </Button>

        <Link href="/">
          <h1 className="py-5 text-3xl font-bold text-primary lg:ps-4">
            FIAP <span className="text-lg font-light text-white">.blog</span>
          </h1>
        </Link>
        <div className="hidden lg:block">
          <div className="flex items-center">
            {session && (
              <>
                <Button variant="ghost" className="w-fit" size="sm" asChild>
                  <Link href="/private/posts-admin">Admin</Link>
                </Button>
                <Button variant="ghost" className="w-fit" size="sm" asChild>
                  <Link href="/private/new-post">Novo Post</Link>
                </Button>
                <Button variant="ghost" className="w-fit" size="sm" asChild>
                  <Link href="/private/signup">Criar Professor</Link>
                </Button>
              </>
            )}

            {session ? (
              <ButtonLogout />
            ) : (
              <Button variant="ghost" className="w-fit" asChild>
                <Link href="/api/auth/signin">Login</Link>
              </Button>
            )}
          </div>
        </div>
        <div className="md:block lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <MenuIcon />
              </Button>
            </SheetTrigger>

            <SidebarSheet />
          </Sheet>
        </div>
      </CardContent>
    </Card>
  )
}

export default Header
