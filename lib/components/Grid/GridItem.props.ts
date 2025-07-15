import React from 'react'

export interface GridItemProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children?: React.ReactNode

  // Column positioning
  colSpan?: number
  colStart?: number | string
  colEnd?: number | string

  // Row positioning
  rowSpan?: number
  rowStart?: number | string
  rowEnd?: number | string

  // Grid area
  area?: string

  // Testing
  testId?: string
}
