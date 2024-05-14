'use client'
import React from 'react'
import Link from 'next/link'

import { Category, Media } from '../../../../payload/payload-types'
import { useFilter } from '../../../_providers/Filter'

import classes from './index.module.scss'
import Image from 'next/image'

type CategoryCardProps = {
  category: Category
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  const media = category.media as Media
  const { setCategoryFilters } = useFilter()

  return (
    <Link
      href="/products"
      className={classes.card}
      onClick={() => setCategoryFilters([category.id])}
    >
      <Image
        src={media?.url}
        alt={category.title}
        className={classes.image}
        height={400}
        width={400}
      />
      <p className={classes.title}>{category.title}</p>
    </Link>
  )
}

export default CategoryCard
