import { cva, type VariantProps } from 'class-variance-authority'
import { ReactNode } from 'react'

import { marginProps } from '../../props/margin.props'
import { paddingProps } from '../../props/padding.props'
import { heightProps } from '../../props/height.props'
import { widthProps } from '../../props/width.props'
import { bgColorProps, colorProps } from '../../props/color.props'
import { borderProps } from '../../props/border.props'
import { layoutProps } from '../../props/layout.props'
import { fontProps } from '../../props/font.props'
import { Icons } from '@components/Icon/Glyphs'
import { borderRadiusProps } from '../../props/borderradius.props'

export const SIDE_NAV_STATES = {
  DISABLED: 'disabled',
  SELECTED: 'selected',
  DEFAULT: 'default',
  HOVERED: 'hovered',
} as const

export type SideNavState =
  (typeof SIDE_NAV_STATES)[keyof typeof SIDE_NAV_STATES]

const sideNavItemVariants = cva('', {
  variants: {
    ...marginProps,
    ...paddingProps,
    ...heightProps,
    ...widthProps,
    ...bgColorProps,
    ...borderProps,
    ...borderRadiusProps,
    ...layoutProps,
    ...fontProps,
    ...colorProps,
  },
  defaultVariants: {
    p: '2',
    type: 'body-small-strong',
    color: 'deep-space',
    borderRadius: 'small',
  },
})

export interface SideNavItemProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'color'>,
    VariantProps<typeof sideNavItemVariants> {
  label: string
  link?: string
  subItems?: SideNavItemProps[]
  startOpen?: boolean
  state?: SideNavState
  subItemsIcon?: keyof typeof Icons
  leadingIcon?: keyof typeof Icons
  leadingContent?: ReactNode
  trailingNumber?: number
  trailingIcon?: keyof typeof Icons
  trailingContent?: ReactNode
  hasSectionDivider?: boolean
  onItemClick?: (event: React.MouseEvent | React.KeyboardEvent) => void
  className?: string
  style?: React.CSSProperties
}

const sideNavVariants = cva('', {
  variants: {
    ...marginProps,
    ...paddingProps,
    ...heightProps,
    ...widthProps,
    ...bgColorProps,
    ...borderProps,
    ...borderRadiusProps,
    ...layoutProps,
  },
})

export interface SideNavProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'onSelect'>,
    VariantProps<typeof sideNavVariants> {
  items: SideNavItemProps[]
  className?: string
  style?: React.CSSProperties
  itemsClassName?: string
  itemsStyle?: React.CSSProperties
}

export { sideNavVariants, sideNavItemVariants }
