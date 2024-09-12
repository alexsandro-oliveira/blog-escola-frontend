import { FilePlus2Icon, HomeIcon, LogInIcon, UserPlusIcon } from "lucide-react"
import { Button } from "./ui/button"
import { SheetContent, SheetHeader, SheetTitle } from "./ui/sheet"
import Link from "next/link"
import { getServerSession } from "next-auth"
import ButtonLogout from "./ButtonLogout"

const SidebarSheet = async () => {
  const session = await getServerSession()

  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>

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
          <Button className="justify-start gap-2" variant="ghost" asChild>
            <Link href="/">
              <HomeIcon size={18} />
              Inicio
            </Link>
          </Button>

          {session?.user && (
            <>
              <Button className="justify-start gap-2" variant="ghost" asChild>
                <Link href="">
                  <FilePlus2Icon size={18} />
                  Novo Post
                </Link>
              </Button>
              <Button className="justify-start gap-2" variant="ghost" asChild>
                <Link href="">
                  <UserPlusIcon size={18} />
                  Criar Professor
                </Link>
              </Button>

              <ButtonLogout />
            </>
          )}
        </div>
      </div>
    </SheetContent>
  )
}

export default SidebarSheet
