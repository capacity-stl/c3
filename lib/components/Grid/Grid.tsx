import React from 'react'
import { cn } from '../../utils/cn'
import { GridProps, gridVariants } from './Grid.props'
import { spacingRemMap } from '../../props/width.props'

const toPx = (rem: number) => `${rem * 16}px`

const formatTemplateInput = (template?: string) => {
  if (!template) return undefined
  // If complex CSS syntax present, trust user input as-is
  if (/[(),]/.test(template)) return template
  const parts = template.trim().split(/\s+/)
  return parts
    .map((p) => {
      if (spacingRemMap[p] !== undefined) return toPx(spacingRemMap[p])

      return p
    })
    .join(' ')
}

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
      ...(templateCols
        ? { gridTemplateColumns: formatTemplateInput(templateCols) }
        : {}),
      ...(templateRows
        ? { gridTemplateRows: formatTemplateInput(templateRows) }
        : {}),
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
