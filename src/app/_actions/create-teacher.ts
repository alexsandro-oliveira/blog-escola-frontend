"use server"

import { revalidatePath } from "next/cache"
import { fetchServer } from "../_lib/fetchServer"
import { redirect } from "next/navigation"

interface NewTeacherProps {
  name: string
  email: string
  password: string
}

export const newTeacher = (teacher: NewTeacherProps) => {
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
