import React from 'react'
import { GridItemProps } from './GridItem.props'

const GridItem = React.forwardRef<HTMLDivElement, GridItemProps>(
  (
    {
      className,
      children,
      colSpan,
      rowSpan,
      colStart,
      colEnd,
      rowStart,
      rowEnd,
      area,
      testId,
      style,
      ...props
    },
    ref,
  ) => {
    // Build the style object with grid-specific properties
    const gridItemStyles: React.CSSProperties = {
      ...style,
    }

    // Handle column span
    if (colSpan !== undefined) {
      gridItemStyles.gridColumn = `span ${colSpan}`
    }

    // Handle row span
    if (rowSpan !== undefined) {
      gridItemStyles.gridRow = `span ${rowSpan}`
    }

    // Handle column start/end
    if (colStart !== undefined || colEnd !== undefined) {
      const start = colStart ?? 'auto'
      const end = colEnd ?? 'auto'
      gridItemStyles.gridColumn = `${start} / ${end}`
    }

    // Handle row start/end
    if (rowStart !== undefined || rowEnd !== undefined) {
      const start = rowStart ?? 'auto'
      const end = rowEnd ?? 'auto'
      gridItemStyles.gridRow = `${start} / ${end}`
    }

    // Handle grid area
    if (area !== undefined) {
      gridItemStyles.gridArea = area
    }

    return (
      <div
        ref={ref}
        className={className}
        style={gridItemStyles}
        data-testid={testId}
        {...props}
      >
        {children}
      </div>
    )
  },
)

GridItem.displayName = 'GridItem'

export { GridItem }
