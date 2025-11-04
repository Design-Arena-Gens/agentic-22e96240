export const metadata = {
  title: 'Hey App',
  description: 'A simple Next.js application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
