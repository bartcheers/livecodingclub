'use client'

import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'

type props = {
  session: Session | null
  children: React.ReactNode
}

export default function AuthProvider({ session, children }: props) {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  )
}
