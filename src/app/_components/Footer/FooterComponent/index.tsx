'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Footer, Media } from '../../../../payload/payload-types'
import { noHeaderFooterUrls } from '../../../constants'
import { Button } from '../../Button'

import classes from './index.module.scss'

const FooterComponent = ({ footer }: { footer: Footer }) => {
  const pathname = usePathname()
  const navItems = footer?.navItems || []

  return (
    <footer className={noHeaderFooterUrls.includes(pathname) ? classes.hide : ''}>
      <div className={classes.footer}>
        <div className={classes.footerWrap}>
          <div className={classes.logo}>
            <Link href="/">
              <Image src="/logo-white.png" alt="logo" width={200} height={75} />
            </Link>
          </div>

          <div className={classes.copyright}>
            <p>{footer?.copyright}</p>
          </div>

          <div className={classes.socialLinks}>
            {navItems.map(item => {
              const icon = item?.link?.icon as Media

              return (
                <Button key={item.link.label} el="link" href={item.link.url} newTab={true}>
                  <Image src={icon?.url} alt={item.link.label} width={30} height={30} />
                </Button>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterComponent
