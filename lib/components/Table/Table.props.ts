import { cva, type VariantProps } from 'class-variance-authority'
import React from 'react'
import { marginProps } from '@props/margin.props'
import { paddingProps } from '@props/padding.props'
import { heightProps } from '@props/height.props'
import { widthProps } from '@props/width.props'
import { bgColorProps } from '@props/color.props'
import { borderProps } from '@props/border.props'
import { fontProps } from '@props/font.props'

const TablePropsVariants = {
  ...marginProps,
  ...paddingProps,
  ...heightProps,
  ...widthProps,
  ...bgColorProps,
  ...borderProps,
  ...fontProps,
}
const TableVariants = cva('table-auto, border-collapse', {
  variants: {
    ...TablePropsVariants,
  },
})

const TableRowVariants = cva('', {
  variants: {
    ...TablePropsVariants,
    border: {
      default: 'border-b border-meteor-200',
      none: 'border-none',
    },
  },
})

const TableBodyVariants = cva('', {
  variants: {
    ...TablePropsVariants,
  },
})

const TableCellVariants = cva('', {
  variants: {
    ...TablePropsVariants,
  },
})

const TableFooterVariants = cva('', {
  variants: {
    ...TablePropsVariants,
  },
})

const TableHeadVariants = cva('', {
  variants: {
    ...TablePropsVariants,
  },
})

const TableCaptionVariants = cva('', {
  variants: {
    ...TablePropsVariants,
  },
})

export interface TableProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof TableVariants> {
  className?: string
  testId?: string
}

export interface TableRowProps
  extends React.HTMLAttributes<HTMLTableRowElement>,
    VariantProps<typeof TableRowVariants> {
  className?: string
}

export interface TableBodyProps
  extends React.HTMLAttributes<HTMLTableSectionElement>,
    VariantProps<typeof TableBodyVariants> {
  className?: string
  testId?: string
}

export interface TableCellProps
  extends React.HTMLAttributes<HTMLTableCellElement>,
    VariantProps<typeof TableCellVariants> {
  className?: string
  testId?: string
}

export interface TableFooterProps
  extends React.HTMLAttributes<HTMLTableSectionElement>,
    VariantProps<typeof TableFooterVariants> {
  className?: string
  testId?: string
}

export interface TableHeadProps
  extends React.HTMLAttributes<HTMLTableSectionElement>,
    VariantProps<typeof TableHeadVariants> {
  className?: string
  testId?: string
}

export interface TableCaptionProps
  extends React.HTMLAttributes<HTMLTableCaptionElement>,
    VariantProps<typeof TableCaptionVariants> {
  className?: string
  testId?: string
}
export {
  TableVariants,
  TableRowVariants,
  TableBodyVariants,
  TableCellVariants,
  TableFooterVariants,
  TableHeadVariants,
  TableCaptionVariants,
}
