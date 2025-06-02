import { cva, type VariantProps } from 'class-variance-authority'

import { paddingProps } from '@props/padding.props'
import { bgColorProps } from '@props/color.props'
import { boxShadowProps } from '@props/boxshadow.props'
import { borderRadiusProps } from '@props/borderradius.props'
import { heightProps } from '@props/height.props'
import { widthProps } from '@props/width.props'

const cardPropsVariants = {
  ...paddingProps,
  ...bgColorProps,
  ...boxShadowProps,
  ...borderRadiusProps,
  ...heightProps,
  ...widthProps,
}
const cardVariants = cva('flex border-solid', {
  variants: {
    ...cardPropsVariants,
  },
})

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  className?: string
  children?: React.ReactNode
  hoverEffect?: boolean
  testId?: string
  onClick?: () => void
}

export interface CardHeaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  className?: string
  children?: React.ReactNode
  title?: string
  description?: string
}

export interface CardBodyProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  className?: string
  children?: React.ReactNode
}

export interface CardFooterProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  className?: string
  children?: React.ReactNode
  justifyContent?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'
}

export { cardVariants }
