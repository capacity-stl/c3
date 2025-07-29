import { cva, type VariantProps } from 'class-variance-authority'
import {
  bgColorProps,
  colorProps,
  borderColorProps,
  colorPalettes,
} from '@props/color.props'
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

const avatarThemeVariants: {
  theme: Record<keyof typeof colorPalettes, string>
} = {
  theme: {
    night: 'text-meteor-100 bg-night border border-night-300',
    white: 'text-meteor-300 bg-white border border-meteor-300',
    black: 'text-meteor-300 bg-black border border-meteor-300',
    'deep-space': 'text-meteor-100 bg-deep-space border border-deep-space',
    earth: 'text-earth-400 bg-earth-100 border border-earth-100',
    sun: 'text-sun-400 bg-sun-100 border border-sun-100',
    mars: 'text-mars-400 bg-mars-100 border border-mars-100',
    meteor: 'text-meteor-400 bg-meteor-100 border border-meteor-100',
    neptune: 'text-neptune-400 bg-neptune-100 border border-neptune-100',
    nova: 'text-nova-400 bg-nova-100 border border-nova-100',
    mercury: 'text-mercury-400 bg-mercury-100 border border-mercury-100',
    aurora: 'text-aurora-400 bg-aurora-100 border border-aurora-100',
  },
}

const avatarPropsVariants = {
  ...avatarsizeProps,
  ...avatarborderProps,
  ...avatarThemeVariants,
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
