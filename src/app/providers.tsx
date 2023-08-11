'use client'
import { type Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import { api } from '~/utils/api'

const AppProviders = (props: {
  children: React.ReactNode
  session: Session
}) => {
  return (
    <SessionProvider session={props.session}>{props.children}</SessionProvider>
  )
}

export default api.withTRPC(AppProviders)
