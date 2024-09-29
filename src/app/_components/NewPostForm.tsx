"use client"

import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Textarea } from "./ui/textarea"
import { toast } from "sonner"
import { newPost } from "../_actions/new-post"

const formSchema = z.object({
  title: z.string().min(5, {
    message: "O titulo deve conter o mínimo de 5 caracteres.",
  }),
  content: z.string().min(10, {
    message: "O conteúdo deve conter o mínimo de 10 caracteres.",
  }),
  author: z.string().min(5, {
    message: "O autor deve conter o mínimo de 5 caracteres.",
  }),
})

export const NewPostForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
      author: "",
    },
  })

  async function onSubmit(post: z.infer<typeof formSchema>) {
    try {
      await newPost(post)
      toast.success("Post criado com sucesso!")
      form.reset()
    } catch (error) {
      console.error(error)
      toast.error("Erro ao criar post.")
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
                <Input placeholder="Autor..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
