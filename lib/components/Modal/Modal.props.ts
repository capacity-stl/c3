import { cva, type VariantProps } from 'class-variance-authority'
import React from 'react'
import { marginProps } from '@props/margin.props'
import { paddingProps } from '@props/padding.props'
import { heightProps } from '@props/height.props'
import { widthProps } from '@props/width.props'
import { bgColorProps } from '@props/color.props'
import { borderProps } from '@props/border.props'
import { borderRadiusProps } from '@props/borderradius.props'
import { Icons } from '@components/Icon/Glyphs'

const ModalPropsVariants = {
  ...marginProps,
  ...paddingProps,
  ...heightProps,
  ...widthProps,
  ...bgColorProps,
  ...borderProps,
  ...borderRadiusProps,
}

const modalVariants = cva('', {
  variants: {
    ...ModalPropsVariants,
    size: {
      sm: 'max-w-md',
      md: 'max-w-lg',
      lg: 'max-w-2xl',
      xl: 'max-w-4xl',
      full: 'max-w-full',
    },
  },
})

// Main Modal Root Props
export interface ModalRootProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof modalVariants> {
  className?: string
  children?: React.ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
  fullScreen?: boolean
  closeOutside?: boolean
  testId?: string
}

// Modal Header Props
export interface ModalHeaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof modalVariants> {
  className?: string
  children?: React.ReactNode
  title?: string
  description?: string
  showCloseButton?: boolean
  onClose?: () => void
  icon?: keyof typeof Icons
  iconColor?: string
  testId?: string
  showBorder?: boolean
}

// Modal Body Props
export interface ModalBodyProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof modalVariants> {
  className?: string
  children?: React.ReactNode
  testId?: string
}

// Modal Footer Props
export interface ModalFooterProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof modalVariants> {
  className?: string
  children?: React.ReactNode
  testId?: string
  showBorder?: boolean
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'
}

export interface ModalAlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof modalVariants> {
  className?: string
  title?: string
  description?: string
  onConfirm?: () => void
  onCancel?: () => void
  confirmText?: string
  cancelText?: string
  testId?: string
  icon?: keyof typeof Icons
  iconColor?: string
}

export { modalVariants }
