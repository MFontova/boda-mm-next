import { User } from "@/types/user"
import { getAuthToken } from "./getToken"

export async function getUser() {
  const baseUrl = "http://localhost:1337"

  const url = new URL("/api/users/me", baseUrl)

  const authToken = await getAuthToken()
  
  try {
    const response = await fetch(url.href, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`
      },
      cache: "no-cache",
    })

    const data: User = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}