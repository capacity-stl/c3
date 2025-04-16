import { cn } from '@utils/cn'
import { BadgeProps, badgeVariants } from './Badge.props'
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
        badgeVariants({ size, shape, color }),
        className,
        `items-center justify-center gap-[0.3em] font-semibold`,
        dense && 'px-1 py-0',
        !children && 'p-1.5',
      )}
      data-testid={testId}
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
          className={`hover:bg-${color}-200 ml-0.5 flex items-center select-none`}
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
