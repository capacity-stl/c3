import { cn } from '@utils/cn'
import { BadgeProps, badgeVariants } from './BadgeDot.props'
import { colorPalletes } from '@props/color.props'

const BadgeDot = ({
  className,
  color = 'meteor',
  shape = 'circle',
  size = 'medium',
  children,
  testId = 'badge-component',
}: BadgeProps) => {
  const themes: Record<keyof typeof colorPalletes, string> = {
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
  }

  return (
    <span
      role="status"
      className={cn(
        'text relative flex select-none items-center  justify-center border border-transparent font-semibold',
        badgeVariants({ shape, size: children ? 'large' : size }),
        className,
        themes[color],
      )}
      style={{ containerType: 'inline-size' }}
      data-testid={testId ?? 'badge-component'}
    >
      <span className="text-center text-xs leading-none">
        {children ?? ' '}
      </span>
    </span>
  )
}

export { BadgeDot }
