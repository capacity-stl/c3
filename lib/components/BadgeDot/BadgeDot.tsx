import { cn } from '@utils/cn'
import { BadgeDotProps, badgeDotVariants } from './BadgeDot.props'

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
        badgeDotVariants({ shape, size: children ? 'large' : size, color }),
        'relative flex select-none items-center justify-center border border-transparent font-semibold',
        className,
      )}
      style={{ containerType: 'inline-size' }}
      data-testid={testId}
    >
      <span className="text-center text-xs leading-none">
        {children ?? ' '}
      </span>
    </span>
  )
}

export { BadgeDot }
