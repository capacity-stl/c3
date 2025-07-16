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
  /** Forces this item to render as a section header (pill), even if not expandable. */
  isSectionHeader?: boolean
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

// Section header pill variant
export const sectionHeaderVariants = cva(
  'bg-meteor-200 rounded-sm h-12 mb-2 px-4 flex items-center text-sm font-bold tracking-wider uppercase text-deep-space gap-2 cursor-pointer',
)

// Subitem variant
export const subItemVariants = cva(
  'mb-2 px-4 py-2 text-[13px] font-semibold text-deep-space bg-none rounded-md transition-colors',
  {
    variants: {
      selected: {
        true: 'bg-earth-300 text-white',
        false: '',
      },
    },
  },
)

// Badge variant
export const badgeVariants = cva(
  'ml-2 px-2 h-5 inline-flex items-center justify-center rounded bg-cloud text-deep-space text-xs font-bold',
  {
    variants: {
      selected: {
        true: 'bg-[rgba(2,33,77,0.2)] text-white',
        false: '',
      },
      zero: {
        true: 'text-meteor-400 bg-meteor-100 border border-transparent rounded-[12px] text-[0.714rem] px-2 py-0.5',
        false: '',
      },
    },
  },
)
