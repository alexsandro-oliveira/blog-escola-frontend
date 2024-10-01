"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import { toast } from "sonner"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/app/_components/ui/form"
import { Input } from "@/app/_components/ui/input"
import { Textarea } from "@/app/_components/ui/textarea"
import { Button } from "@/app/_components/ui/button"
import { updatePost } from "../_actions/update-post"

const formSchema = z.object({
  title: z.string().min(5, {
    message: "O título deve conter o mínimo de 5 caracteres.",
  }),
  content: z.string().min(10, {
    message: "O conteúdo deve conter o mínimo de 10 caracteres.",
  }),
  author: z.string().min(5, {
    message: "O autor deve conter o mínimo de 5 caracteres.",
  }),
})

const UpdatePostForm = ({ post }: { post: PostsAdmin.PostAdmin }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: post.title,
      content: post.content,
      author: post.author,
    },
  })

  async function onSubmit(data: z.infer<typeof formSchema>) {

    try {
      await updatePost(post._id, data)
      toast.success("Post editado com sucesso!")
    } catch (error) {
      console.error(error)
      toast.error("Erro ao editar post.")
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Título..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  className="h-[250px]"
                  placeholder="Digite seu texto..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="author"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Autor..." {...field} disabled readOnly />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Editar</Button>
      </form>
    </Form>
  )
}
export default UpdatePostForm
