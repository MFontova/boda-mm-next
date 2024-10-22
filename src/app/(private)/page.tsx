import { getUser } from "@/services/getMe";
import { LogoutButton } from "@/shared/components/LogoutButton";


export default async function Home() {
  const user = await getUser()
  return (
    <>
      <h1>Hola {user!.name}! Benvigut/da a la nostra boda!</h1>
      <LogoutButton/>
    </>
  );
}
