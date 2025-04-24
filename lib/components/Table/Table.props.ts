import { cva, type VariantProps } from 'class-variance-authority'
import React from 'react'
import { marginProps } from '@props/margin.props'
import { paddingProps } from '@props/padding.props'
import { heightProps } from '@props/height.props'
import { widthProps } from '@props/width.props'
import { bgColorProps } from '@props/color.props'
import { borderProps } from '@props/border.props'
import { ColumnDef, Row } from '@tanstack/react-table'

const TablePropsVariants = {
  ...marginProps,
  ...paddingProps,
  ...heightProps,
  ...widthProps,
  ...bgColorProps,
  ...borderProps,
}
const TableVariants = cva('', {
  variants: {
    ...TablePropsVariants,
  },
})

const TableRowVariants = cva('', {
  variants: {
    ...TablePropsVariants,
  },
})

const TableBodyVariants = cva('', {
  variants: {
    ...TablePropsVariants,
  },
})

export interface TableProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof TableVariants> {
  className?: string
  data: Record<string, unknown>[]
  columns: ColumnDef<Record<string, unknown>, unknown>[]
  testId?: string
}

export interface TableRowProps
  extends React.HTMLAttributes<HTMLTableRowElement>,
    VariantProps<typeof TableRowVariants> {
  className?: string
  rows: Row<Record<string, unknown>>[]
}

export interface TableBodyProps
  extends React.HTMLAttributes<HTMLTableSectionElement>,
    VariantProps<typeof TableBodyVariants> {
  className?: string
  rows?: Row<Record<string, unknown>>[]
  testId?: string
}

export { TableVariants, TableRowVariants, TableBodyVariants }
