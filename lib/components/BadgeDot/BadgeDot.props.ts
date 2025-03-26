import { cva, type VariantProps } from 'class-variance-authority'
import { colorPalletes } from '@props/color.props'

const badgeDotSizeProps = {
  size: {
    tiny: 'w-1 h-1',
    small: 'w-2 h-2',
    medium: 'w-3 h-3',
    large: 'w-4 h-4',
    huge: 'w-5 h-5',
  },
}

const badgeDotShapeProps = {
  shape: {
    circle: 'rounded-full',
    square: 'rounded-none',
    rounded: 'rounded-sm',
  },
}

const badgeDotColorVariants: {
  color: Record<keyof typeof colorPalletes, string>
} = {
  color: {
    night: 'bg-night text-meteor-100',
    white: 'bg-white border border-meteor-300 text-meteor-300',
    'deep-space': 'bg-deep-space text-meteor-100',
    earth: 'bg-earth-300 text-earth-100',
    sun: 'bg-sun-300 text-sun-100',
    mars: 'bg-mars-300 text-mars-100',
    meteor: 'bg-meteor-300 text-meteor-100',
    neptune: 'bg-neptune-300 text-neptune-100',
    nova: 'bg-nova-300 text-nova-100',
    mercury: 'bg-mercury-300 text-mercury-100',
    aurora: 'bg-aurora-300 text-aurora-100',
  },
}

const badgeDotPropsVariants = {
  ...badgeDotShapeProps,
  ...badgeDotSizeProps,
  ...badgeDotColorVariants,
}

const badgeDotVariants = cva('inline-flex', {
  variants: { ...badgeDotPropsVariants },
  defaultVariants: {
    size: 'medium',
    shape: 'circle',
    color: 'meteor',
  },
})

export interface BadgeDotProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'color'>,
    VariantProps<typeof badgeDotVariants> {
  children?: React.ReactNode
  testId?: string
}

export { badgeDotVariants, badgeDotSizeProps }
