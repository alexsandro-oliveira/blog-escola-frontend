"use server"

import { revalidatePath } from "next/cache"
import { fetchServer } from "../_lib/fetchServer"

interface NewPostProps {
  title: string
  content: string
  author: string
}

export const newPost = (post: NewPostProps) => {
  fetchServer("http://localhost:3108/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  })
  revalidatePath("/")
  revalidatePath("/posts/posts-admin")
}
