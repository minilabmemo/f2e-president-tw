
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="h-[100vh] bg-gray-100">{children}</div>
    </>
  )
}
