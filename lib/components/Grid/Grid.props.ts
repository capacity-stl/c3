import { cva } from 'class-variance-authority'
import React from 'react'

// Responsive breakpoint type
type ResponsiveValue<T> =
  | T
  | { initial?: T; xs?: T; sm?: T; md?: T; lg?: T; xl?: T }

const gridVariants = cva('grid', {
  variants: {
    display: {
      grid: 'grid',
      'inline-grid': 'inline-grid',
    },
  },
  defaultVariants: {
    display: 'grid',
  },
})

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children?: React.ReactNode

  // Chakra UI-style grid template properties
  templateColumns?: ResponsiveValue<string | number>
  templateRows?: ResponsiveValue<string | number>
  templateAreas?: ResponsiveValue<string>

  // Gap properties
  gap?: ResponsiveValue<string | number>
  rowGap?: ResponsiveValue<string | number>
  columnGap?: ResponsiveValue<string | number>

  // Auto properties
  autoColumns?: ResponsiveValue<string>
  autoRows?: ResponsiveValue<string>
  autoFlow?: ResponsiveValue<'row' | 'column' | 'row-dense' | 'column-dense'>

  // Alignment properties
  alignItems?: ResponsiveValue<'start' | 'center' | 'end' | 'stretch'>
  justifyItems?: ResponsiveValue<'start' | 'center' | 'end' | 'stretch'>
  placeItems?: ResponsiveValue<string>

  // Content alignment
  alignContent?: ResponsiveValue<
    | 'start'
    | 'center'
    | 'end'
    | 'stretch'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
  >
  justifyContent?: ResponsiveValue<
    | 'start'
    | 'center'
    | 'end'
    | 'stretch'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
  >
  placeContent?: ResponsiveValue<string>

  // Display variant
  display?: 'grid' | 'inline-grid'

  // Responsive width and height
  w?: ResponsiveValue<string | number>
  h?: ResponsiveValue<string | number>
  width?: ResponsiveValue<string | number>
  height?: ResponsiveValue<string | number>

  // Testing
  testId?: string
}

export { gridVariants }
export type { ResponsiveValue }
