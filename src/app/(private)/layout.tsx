import Header from "@/shared/components/Header"

export default function PrivateLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main>
      <Header/>
      {children}
      <footer>footer</footer>
    </main>
  )
}