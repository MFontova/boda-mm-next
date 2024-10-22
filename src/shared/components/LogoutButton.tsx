import { logoutAction } from "@/actions/authActions";

export function LogoutButton() {
  return (
    <form action={logoutAction}>
      <button type="submit">
        Sortir
      </button>
    </form>
  )
}