import { cva, type VariantProps } from 'class-variance-authority'
import { colorPalletes } from '@props/color.props'
import { shapeProps } from '@props/shape.props'

const badgeSizeProps = {
  size: {
    tiny: 'w-1 h-1',
    small: 'w-2 h-2',
    medium: 'w-3 h-3',
    large: 'w-4 h-4',
    huge: 'w-5 h-5',
  },
}

const badgePropsVariants = {
  ...badgeSizeProps,
  ...shapeProps,
}

const badgeVariants = cva('inline-flex', {
  variants: { ...badgePropsVariants },
  defaultVariants: {
    size: 'medium',
    shape: 'circle',
  },
})

export interface BadgeProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'color'>,
    VariantProps<typeof badgeVariants> {
  children?: React.ReactNode
  color?: keyof typeof colorPalletes
  testId?: string
}

export { badgeVariants, badgeSizeProps }
