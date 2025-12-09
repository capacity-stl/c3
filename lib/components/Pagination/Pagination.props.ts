import { cva } from 'class-variance-authority'
import React from 'react'
import { marginProps, type MarginPropTypes } from '@props/margin.props'
import { paddingProps, type PaddingPropTypes } from '@props/padding.props'
import { heightProps, type HeightPropTypes } from '@props/height.props'
import { widthProps, type WidthPropTypes } from '@props/width.props'
import { bgColorProps, type BgColorPropTypes } from '@props/color.props'
import { borderProps, type BorderPropTypes } from '@props/border.props'
import { Icons } from '@components/Icon/Glyphs'
import { PaginationColorTheme } from './Pagination.defaults'

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

// Core pagination configuration
interface PaginationConfig {
  totalPages?: number
  currentPage?: number
  setCurrentPage?: (page: number) => void
  totalItemsShown?: number
  siblingRange?: number
}

// Color theme (can override individual colors or provide full theme)
interface PaginationColors extends Partial<PaginationColorTheme> {
  // Legacy individual color props for backward compatibility
  activeBgColor?: string
  activeTextColor?: string
  activeBorderColor?: string
  itemBgColor?: string
  itemTextColor?: string
  itemBorderColor?: string
  hoverBgColor?: string
  hoverTextColor?: string
  hoverBorderColor?: string
  nextPreviousBgColor?: string
  nextPreviousBorderColor?: string
  nextPreviousTextColor?: string
  nextPreviousHoverBgColor?: string
  nextPreviousHoverBorderColor?: string
  nextPreviousHoverTextColor?: string
  textColor?: string
  borderColor?: string
}

// Component-specific props for PaginationItem
interface PaginationItemProps {
  value?: number
  isCurrent?: boolean
  onItemClick?: () => void
}

// Component-specific props for PaginationPreviousNext
interface PaginationNavProps {
  icon?: keyof typeof Icons
  disabled?: boolean
  nextPreviousType?: 'next' | 'previous'
}

export interface PaginationProps
  extends React.HTMLAttributes<HTMLDivElement>,
    MarginPropTypes,
    PaddingPropTypes,
    HeightPropTypes,
    WidthPropTypes,
    BgColorPropTypes,
    BorderPropTypes,
    PaginationConfig,
    PaginationColors,
    PaginationItemProps,
    PaginationNavProps {
  className?: string
  children?: React.ReactNode
  testId?: string
  // Deprecated - kept for backward compatibility
  active?: boolean
}

export { PaginationVariants }
