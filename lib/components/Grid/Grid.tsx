import React from 'react'
import { cn } from '../../utils/cn'
import { GridProps, gridVariants, ResponsiveValue } from './Grid.props'

// Utility function to convert responsive values to CSS custom properties
const getResponsiveStyles = (
  property: string,
  value: ResponsiveValue<string | number> | undefined,
): Record<string, string | number> => {
  if (!value) return {}

  if (typeof value === 'string' || typeof value === 'number') {
    return { [property]: value }
  }

  const styles: Record<string, string | number> = {}

  if (value.initial !== undefined) {
    styles[property] = value.initial
  }

  // Note: For full responsive support, you'd implement CSS-in-JS or use CSS custom properties
  // This is a simplified version that handles the initial value

  return styles
}

// Utility function to convert gap values to CSS
const formatGapValue = (gap: string | number): string => {
  if (typeof gap === 'number') {
    return `${gap * 0.25}rem` // Convert to rem (assuming 1 = 0.25rem like Tailwind)
  }

  // Check if string is a number
  const numValue = Number(gap)
  if (!isNaN(numValue) && numValue >= 0) {
    return `${numValue * 0.25}rem`
  }

  return gap
}

// Utility function to convert columns/rows values to CSS
const formatGridValue = (value: string | number): string => {
  if (typeof value === 'number') {
    return `repeat(${value}, 1fr)`
  }

  // Check if string is a number
  const numValue = Number(value)
  if (!isNaN(numValue) && Number.isInteger(numValue) && numValue > 0) {
    return `repeat(${numValue}, 1fr)`
  }

  return value
}

// Utility function to convert alignment values to CSS
const formatAlignValue = (align: string): string => {
  const alignMap = {
    start: 'start',
    center: 'center',
    end: 'end',
    stretch: 'stretch',
    'space-between': 'space-between',
    'space-around': 'space-around',
    'space-evenly': 'space-evenly',
  }
  return alignMap[align as keyof typeof alignMap] || align
}

// Utility function to convert flow values to CSS
const formatFlowValue = (flow: string): string => {
  const flowMap = {
    row: 'row',
    column: 'column',
    'row-dense': 'row dense',
    'column-dense': 'column dense',
  }
  return flowMap[flow as keyof typeof flowMap] || flow
}

const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  (
    {
      className,
      children,
      templateColumns,
      templateRows,
      templateAreas,
      gap,
      rowGap,
      columnGap,
      autoColumns,
      autoRows,
      autoFlow,
      alignItems,
      justifyItems,
      placeItems,
      alignContent,
      justifyContent,
      placeContent,
      w,
      h,
      width,
      height,
      display = 'grid',
      testId,
      style,
      ...props
    },
    ref,
  ) => {
    // Build the style object with custom CSS properties
    const gridStyles: React.CSSProperties = {
      ...style,
      ...getResponsiveStyles('width', width || w),
      ...getResponsiveStyles('height', height || h),
    }

    // Handle grid template columns
    if (templateColumns) {
      const columnValue =
        typeof templateColumns === 'object'
          ? templateColumns.initial
          : templateColumns
      if (columnValue !== undefined) {
        gridStyles.gridTemplateColumns = formatGridValue(columnValue)
      }
    }

    // Handle grid template rows
    if (templateRows) {
      const rowValue =
        typeof templateRows === 'object' ? templateRows.initial : templateRows
      if (rowValue !== undefined) {
        gridStyles.gridTemplateRows = formatGridValue(rowValue)
      }
    }

    // Handle grid template areas
    if (templateAreas) {
      const areaValue =
        typeof templateAreas === 'object'
          ? templateAreas.initial
          : templateAreas
      if (areaValue !== undefined) {
        gridStyles.gridTemplateAreas = areaValue
      }
    }

    // Handle gap
    if (gap) {
      const gapValue = typeof gap === 'object' ? gap.initial : gap
      if (gapValue !== undefined) {
        gridStyles.gap = formatGapValue(gapValue)
      }
    }

    // Handle row gap
    if (rowGap) {
      const gapValue = typeof rowGap === 'object' ? rowGap.initial : rowGap
      if (gapValue !== undefined) {
        gridStyles.rowGap = formatGapValue(gapValue)
      }
    }

    // Handle column gap
    if (columnGap) {
      const gapValue =
        typeof columnGap === 'object' ? columnGap.initial : columnGap
      if (gapValue !== undefined) {
        gridStyles.columnGap = formatGapValue(gapValue)
      }
    }

    // Handle auto columns
    if (autoColumns) {
      const autoColValue =
        typeof autoColumns === 'object' ? autoColumns.initial : autoColumns
      if (autoColValue !== undefined) {
        gridStyles.gridAutoColumns = autoColValue
      }
    }

    // Handle auto rows
    if (autoRows) {
      const autoRowValue =
        typeof autoRows === 'object' ? autoRows.initial : autoRows
      if (autoRowValue !== undefined) {
        gridStyles.gridAutoRows = autoRowValue
      }
    }

    // Handle auto flow
    if (autoFlow) {
      const flowValue =
        typeof autoFlow === 'object' ? autoFlow.initial : autoFlow
      if (flowValue !== undefined) {
        gridStyles.gridAutoFlow = formatFlowValue(flowValue)
      }
    }

    // Handle align items
    if (alignItems) {
      const alignValue =
        typeof alignItems === 'object' ? alignItems.initial : alignItems
      if (alignValue !== undefined) {
        gridStyles.alignItems = formatAlignValue(alignValue)
      }
    }

    // Handle justify items
    if (justifyItems) {
      const justifyValue =
        typeof justifyItems === 'object' ? justifyItems.initial : justifyItems
      if (justifyValue !== undefined) {
        gridStyles.justifyItems = formatAlignValue(justifyValue)
      }
    }

    // Handle place items
    if (placeItems) {
      const placeValue =
        typeof placeItems === 'object' ? placeItems.initial : placeItems
      if (placeValue !== undefined) {
        gridStyles.placeItems = placeValue
      }
    }

    // Handle align content
    if (alignContent) {
      const alignValue =
        typeof alignContent === 'object' ? alignContent.initial : alignContent
      if (alignValue !== undefined) {
        gridStyles.alignContent = formatAlignValue(alignValue)
      }
    }

    // Handle justify content
    if (justifyContent) {
      const justifyValue =
        typeof justifyContent === 'object'
          ? justifyContent.initial
          : justifyContent
      if (justifyValue !== undefined) {
        gridStyles.justifyContent = formatAlignValue(justifyValue)
      }
    }

    // Handle place content
    if (placeContent) {
      const placeValue =
        typeof placeContent === 'object' ? placeContent.initial : placeContent
      if (placeValue !== undefined) {
        gridStyles.placeContent = placeValue
      }
    }

    return (
      <div
        ref={ref}
        className={cn(gridVariants({ display }), className)}
        style={gridStyles}
        data-testid={testId}
        {...props}
      >
        {children}
      </div>
    )
  },
)

Grid.displayName = 'Grid'

export { Grid }
