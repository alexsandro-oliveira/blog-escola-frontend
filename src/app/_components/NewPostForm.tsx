"use client";

import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { useRouter } from 'next/navigation';
import { fetchClient } from "../_lib/fetchClient";
import { toast } from "sonner";
import { revalidatePath } from 'next/cache'

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
});

export const NewPostForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
      author: "",
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    try {
      const response = await fetchClient("http://localhost:3108/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // Correção da verificação de status
      if (response.status === 201) {
        toast.success("Post criado com sucesso!");
        router.push('/')
        
      }
    } catch (error) {
      console.error(error);
      toast.error("Erro ao criar post.");
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
                  className="h-[450px]"
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
  );
};
