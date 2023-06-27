import { getServerSession } from 'next-auth'
import './globals.css'
import { Inter } from 'next/font/google'
import { authOptions } from '../pages/api/auth/[...nextauth]'
import AuthProvider from './SessionProvider'
import { Login } from './login'
import { Logout } from './logout'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Live Coding Club',
  description: 'Learn from letting others watch you code.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)
  console.log({ session, authOptions })

  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <AuthProvider session={session} >
          {!session ? <Login /> : <Logout />}
        </AuthProvider>
      </body>
    </html>
  )
}
