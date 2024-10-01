"use server"

import { revalidatePath } from "next/cache"
import { fetchServer } from "../_lib/fetchServer"
import { redirect } from "next/navigation"

export const updatePost = async (id: string, data: PostsAdmin.PostContent) => {
  fetchServer(`http://localhost:3108/posts/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store"
  })
  revalidatePath("/")
  revalidatePath("/private/posts-admin")
  redirect("/private/posts-admin")
}
