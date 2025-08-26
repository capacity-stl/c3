import React from 'react'
import { cn } from '../../utils/cn'
import { GridProps, gridVariants } from './Grid.props'

const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  (
    { className, children, testId, templateCols, templateRows, ...gridProps },
    ref,
  ) => {
    const mergedProps = {
      ...gridProps,
      testId: testId ?? 'grid-component',
    }

    const style: React.CSSProperties = {
      ...(templateCols ? { gridTemplateColumns: templateCols } : {}),
      ...(templateRows ? { gridTemplateRows: templateRows } : {}),
      ...(gridProps.style || {}),
    }

    return (
      <div
        ref={ref}
        className={cn(gridVariants({ ...mergedProps }), className)}
        data-testid={mergedProps.testId}
        style={style}
      >
        {children}
      </div>
    )
  },
)

Grid.displayName = 'Grid'

export { Grid }
