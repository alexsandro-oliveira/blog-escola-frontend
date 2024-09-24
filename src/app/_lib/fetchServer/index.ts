import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export const fetchServer = async (
  input: string | URL | Request,
  init?: RequestInit | undefined,
): Promise<Response> => {
  const jwt = cookies().get("jwt")

  const response = await fetch(input, {
    ...init,
    headers: {
      ...init?.headers,
      ...(jwt && { Authorization: `Bearer ${jwt.value}` }),
    },
  })

  if (response.status === 401) {
    return redirect("/")
  }
  return response
}
