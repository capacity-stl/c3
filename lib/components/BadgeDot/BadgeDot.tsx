import { cn } from '@utils/cn'
import {
  BadgeDotProps,
  badgeDotVariants,
  badgeDotSizeProps,
} from './BadgeDot.props'

const getSizeOverride = (
  hasChildren: boolean,
  size: keyof typeof badgeDotSizeProps.size | null,
) => {
  switch (size) {
    case 'tiny':
    case 'small':
    case 'medium':
      return hasChildren ? 'large' : size
    default:
      return size ? size : 'large'
  }
}

const BadgeDot = ({
  className,
  color = 'meteor',
  shape = 'circle',
  size = 'medium',
  children,
  testId = 'badge-dot-component',
}: BadgeDotProps) => {
  return (
    <span
      role="status"
      className={cn(
        badgeDotVariants({
          shape,
          size: getSizeOverride(!!children, size),
          color,
        }),
        'relative flex select-none items-center justify-center border border-transparent font-semibold',
        className,
      )}
      style={{ containerType: 'inline-size' }}
      data-testid={testId}
    >
      <span className="text-center text-xs">{children ?? ' '}</span>
    </span>
  )
}

export { BadgeDot }
