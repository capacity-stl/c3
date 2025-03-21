import { cva, type VariantProps } from 'class-variance-authority'

import { paddingProps } from '@props/padding.props'
import { bgColorProps } from '@props/color.props'

const cardPropsVariants = {
  ...paddingProps,
  ...bgColorProps,
}
const cardVariants = cva('flex', {
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
  borderRadius?: string
  boxShadow?: string
  padding?: string
  bgColor?: string
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
