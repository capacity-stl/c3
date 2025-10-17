import { cva, type VariantProps } from 'class-variance-authority'

import { marginProps } from '../../props/margin.props'
import { paddingProps } from '../../props/padding.props'
import { heightProps } from '../../props/height.props'
import { widthProps } from '../../props/width.props'
import { colorProps } from '../../props/color.props'
import { fontProps } from '../../props/font.props'

const labelVariants = cva(
  'font-sans cursor-pointer inline-block select-none',
  {
    variants: {
      ...marginProps,
      ...paddingProps,
      ...heightProps,
      ...widthProps,
      ...colorProps,
      ...fontProps,
      required: {
        true: 'after:content-["*"] after:ml-1 after:text-mars-400',
        false: '',
      },
      disabled: {
        true: 'opacity-50 cursor-not-allowed',
        false: '',
      },
    },
    defaultVariants: {
      type: 'body',
      color: 'deep-space',
      required: false,
      disabled: false,
    },
  },
)

export interface LabelProps
  extends Omit<React.LabelHTMLAttributes<HTMLLabelElement>, 'color'>,
    VariantProps<typeof labelVariants> {
  className?: string
  children?: React.ReactNode
  htmlFor?: string
  testId?: string
  required?: boolean
  disabled?: boolean
}

export { labelVariants }
