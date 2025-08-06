import React from 'react'
import { cn } from '../../utils/cn'
import { GridItemProps, gridItemVariants } from './GridItem.props'

const GridItem = React.forwardRef<HTMLDivElement, GridItemProps>(
  ({ className, children, testId, ...gridItemProps }, ref) => {
    const mergedProps = {
      ...gridItemProps,
      testId: testId ?? 'grid-item-component',
    }

    return (
      <div
        ref={ref}
        className={cn(gridItemVariants({ ...mergedProps }), className)}
        data-testid={mergedProps.testId}
      >
        {children}
      </div>
    )
  },
)

export { GridItem }
