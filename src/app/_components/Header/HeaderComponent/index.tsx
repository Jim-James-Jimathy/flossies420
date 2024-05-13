'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Header } from '../../../../payload/payload-types'
import { noHeaderFooterUrls } from '../../../constants'
import { HeaderNav } from '../Nav'

import classes from './index.module.scss'

const HeaderComponent = ({ header }: { header: Header }) => {
  const pathname = usePathname()

  return (
    <nav
      className={[classes.header, noHeaderFooterUrls.includes(pathname) && classes.hide]
        .filter(Boolean)
        .join(' ')}
    >
      <div className={classes.wrap}>
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={200} height={75} />
        </Link>

        <HeaderNav header={header} />
        <div className={classes.border} />
      </div>
    </nav>
  )
}

export default HeaderComponent
