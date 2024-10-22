import { NextRequest, NextResponse } from "next/server"
import { getUserMeLoader } from "./services/getUserMeLoader"

const protectedRoutes = [
  "/dashboard",
]

function isProtectedRoute(path: string): boolean {
  return protectedRoutes.some((route) => path.includes(route))
}

export async function middleware(request:NextRequest) {
  const user = await getUserMeLoader()
  const currentPath = request.nextUrl.pathname

  if(isProtectedRoute(currentPath) && user.ok == false) {
    return NextResponse.redirect(new URL("signin", request.url))
  }

  if(currentPath == '/' && user.ok == false) {
    return NextResponse.redirect(new URL("signin", request.url))
  }

  return NextResponse.next()
}

