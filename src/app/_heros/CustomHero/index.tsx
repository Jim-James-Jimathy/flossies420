'use client'

import Image from 'next/image'

import { Page } from '../../../payload/payload-types'
import AgeVerification from '../../_components/AgeVerification'
import { useVerify } from '../../lib/store'

import classes from './index.module.scss'

export const CustomHero: React.FC<Page['hero']> = ({ media }) => {
  const mediaUrl =
    media &&
    typeof media !== 'string' &&
    `${process.env.NEXT_PUBLIC_SERVER_URL}/media/${media.filename}`

  const { verified }: { verified: boolean } = useVerify()

  return (
    <>
      {!verified && <AgeVerification />}
      <section className={classes.container}>
        <div className={classes.wrapper}>
          <div className={classes.imageWrap}>
            <Image src={mediaUrl} alt="van" fill className={classes.image} />
          </div>
        </div>
      </section>
    </>
  )
}
