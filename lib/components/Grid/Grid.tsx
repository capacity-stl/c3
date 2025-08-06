import React from 'react'
import { cn } from '../../utils/cn'
import { GridProps, gridVariants } from './Grid.props'

const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ className, children, testId, ...gridProps }, ref) => {
    const mergedProps = {
      ...gridProps,
      testId: testId ?? 'grid-component',
    }

    return (
      <div
        ref={ref}
        className={cn(gridVariants({ ...mergedProps }), className)}
        data-testid={mergedProps.testId}
      >
        {children}
      </div>
    )
  },
)

Grid.displayName = 'Grid'

export { Grid }
