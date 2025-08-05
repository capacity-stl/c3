import React, { createContext, useContext, useEffect, useRef } from 'react'
import { cn } from '@utils/cn'
import {
  DialogRootProps,
  DialogTriggerProps,
  DialogHeaderProps,
  DialogBodyProps,
  DialogFooterProps,
  dialogVariants,
} from './Dialog.props'
import { Text } from '@components/Text/Text'
import { Icon } from '@components/Icon/Icon'

// Context for dialog state management
interface DialogContextType {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const DialogContext = createContext<DialogContextType | null>(null)

const useDialog = () => {
  const context = useContext(DialogContext)
  if (!context) {
    throw new Error('Dialog components must be used within a DialogRoot')
  }
  return context
}

// Dialog Root Component
const DialogRoot = ({
  className,
  children,
  open = false,
  onOpenChange,
  size = 'md',
  testId = 'dialog-root',
  ...props
}: DialogRootProps) => {
  const dialogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && open) {
        onOpenChange?.(false)
      }
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (dialogRef.current && event.target === dialogRef.current) {
        onOpenChange?.(false)
      }
    }

    if (open) {
      document.addEventListener('keydown', handleEscape)
      document.addEventListener('click', handleClickOutside)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('click', handleClickOutside)
      document.body.style.overflow = 'auto'
    }
  }, [open, onOpenChange])

  if (!open) return null

  return (
    <DialogContext.Provider
      value={{ open, onOpenChange: onOpenChange || (() => {}) }}
    >
      <div
        ref={dialogRef}
        className={cn(
          'fixed inset-0 z-50 flex items-center justify-center bg-night bg-opacity-50 p-4',
          className,
        )}
        data-testid={testId}
        role="dialog"
        aria-modal="true"
      >
        <div
          className={cn(
            dialogVariants({ size, ...props }),
            'relative w-full rounded-lg bg-white shadow-lg',
          )}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </DialogContext.Provider>
  )
}

// Dialog Trigger Component - Can be used independently with external state
const DialogTrigger = ({
  className,
  children,
  onClick,
  testId = 'dialog-trigger',
  ...props
}: DialogTriggerProps) => {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-md px-4 py-2 font-medium transition-colors',
        'hover:bg-gray-100 focus:ring-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2',
        'dark:hover:bg-gray-700',
        className,
      )}
      onClick={onClick}
      data-testid={testId}
      {...props}
    >
      {children}
    </button>
  )
}

// Dialog Header Component
const DialogHeader = ({
  className,
  children,
  title,
  description,
  showCloseButton = true,
  onClose,
  testId = 'dialog-header',
  ...props
}: DialogHeaderProps) => {
  const { onOpenChange } = useDialog()

  const handleClose = () => {
    onClose?.()
    onOpenChange(false)
  }

  return (
    <div
      className={cn(
        dialogVariants({ ...props }),
        'border-gray-200 flex items-start justify-between border-b p-6',
        className,
      )}
      data-testid={testId}
    >
      <div className="flex flex-col gap-1">
        {title && (
          <Text type="heading" className="text-lg font-semibold">
            {title}
          </Text>
        )}
        {description && (
          <Text type="body-small" color="meteor-400">
            {description}
          </Text>
        )}
        {children}
      </div>
      {showCloseButton && (
        <button
          type="button"
          className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm dark:hover:text-white"
          onClick={handleClose}
          data-testid="dialog-close-button"
        >
          <Icon icon="Close" size="medium" />
          <span className="sr-only">Close modal</span>
        </button>
      )}
    </div>
  )
}

// Dialog Body Component
const DialogBody = ({
  className,
  children,
  testId = 'dialog-body',
  ...props
}: DialogBodyProps) => {
  return (
    <div
      className={cn(
        dialogVariants({ ...props }),
        'flex-1 space-y-4 p-6',
        className,
      )}
      data-testid={testId}
    >
      {children}
    </div>
  )
}

// Dialog Footer Component
const DialogFooter = ({
  className,
  children,
  justifyContent = 'end',
  testId = 'dialog-footer',
  ...props
}: DialogFooterProps) => {
  return (
    <div
      className={cn(
        dialogVariants({ ...props }),
        'border-gray-200 flex items-center gap-2 border-t p-6',
        `justify-${justifyContent}`,
        className,
      )}
      data-testid={testId}
    >
      {children}
    </div>
  )
}

// Attach subcomponents to main Dialog
const Dialog = DialogRoot as typeof DialogRoot & {
  Trigger: typeof DialogTrigger
  Header: typeof DialogHeader
  Body: typeof DialogBody
  Footer: typeof DialogFooter
}

Dialog.Trigger = DialogTrigger
Dialog.Header = DialogHeader
Dialog.Body = DialogBody
Dialog.Footer = DialogFooter

export { Dialog }
