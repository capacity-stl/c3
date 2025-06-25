import { cva, type VariantProps } from 'class-variance-authority'
import React from 'react'
import { marginProps } from '@props/margin.props'
import { paddingProps } from '@props/padding.props'
import { heightProps } from '@props/height.props'
import { widthProps } from '@props/width.props'
import { bgColorProps } from '@props/color.props'
import { borderProps } from '@props/border.props'
import { Icons } from '@components/Icon/Glyphs'

const PaginationPropsVariants = {
  ...marginProps,
  ...paddingProps,
  ...heightProps,
  ...widthProps,
  ...bgColorProps,
  ...borderProps,
}
const PaginationVariants = cva('flex', {
  variants: {
    ...PaginationPropsVariants,
  },
})

enum asTypes {
  div = 'div',
  span = 'span',
}

export interface PaginationProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof PaginationVariants> {
  className?: string
  children?: React.ReactNode
  testId?: string
  label?: string
  icon?: keyof typeof Icons
  value?: number
  active?: boolean
  disabled?: boolean
  onClick?: () => void
  totalPages?: number
  currentPage?: number
  setCurrentPage?: (page: number) => void
  isCurrent?: boolean
  activeBgColor?: string
  activeTextColor?: string
  totalItemsShown?: number
  siblingRange?: number
  itemBgColor?: string
  hoverBgColor?: string
}

export { PaginationVariants, asTypes }
