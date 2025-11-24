import { ModalRootProps, ModalHeaderProps, ModalBodyProps, ModalFooterProps, ModalConfirmationProps } from './Modal.props';

declare const ModalHeader: ({ className, children, title, description, showCloseButton, onClose, p, testId, icon, iconColor, showBorder, ...props }: ModalHeaderProps) => import("react/jsx-runtime").JSX.Element;
declare const ModalBody: ({ className, children, testId, p, ...props }: ModalBodyProps) => import("react/jsx-runtime").JSX.Element;
declare const ModalFooter: ({ className, children, testId, p, showBorder, justifyContent, ...props }: ModalFooterProps) => import("react/jsx-runtime").JSX.Element;
declare const ModalConfirmation: ({ title, className, description, onConfirm, onCancel, confirmText, cancelText, testId, icon, iconColor, ...props }: ModalConfirmationProps) => import("react/jsx-runtime").JSX.Element;
declare const Modal: (({ className, children, open, onOpenChange, size, borderRadius, p, fullScreen, closeOutside, testId, ...props }: ModalRootProps) => import("react/jsx-runtime").JSX.Element | null) & {
    Header: typeof ModalHeader;
    Body: typeof ModalBody;
    Footer: typeof ModalFooter;
    Confirmation: typeof ModalConfirmation;
};
export { Modal };
