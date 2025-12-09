import { cva } from 'class-variance-authority'

import { marginProps, type MarginPropTypes } from '../../props/margin.props'
import { paddingProps, type PaddingPropTypes } from '../../props/padding.props'
import { heightProps, type HeightPropTypes } from '../../props/height.props'
import { widthProps, type WidthPropTypes } from '../../props/width.props'
import { borderProps, type BorderPropTypes } from '../../props/border.props'
import { colorProps, type ColorPropTypes } from '../../props/color.props'
import { fontProps, type FontPropTypes } from '../../props/font.props'

const textVariants = cva('', {
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
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color' | 'align'>,
    MarginPropTypes,
    PaddingPropTypes,
    HeightPropTypes,
    WidthPropTypes,
    BorderPropTypes,
    ColorPropTypes,
    FontPropTypes {
  className?: string
  children?: React.ReactNode
  as?: React.ElementType
  testId?: string
}

export { textVariants, asTypes }
