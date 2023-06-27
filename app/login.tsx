'use client'

import { signIn } from 'next-auth/react'

export const Login = () => {
  return (
    <button onClick={() => signIn('google')}>Login</button>
  )
}
