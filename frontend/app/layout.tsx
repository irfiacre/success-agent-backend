import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Alaa - AI Assistant',
  description: 'AI-powered assistant with document upload',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

