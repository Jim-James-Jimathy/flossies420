'use client'

import React from 'react'
import Link from 'next/link'

import { Category } from '../../../../payload/payload-types'
import { Checkbox } from '../../../_components/Checkbox'
import { RadioButton } from '../../../_components/Radio'
import { useFilter } from '../../../_providers/Filter'

import classes from './index.module.scss'

const Filters = ({ categories }: { categories: Category[] }) => {
  const { categoryFilters, sort, setCategoryFilters, setSort } = useFilter()

  const handleCategories = (categoryId: string) => {
    if (categoryFilters.includes(categoryId)) {
      const updatedCategories = categoryFilters.filter(id => id !== categoryId)

      setCategoryFilters(updatedCategories)
    } else {
      setCategoryFilters([...categoryFilters, categoryId])
    }
  }

  const handleSort = (value: string) => setSort(value)

  return (
    <div className={classes.filters}>
      <div className={classes.categories}>
        <h6 className={classes.title}>Product Categories</h6>
        <div className={classes.inputWrap}>
          {categories.map(category => {
            const isSelected = categoryFilters.includes(category.id)

            return (
              <Checkbox
                key={category.id}
                label={category.title}
                value={category.id}
                isSelected={isSelected}
                onClickHandler={handleCategories}
              />
            )
          })}
        </div>
      </div>
      <div className={classes.sortBy}>
        <h6 className={classes.title}>Sort By</h6>
        <div className={classes.inputWrap}>
          <RadioButton
            label="Latest"
            value="-createdAt"
            isSelected={sort === '-createdAt'}
            onRadioChange={handleSort}
            groupName="sort"
          />
          <RadioButton
            label="Oldest"
            value="createdAt"
            isSelected={sort === 'createdAt'}
            onRadioChange={handleSort}
            groupName="sort"
          />
        </div>
        <h6 className={classes.laws}>Delta 8 shipping laws</h6>
        <div className={classes.inputWrap}>
          <Link
            href="https://hionnature.com/pages/delta-8-shipping-laws"
            className={classes.lawBtn}
          >
            <span>view laws</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Filters
