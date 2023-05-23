import '@styles/globals.css'

export const metadata = {
  title: 'Restaurant Chiyo',
  description: 'Fusion asiatique'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
