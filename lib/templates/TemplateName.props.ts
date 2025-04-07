import { cva, type VariantProps } from 'class-variance-authority'
import React from 'react'
import { marginProps } from '@props/margin.props'
import { paddingProps } from '@props/padding.props'
import { heightProps } from '@props/height.props'
import { widthProps } from '@props/width.props'
import { bgColorProps } from '@props/color.props'
import { borderProps } from '@props/border.props'

const TemplateNamePropsVariants = {
  ...marginProps,
  ...paddingProps,
  ...heightProps,
  ...widthProps,
  ...bgColorProps,
  ...borderProps,
}
const TemplateNameVariants = cva('flex', {
  variants: {
    ...TemplateNamePropsVariants,
  },
})

enum asTypes {
  div = 'div',
  span = 'span',
}

export interface TemplateNameProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof TemplateNameVariants> {
  className?: string
  children?: React.ReactNode
  as?: asTypes | keyof React.JSX.IntrinsicElements
  asChild?: boolean
  testId?: string
}

export { TemplateNameVariants, asTypes }
