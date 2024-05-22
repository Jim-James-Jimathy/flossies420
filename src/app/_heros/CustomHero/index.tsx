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
          {/* <div className={classes.boxes}>
            <div className={classes.box} style={{ backgroundColor: '#932125' }} />
            <div className={classes.box} style={{ backgroundColor: '#34455A' }} />
            <div className={classes.box} style={{ backgroundColor: '#5A4743' }} />
            <div className={classes.box} style={{ backgroundColor: '#7F7A81' }} />
            <div className={classes.box} style={{ backgroundColor: '#080609' }} />
          </div> */}
          <div className={classes.imageWrap}>
            <Image
              src="/assets/images/van-logo.png"
              alt="van logo"
              className={classes.vanLogo}
              width={1000}
              height={500}
            />
          </div>
        </div>
      </section>
    </>
  )
}
