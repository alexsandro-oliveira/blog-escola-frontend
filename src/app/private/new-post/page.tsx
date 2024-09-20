import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { Card, CardContent, CardFooter } from "../../_components/ui/card"
import { Input } from "../../_components/ui/input"
import { Button } from "../../_components/ui/button"
import Header from "../../_components/Header"

const TeacherPage = async () => {
  const session = await getServerSession()

  if (!session) {
    redirect("/")
  }
  return (
    <div>
      <Header />

      <div className="p-5">
        <Card>
          <CardContent>
            <Input placeholder="Título" />
            <Input placeholder="Conteúdo" />

            <CardFooter>
              <Button>Cancelar</Button>
              <Button>Publicar</Button>
            </CardFooter>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default TeacherPage
