import { NextPage } from "next";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function withAuth(Component: NextPage) {
  return function AuthenticatedComponent(props) {
    const router = useRouter()

    useEffect(() => {
      const token = localStorage.getItem('jwt')
      if(!token) {
        router.push('/auth/login')
      }
    }, [])

    return <Component {...props} />
  }
}