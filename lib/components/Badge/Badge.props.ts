import { cva, type VariantProps } from 'class-variance-authority'
import { colorPalletes } from '@props/color.props'
import { Icons } from '@components/Icon/Glyphs'
import { shapeProps } from '@props/shape.props'

const badgeSizeProps = {
  size: {
    tiny: 'text-[8px] px-1.5 py-0.5',
    small: 'text-xs px-2 py-0.5',
    medium: 'text-sm px-2.5 py-1',
    large: 'text-[14px] px-2.5 py-1',
    huge: 'text-md px-2.5 py-1',
  },
}

const badgeColorVariants: {
  color: Record<keyof typeof colorPalletes, string>
} = {
  color: {
    night: 'text-meteor-100 bg-night',
    white: 'text-meteor-300 bg-white border border-meteor-300',
    'deep-space': 'text-meteor-100 bg-deep-space',
    earth: 'text-earth-300 bg-earth-100',
    sun: 'text-sun-300 bg-sun-100',
    mars: 'text-mars-300 bg-mars-100',
    meteor: 'text-meteor-400 bg-meteor-100',
    neptune: 'text-neptune-300 bg-neptune-100',
    nova: 'text-nova-300 bg-nova-100',
    mercury: 'text-mercury-300 bg-mercury-100',
    aurora: 'text-aurora-300 bg-aurora-100',
  },
}

const badgePropsVariants = {
  ...badgeSizeProps,
  ...shapeProps,
  ...badgeColorVariants,
}

const badgeVariants = cva('inline-flex', {
  variants: { ...badgePropsVariants },
  defaultVariants: {
    size: 'medium',
    shape: 'circle',
    color: 'meteor',
  },
})

export interface BadgeProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'color'>,
    VariantProps<typeof badgeVariants> {
  children?: React.ReactNode
  icon?: keyof typeof Icons
  value?: string | number | boolean | object
  dense?: boolean
  onRemove?: (value: string | number | boolean | object) => void
  testId?: string
}

export { badgeVariants, badgeSizeProps }
