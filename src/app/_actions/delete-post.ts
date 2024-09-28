"use server"

import { getServerSession } from "next-auth"
import { revalidatePath } from "next/cache"

export const deletePost = async (id: string) => {
  try {
    const session = await getServerSession()
    if (!session) {
      return
    }

    await fetch(`http://localhost:3108/posts/${id}`, {
      method: "DELETE",
    })
    revalidatePath("/private/posts-admin")
  } catch (error) {
    console.error("Error deleting post:", error)
  }
}
