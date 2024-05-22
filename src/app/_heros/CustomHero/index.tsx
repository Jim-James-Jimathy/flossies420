'use client'

import Image from 'next/image'

import { Page } from '../../../payload/payload-types'
import AgeVerification from '../../_components/AgeVerification'
import { useAuth } from '../../_providers/Auth'
import { useVerify } from '../../lib/store'

import classes from './index.module.scss'

export const CustomHero: React.FC<Page['hero']> = () => {
  const { verified }: { verified: boolean } = useVerify()
  const user = useAuth()

  return (
    <>
      {/* {!verified && user.user === null && <AgeVerification />} */}
      <section className={classes.container}>
        <div className={classes.wrapper}>
          <div className={classes.circ1} style={{ zIndex: 5, backgroundColor: '#34455a' }} />
          <div className={classes.circ2} style={{ zIndex: 4, backgroundColor: '#761a1e' }} />
          <div className={classes.circ3} style={{ zIndex: 3, backgroundColor: '#5a4743' }} />
          <div className={classes.imageWrap}>
            <Image
              src="/assets/images/van-logo.png"
              alt="image of a frog"
              className={classes.vanLogo}
              fill
            />
            <Image
              src="/logo-white-lg.png"
              alt="flossies 420 logo"
              className={classes.logo}
              width={1000}
              height={500}
            />
          </div>
        </div>
      </section>
    </>
  )
}
