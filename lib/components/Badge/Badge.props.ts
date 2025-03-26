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
  icon?: keyof typeof Icons
  value?: string | number | boolean | object
  dense?: boolean
  onRemove?: (value: string | number | boolean | object) => void
  testId?: string
}

export { badgeVariants, badgeSizeProps }
