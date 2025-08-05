import { useState } from 'react'
import { cn } from '@utils/cn'
import { TooltipProps } from './Tooltip.props'
import { Text } from '@components/Text/Text'

const getPositionClasses = (position: string) => ({
  tooltip: {
    top: 'bottom-full left-1/2 mb-2 -translate-x-1/2',
    bottom: 'left-1/2 top-full mt-2 -translate-x-1/2',
    left: 'right-full top-1/2 mr-2 -translate-y-1/2',
    right: 'left-full top-1/2 ml-2 -translate-y-1/2',
  }[position],
  arrow: {
    top: 'left-1/2 top-full -mt-1 -translate-x-1/2',
    bottom: 'bottom-full left-1/2 -mb-1 -translate-x-1/2',
    left: 'left-full top-1/2 -ml-1 -translate-y-1/2',
    right: 'right-full top-1/2 -mr-1 -translate-y-1/2',
  }[position],
})

const Tooltip = ({
  className,
  children,
  content,
  testId = 'tooltip-component',
  position = 'top',
  ...props
}: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const positionClasses = getPositionClasses(position)

  return (
    <div
      className={cn('relative inline cursor-default', className)}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      data-testid={testId}
      {...props}
    >
      {children}
      {isVisible && (
        <div
          className={cn(
            'absolute z-50 whitespace-nowrap rounded bg-earth-400 px-2 py-1 text-sm text-white',
            'animate-in fade-in-0 duration-200',
            positionClasses.tooltip,
          )}
        >
          {typeof content === 'string' ? (
            <Text type="body-small" color="white">
              {content}
            </Text>
          ) : (
            content
          )}
          <div
            className={cn(
              'absolute h-2 w-2 rotate-45 bg-earth-400',
              positionClasses.arrow,
            )}
          />
        </div>
      )}
    </div>
  )
}

export { Tooltip }
