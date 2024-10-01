"use server"

import { revalidatePath } from "next/cache"
import { fetchServer } from "../_lib/fetchServer"
import { redirect } from "next/navigation"

export const newPost = async (post: PostsAdmin.PostContent) => {
  fetchServer("http://localhost:3108/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  })
  revalidatePath("/")
  revalidatePath("/private/posts-admin")
  redirect("/private/posts-admin")
}
