import React, { Fragment } from 'react'

import { Category, Product } from '../../../payload/payload-types'
import { AddToCartButton } from '../../_components/AddToCartButton'
import { Media } from '../../_components/Media'
import { Price } from '../../_components/Price'

import classes from './index.module.scss'

export const ProductHero: React.FC<{
  product: Product
}> = ({ product }) => {
  const { title, categories, meta: { image: metaImage, description } = {} } = product

  return (
    <div className={classes.productHero}>
      <div className={classes.wrapper}>
        <div className={classes.media}>
          {!metaImage && <div className={classes.placeholder}>No image</div>}
          {metaImage && typeof metaImage !== 'string' && (
            <Media imgClassName={classes.image} resource={metaImage} fill />
          )}
        </div>

        <div className={classes.details}>
          <div className={classes.titleWrap}>
            <h3 className={classes.title}>{title}</h3>
            <div className={classes.categories}>
              {categories?.map((category, index) => {
                const { title: categoryTitle } = category as Category

                const titleToUse = categoryTitle || 'Generic'
                const isLast = index === categories.length - 1

                return (
                  <p key={index} className={classes.category}>
                    {titleToUse} {!isLast && <Fragment>, &nbsp;</Fragment>}
                    <span className={classes.separator}>|</span>
                  </p>
                )
              })}
              <p className={classes.stock}> In stock</p>
            </div>
          </div>

          <div className={classes.price}>
            Price:
            <Price product={product} button={false} />
          </div>

          <div className={classes.description}>
            <h6>Description:</h6>
            <p>{description}</p>
            <AddToCartButton product={product} className={classes.addToCartButton} />
          </div>
        </div>
      </div>
    </div>
  )
}
