import { cva, type VariantProps } from 'class-variance-authority'

import { iconsizeProps } from '@props/iconsize.props'
import { colorProps } from '@props/color.props'

const iconPropsVariants = {
  ...iconsizeProps,
  ...colorProps,
}

const iconVariants = cva('inline-block *:h-full *:w-auto', {
  variants: {
    ...iconPropsVariants,
  },
})

export type IconProps = VariantProps<typeof iconVariants> &
  React.ComponentProps<typeof iconVariants> & {
    icon: string
    testId?: string
  }

export { iconVariants }
