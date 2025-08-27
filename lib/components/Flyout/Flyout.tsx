import { useMemo, forwardRef } from 'react'
import { cn } from '@utils/cn'
import { FlyoutProps, componentVariants } from './Flyout.props'

const Flyout = forwardRef<HTMLDivElement, FlyoutProps>((props, ref) => {
  const { children, open, pinTo, ...rootProps } = props
  const boundingRect = useMemo(() => {
    return pinTo?.current ? pinTo.current.getBoundingClientRect() : null
  }, [pinTo])

  const { rootClassString } = componentVariants({
    open,
    boundingRect,
  })

  return open ? (
    <div className={cn(rootClassString)} ref={ref} {...rootProps}>
      {children}
    </div>
  ) : null
})

export { Flyout }
