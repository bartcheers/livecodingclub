'use client'

import { signOut, useSession } from 'next-auth/react'

export const Logout = () => {
  const session = useSession()

  return (
    <div>
      <div>{session?.data?.user?.name}</div>
      <button onClick={() => signOut()}>Log out</button>
    </div>
  )
}
