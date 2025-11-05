import { createContext, useContext, useEffect, useRef } from 'react'
import { cn } from '@utils/cn'
import {
  ModalRootProps,
  ModalHeaderProps,
  ModalBodyProps,
  ModalFooterProps,
  modalVariants,
  ModalConfirmationProps,
} from './Modal.props'
import { Text } from '@components/Text/Text'
import { Icon } from '@components/Icon/Icon'
import { Flex } from '@components/Flex/Flex'
import { Button } from '@components/Button/Button'

// Context for modal state management
interface ModalContextType {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const ModalContext = createContext<ModalContextType | null>(null)

const useModal = () => {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error('Modal components must be used within a ModalRoot')
  }
  return context
}

// Modal Root Component
const ModalRoot = ({
  className,
  children,
  open = false,
  onOpenChange,
  size = 'sm',
  borderRadius = 'medium',
  p = null,
  fullScreen = false,
  closeOutside = true,
  testId = 'modal-root',
  ...props
}: ModalRootProps) => {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && open) {
        onOpenChange?.(false)
      }
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (
        closeOutside &&
        modalRef.current &&
        event.target === modalRef.current
      ) {
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
  }, [open, onOpenChange, closeOutside])

  if (!open) return null

  return (
    <ModalContext.Provider
      value={{ open, onOpenChange: onOpenChange || (() => {}) }}
    >
      <div
        ref={modalRef}
        className={cn(
          'fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-20',
          fullScreen && 'p-0',
          className,
        )}
        data-testid={testId}
        role="dialog"
        aria-modal="true"
      >
        <Flex
          className={cn(
            !fullScreen && modalVariants({ size, ...props }),
            fullScreen ? 'h-full w-full' : 'relative w-full',
            'bg-white shadow-lg',
          )}
          onClick={(e) => e.stopPropagation()}
          borderRadius={fullScreen ? undefined : borderRadius}
          p={fullScreen ? undefined : p}
          direction="col"
        >
          {children}
        </Flex>
      </div>
    </ModalContext.Provider>
  )
}

// Modal Header Component
const ModalHeader = ({
  className,
  children,
  title,
  description,
  showCloseButton = true,
  onClose,
  p = '4',
  testId = 'modal-header',
  icon,
  iconColor,
  showBorder = true,
  ...props
}: ModalHeaderProps) => {
  const { onOpenChange } = useModal()

  const handleClose = () => {
    onClose?.()
    onOpenChange(false)
  }

  return (
    <Flex
      className={cn(
        modalVariants({ ...props }),
        'flex items-start justify-between',

        className,
      )}
      data-testid={testId}
      borderBottom={showBorder ? 'default' : 'transparent'}
      p={p}
    >
      <div className="flex flex-col gap-1">
        {title && (
          <Flex direction="row" gap="2" align="center">
            {icon && <Icon icon={icon} size="small" color={iconColor} />}
            <Text
              type="heading"
              className="text-lg font-semibold"
              color="night"
            >
              {title}
            </Text>
          </Flex>
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
          onClick={handleClose}
          data-testid="modal-close-button"
          type="button"
          className="ml-auto inline-flex items-center rounded-sm bg-meteor-100 p-1.5 text-sm text-meteor-400"
        >
          <Icon icon="Close" size="small" />

          <span className="sr-only">Close modal</span>
        </button>
      )}
    </Flex>
  )
}

const ModalBody = ({
  className,
  children,
  testId = 'modal-body',
  p = '4',
  ...props
}: ModalBodyProps) => {
  return (
    <Flex
      className={cn(modalVariants({ ...props }), 'flex-1 space-y-4', className)}
      data-testid={testId}
      p={p}
    >
      {children}
    </Flex>
  )
}

const ModalFooter = ({
  className,
  children,
  testId = 'modal-footer',
  p = '4',
  showBorder = true,
  justifyContent = 'end',
  ...props
}: ModalFooterProps) => {
  return (
    <Flex
      className={cn(
        modalVariants({ ...props }),
        showBorder && 'border-t border-meteor-200',
        className,
      )}
      data-testid={testId}
      p={p}
      direction="row"
      justify={justifyContent}
      gap="2"
    >
      {children}
    </Flex>
  )
}

const ModalConfirmation = ({
  title,
  className,
  description,
  onConfirm,
  onCancel,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  testId = 'modal-confirmation',
  icon = 'Alert',
  iconColor = 'mars-300',
  ...props
}: ModalConfirmationProps) => {
  const { onOpenChange } = useModal()

  const handleConfirm = () => {
    onConfirm?.()
    onOpenChange(false)
  }

  const handleCancel = () => {
    onCancel?.()
    onOpenChange(false)
  }

  return (
    <Flex
      className={cn(modalVariants({ ...props }), className)}
      direction="col"
      gap={null}
      data-testid={testId}
      p="6"
    >
      <Flex direction="row" justify="end">
        <Button
          onClick={() => onOpenChange(false)}
          data-testid="modal-close-button"
        >
          <Icon icon="Close" size="small" />
          <span className="sr-only">Close modal</span>
        </Button>
      </Flex>
      <Flex direction="col" gap="2" align="center" mb="8">
        {icon && <Icon icon={icon} size="large" color={iconColor} />}
        <Text
          type="heading"
          className="text-lg font-semibold"
          color="night"
          mt="4"
        >
          {title}
        </Text>

        <Text type="body" color="night">
          {description}
        </Text>
      </Flex>
      <ModalFooter showBorder={false} justifyContent="center">
        {onCancel && (
          <Button
            onClick={handleCancel}
            data-testid="modal-confirmation-cancel"
            type="secondary"
          >
            {cancelText}
          </Button>
        )}
        {onConfirm && (
          <Button
            onClick={handleConfirm}
            data-testid="modal-confirmation-confirm"
            type="destructive"
          >
            {confirmText}
          </Button>
        )}
      </ModalFooter>
    </Flex>
  )
}

// Attach subcomponents to main Modal
const Modal = ModalRoot as typeof ModalRoot & {
  Header: typeof ModalHeader
  Body: typeof ModalBody
  Footer: typeof ModalFooter
  Confirmation: typeof ModalConfirmation
}

Modal.Header = ModalHeader
Modal.Body = ModalBody
Modal.Footer = ModalFooter
Modal.Confirmation = ModalConfirmation

export { Modal }
