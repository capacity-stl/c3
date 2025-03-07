import { cva, type VariantProps } from 'class-variance-authority'

import { marginProps } from '../../props/margin.props'
import { paddingProps } from '../../props/padding.props'
import { heightProps } from '../../props/height.props'
import { widthProps } from '../../props/width.props'
import { borderProps } from '../../props/border.props'
import { colorProps } from '../../props/color.props'
import { fontProps } from '../../props/font.props'

const textVariants = cva('text-base', {
  variants: {
    ...marginProps,
    ...paddingProps,
    ...heightProps,
    ...widthProps,
    ...borderProps,
    ...colorProps,
    ...fontProps,
  },
})

enum asTypes {
  div = 'div',
  span = 'span',
  p = 'p',
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
  em = 'em',
  strong = 'strong',
  code = 'code',
}

export interface TextProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>,
    VariantProps<typeof textVariants> {
  className?: string
  children?: React.ReactNode
  as?: React.ElementType
}

export { textVariants, asTypes }
