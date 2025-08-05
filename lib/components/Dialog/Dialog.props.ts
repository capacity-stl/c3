import { cva, type VariantProps } from 'class-variance-authority'
import React from 'react'
import { marginProps } from '@props/margin.props'
import { paddingProps } from '@props/padding.props'
import { heightProps } from '@props/height.props'
import { widthProps } from '@props/width.props'
import { bgColorProps } from '@props/color.props'
import { borderProps } from '@props/border.props'
import { borderRadiusProps } from '@props/borderradius.props'

const DialogPropsVariants = {
  ...marginProps,
  ...paddingProps,
  ...heightProps,
  ...widthProps,
  ...bgColorProps,
  ...borderProps,
  ...borderRadiusProps,
}

const dialogVariants = cva('', {
  variants: {
    ...DialogPropsVariants,
    size: {
      sm: 'max-w-md',
      md: 'max-w-lg',
      lg: 'max-w-2xl',
      xl: 'max-w-4xl',
      full: 'max-w-full',
    },
  },
})

// Main Dialog Root Props
export interface DialogRootProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dialogVariants> {
  className?: string
  children?: React.ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
  testId?: string
}

// Dialog Trigger Props
export interface DialogTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  children?: React.ReactNode
  asChild?: boolean
  testId?: string
}

// Dialog Header Props
export interface DialogHeaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dialogVariants> {
  className?: string
  children?: React.ReactNode
  title?: string
  description?: string
  showCloseButton?: boolean
  onClose?: () => void
  testId?: string
}

// Dialog Body Props
export interface DialogBodyProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dialogVariants> {
  className?: string
  children?: React.ReactNode
  testId?: string
}

// Dialog Footer Props
export interface DialogFooterProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dialogVariants> {
  className?: string
  children?: React.ReactNode
  justifyContent?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'
  testId?: string
}

export { dialogVariants }
