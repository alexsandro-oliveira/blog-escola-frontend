"use server"

import { revalidatePath } from "next/cache"
import { fetchServer } from "../_lib/fetchServer"

export const deletePost = (id: PostsAdmin.PostPageProps) => {
  fetchServer(`http://localhost:3108/posts/${id._id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(id),
  })
  revalidatePath("/")
  revalidatePath("/posts/posts-admin")
}
