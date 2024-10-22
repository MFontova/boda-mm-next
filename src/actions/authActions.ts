/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"

import { cookies } from "next/headers"
import { LoginUserProps, loginUserService } from "@/services/authService"
import { redirect } from "next/navigation"

const config = {
  maxAge: 60 * 60 * 24 * 365,
  path: "/",
  doamin: "localhost",
  httpOnly: true,
}

export async function signinUserAction(prevState: any, formData: FormData) {
  console.log("hello from register user action")

  const fields = {
    identifier: formData.get("identifier"),
    password: formData.get("password"),
  }

  const responseData = await loginUserService(fields as LoginUserProps)

  if(!responseData) {
    return {
      ...prevState,
      strapiErrors: null,
      message: "Alguna cosa ha anat malament. Torna-ho a intentar."
    }
  }

  if(responseData.error) {
    return {
      ...prevState,
      strapiErrors: responseData.error,
      message: "Ha fallat l'inici de sessió"
    }
  }

  cookies().set("jwt", responseData.jwt, config)
  redirect("/")
}

export async function logoutAction() {
  cookies().set("jwt", "", {...config, maxAge: 0})
  redirect("/")
}