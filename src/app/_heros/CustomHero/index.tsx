'use client'

import Image from 'next/image'

import { Page } from '../../../payload/payload-types'
import AgeVerification from '../../_components/AgeVerification'
import { useVerify } from '../../lib/store'

import classes from './index.module.scss'

export const CustomHero: React.FC<Page['hero']> = () => {
  const { verified }: { verified: boolean } = useVerify()

  return (
    <>
      {/* {!verified && <AgeVerification />} */}
      <section className={classes.container}>
        <div className={classes.wrapper}>
          <div
            className={classes.circ1}
            style={{ width: '70vh', height: '70vh', zIndex: 5, backgroundColor: '#34455a' }}
          />
          <div
            className={classes.circ2}
            style={{ width: '100vh', height: '100vh', zIndex: 4, backgroundColor: '#761a1e' }}
          />
          <div
            className={classes.circ3}
            style={{ width: '130vh', height: '130vh', zIndex: 3, backgroundColor: '#5a4743' }}
          />
          <div className={classes.imageWrap}>
            <Image src="/assets/images/van-logo.png" alt="image of a frog" fill />
          </div>
        </div>
      </section>
    </>
  )
}
