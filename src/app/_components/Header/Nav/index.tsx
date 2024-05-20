'use client'

import React from 'react'
import Link from 'next/link'

import { Header as HeaderType } from '../../../../payload/payload-types'
import { useAuth } from '../../../_providers/Auth'
import { Button } from '../../Button'
import { CartLink } from '../../CartLink'

import classes from './index.module.scss'

export const HeaderNav: React.FC<{ header: HeaderType }> = () => {
  const { user } = useAuth()

  return (
    <nav className={[classes.nav, user === undefined && classes.hide].filter(Boolean).join(' ')}>
      <Link href="/" className={classes.links}>
        Home
      </Link>
      <Link href="/products" className={classes.links}>
        Shop
      </Link>
      <Link href="/events" className={classes.links}>
        Events
      </Link>
      <Link href="/artists" className={classes.links}>
        Artists
      </Link>
      {user && <CartLink />}
      {user && (
        <Link href="/account" className={classes.links}>
          Account
        </Link>
      )}
      {!user && (
        <Link href="/login" className={classes.loginBtn}>
          <span>Login</span>
        </Link>
      )}
    </nav>
  )
}
