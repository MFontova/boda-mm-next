export interface LoginUserProps {
  identifier: string;
  password: string;
}

const baseUrl = "http://localhost:1337/api"

export async function loginUserService(userData:LoginUserProps) {
  const url = new URL("/api/auth/local", baseUrl)

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({...userData}),
      cache: "no-cache",
    })

    return response.json()
  } catch (error) {
    console.error("Login service error:", error)
    throw error
  }
}