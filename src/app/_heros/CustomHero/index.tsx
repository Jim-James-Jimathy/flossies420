import React, { Fragment } from 'react'
import Image from 'next/image'

import { Page } from '../../../payload/payload-types'
import { CMSLink } from '../../_components/Link'
import RichText from '../../_components/RichText'

import classes from './index.module.scss'

export const CustomHero: React.FC<Page['hero']> = ({ richText, media, links }) => {
  const mediaUrl =
    media &&
    typeof media !== 'string' &&
    `${process.env.NEXT_PUBLIC_SERVER_URL}/media/${media.filename}`

  return (
    <section className={classes.container}>
      <div className={classes.wrapper}>
        <Image src={mediaUrl} alt="van" height={1000} width={1000} />
      </div>
      <div className={classes.mailer}></div>
    </section>
  )
}
