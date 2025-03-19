import { cva, type VariantProps } from 'class-variance-authority'
import { bgColorProps, colorProps, borderColorProps } from '@props/color.props'
import { shapeProps } from '@props/shape.props'

const avatarsizeProps = {
  size: {
    tiny: 'size-4',
    small: 'size-6',
    medium: 'size-8',
    large: 'size-10',
    huge: 'size-24',
  },
}

const avatarborderProps = {
  border: {
    true: 'border',
    false: 'border-0',
  },
}
const avatarPropsVariants = {
  ...avatarsizeProps,
  ...avatarborderProps,
  ...colorProps,
  ...bgColorProps,
  ...borderColorProps,
  ...shapeProps,
}

const avatarVariants = cva('inline-block *:h-full *:w-auto', {
  variants: { ...avatarPropsVariants },
  defaultVariants: {
    size: 'medium',
    shape: 'circle',
    border: false,
  },
})

export interface AvatarProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'color'>,
    VariantProps<typeof avatarVariants> {
  children?: string
  alt?: string
  border?: boolean
  src?: string
  testId?: string
}

export { avatarVariants, avatarsizeProps }
