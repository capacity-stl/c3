import { PaginationProps } from './Pagination.props';
import { Icons } from '../Icon/Glyphs';

interface PaginationPreviousNextComponentProps {
    className?: string;
    icon?: keyof typeof Icons;
    onClick?: () => void;
    disabled?: boolean;
    nextPreviousType?: 'next' | 'previous';
    bgColor?: string;
    borderColor?: string;
    textColor?: string;
    hoverBgColor?: string;
    hoverBorderColor?: string;
    hoverTextColor?: string;
}
declare const PaginationPreviousNext: ({ className, icon, onClick, disabled, nextPreviousType, bgColor, borderColor, textColor, hoverBgColor, hoverBorderColor, hoverTextColor, ...props }: PaginationPreviousNextComponentProps & PaginationProps) => import("react/jsx-runtime").JSX.Element;
export { PaginationPreviousNext };
