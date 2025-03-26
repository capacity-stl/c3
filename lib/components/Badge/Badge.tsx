import { cn } from '@utils/cn'
import { BadgeProps, badgeVariants } from './Badge.props'
import { colorPalletes } from '@props/color.props'
import { Icon } from '@components/Icon/Icon'
import { sizeNameProps, sizeProps } from '@props/size.props'

const Badge = ({
  className,
  children,
  dense = false,
  color = 'meteor',
  onRemove,
  value,
  icon,
  shape = 'circle',
  size = 'medium',
  testId = 'badge-component',
}: BadgeProps) => {
  const themes: Record<keyof typeof colorPalletes, string> = {
    night: 'text-meteor-100 bg-night',
    white: 'text-meteor-300 bg-white border border-meteor-300',
    'deep-space': 'text-meteor-100 bg-deep-space',
    earth: 'text-earth-400 bg-earth-100',
    sun: 'text-sun-400 bg-sun-100',
    mars: 'text-mars-400 bg-mars-100',
    meteor: 'text-meteor-400 bg-meteor-100',
    neptune: 'text-neptune-400 bg-neptune-100',
    nova: 'text-nova-400 bg-nova-100',
    mercury: 'text-mercury-400 bg-mercury-100',
    aurora: 'text-aurora-400 bg-aurora-100',
  }

  const iconSize: Record<sizeNameProps, keyof typeof sizeProps.size> = {
    tiny: '2',
    small: '3',
    medium: '3',
    large: '4',
    huge: '5',
  }

  return (
    <span
      role="status"
      className={cn(
        'border border-transparent',
        badgeVariants({ size, shape }),
        className,
        `items-center justify-center gap-[0.3em] font-semibold`,
        themes[color],
        dense && 'px-1 py-0',
        !children && 'p-1.5',
      )}
      data-testid={testId ?? 'badge-component'}
    >
      {icon && (
        <Icon
          icon={icon}
          size={iconSize[size ?? 'medium']}
          aria-hidden="true"
        />
      )}
      {children}
      {onRemove && (
        <button
          className={`hover:bg-${color}-200 ml-0.5 flex select-none items-center`}
          onClick={() => onRemove?.(value ?? `No 'value' provided`)}
          aria-label={`Remove ${typeof children === 'string' ? children : 'badge'}`}
          type="button"
        >
          <Icon
            icon="Close"
            size={iconSize[size ?? 'medium']}
            aria-hidden="true"
          />
        </button>
      )}
    </span>
  )
}

export { Badge }
