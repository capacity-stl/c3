import { cva, type VariantProps } from 'class-variance-authority'

import { iconsizeProps } from '@props/iconsize.props'
import { colorProps } from '@props/color.props'
import { Icons } from '@components/Icon/Glyphs'

enum asTypes {
  div = 'div',
  span = 'span',
}

const iconVariants = cva(['*:h-full', '*:w-auto'], {
  variants: {
    ...iconsizeProps,
    ...colorProps,
    as: {
      div: ['block'],
      span: ['inline-block'],
    },
  },
})

export type IconProps = VariantProps<typeof iconVariants> &
  React.ComponentProps<typeof iconVariants> & {
    icon: keyof typeof Icons
    as?: React.ElementType
    testId?: string
  }

export { iconVariants, asTypes }
