"use server"

import { revalidatePath } from "next/cache"
import { fetchServer } from "../_lib/fetchServer"
import { redirect } from "next/navigation"

export const newTeacher = async (teacher: Teacher.Teacher) => {
  fetchServer("http://localhost:3108/teachers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(teacher),
  })
  revalidatePath("/")
  redirect("/private/signin")
}
