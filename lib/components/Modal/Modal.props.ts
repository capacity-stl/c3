import { cva } from 'class-variance-authority'
import React from 'react'
import { marginProps, type MarginPropTypes } from '@props/margin.props'
import { paddingProps, type PaddingPropTypes } from '@props/padding.props'
import { heightProps, type HeightPropTypes } from '@props/height.props'
import { widthProps, type WidthPropTypes } from '@props/width.props'
import { bgColorProps, type BgColorPropTypes } from '@props/color.props'
import { borderProps, type BorderPropTypes } from '@props/border.props'
import {
  borderRadiusProps,
  type BorderRadiusPropTypes,
} from '@props/borderradius.props'
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

/** Shared modal layout prop types */
interface ModalLayoutProps
  extends MarginPropTypes,
    PaddingPropTypes,
    HeightPropTypes,
    WidthPropTypes,
    BgColorPropTypes,
    BorderPropTypes,
    BorderRadiusPropTypes {}

// Main Modal Root Props
export interface ModalRootProps
  extends React.HTMLAttributes<HTMLDivElement>,
    ModalLayoutProps {
  className?: string
  children?: React.ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
  fullScreen?: boolean
  closeOutside?: boolean
  testId?: string
  /** Modal size */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full' | null
}

// Modal Header Props
export interface ModalHeaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    ModalLayoutProps {
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
    ModalLayoutProps {
  className?: string
  children?: React.ReactNode
  testId?: string
}

// Modal Footer Props
export interface ModalFooterProps
  extends React.HTMLAttributes<HTMLDivElement>,
    ModalLayoutProps {
  className?: string
  children?: React.ReactNode
  testId?: string
  showBorder?: boolean
  justifyContent?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'
}

export interface ModalConfirmationProps
  extends React.HTMLAttributes<HTMLDivElement>,
    ModalLayoutProps {
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
