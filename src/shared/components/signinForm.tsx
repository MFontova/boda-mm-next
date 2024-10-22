"use client"

import { signinUserAction } from "@/actions/authActions"
import { useFormState } from "react-dom"
import StrapiErrors from "./StrapiErrors"

const INITIAL_STATE = {
  data: null,
}

export default function SigninForm() {
  const [formState, formAction] = useFormState(
    signinUserAction,
    INITIAL_STATE
  )

  console.log("## will render on client ##");
  console.log(formState);
  console.log("###########################");

  return (
    <main className="h-full flex flex-col justify-center">
      <div className="flex flex-col items-center p-10 border max-w-xl mx-auto my-auto rounded-lg shadow-md bg-white gap-5">
        <h1 className="text-3xl text-center">Benvinguts a la nostra boda - Mariona i Marc</h1>
        <form action={formAction} className="flex flex-col gap-3 items-center">
          <input
            id="identifier"
            name="identifier"
            type="email"
            placeholder="Email"
          />
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
          />
          <button type="submit" className="border rounded-full bg-[#c8b79f] text-white hover:shadow-md max-w-fit px-3">Inicia sessió</button>
          <StrapiErrors error={formState?.message} />
        </form>
      </div>
    </main>
  )
}