import { VariantProps } from 'class-variance-authority';
import { default as React } from 'react';
import { Icons } from '../Icon/Glyphs';
import { PaginationColorTheme } from './Pagination.defaults';

declare const PaginationVariants: (props?: ({
    border?: "default" | "error" | "focus" | "focusWithin" | "focused" | "focusedWithin" | "dashed" | "transparent" | null | undefined;
    borderTop?: "default" | "error" | "focus" | "focusWithin" | "dashed" | "transparent" | null | undefined;
    borderBottom?: "default" | "error" | "focus" | "focusWithin" | "dashed" | "transparent" | null | undefined;
    bgColor?: string | number | null | undefined;
    w?: "20" | "0" | "1" | "full" | "screen" | "auto" | "1/4" | "1/3" | "1/2" | "2/3" | "3/4" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "14" | "16" | "24" | "28" | "32" | "36" | "40" | "44" | "48" | "52" | "56" | "60" | "64" | "72" | "80" | "96" | "13" | "15" | null | undefined;
    wMin?: "0" | "1" | "full" | "screen" | "auto" | "1/4" | "1/3" | "1/2" | "2/3" | "3/4" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | null | undefined;
    wMax?: "0" | "1" | "full" | "screen" | "auto" | "1/4" | "1/3" | "1/2" | "2/3" | "3/4" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | null | undefined;
    h?: "0" | "1" | "full" | "screen" | "auto" | "1/4" | "1/3" | "1/2" | "2/3" | "3/4" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "24" | null | undefined;
    hMin?: "0" | "1" | "full" | "screen" | "auto" | "1/4" | "1/3" | "1/2" | "2/3" | "3/4" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | null | undefined;
    hMax?: "0" | "1" | "full" | "screen" | "auto" | "1/4" | "1/3" | "1/2" | "2/3" | "3/4" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | null | undefined;
    p?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | null | undefined;
    px?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | null | undefined;
    py?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | null | undefined;
    pt?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | null | undefined;
    pr?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | null | undefined;
    pb?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | null | undefined;
    pl?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | null | undefined;
    m?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | null | undefined;
    mx?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | null | undefined;
    my?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | null | undefined;
    mt?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | null | undefined;
    mr?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | null | undefined;
    mb?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | null | undefined;
    ml?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
interface PaginationConfig {
    totalPages?: number;
    currentPage?: number;
    setCurrentPage?: (page: number) => void;
    totalItemsShown?: number;
    siblingRange?: number;
}
interface PaginationColors extends Partial<PaginationColorTheme> {
    activeBgColor?: string;
    activeTextColor?: string;
    activeBorderColor?: string;
    itemBgColor?: string;
    itemTextColor?: string;
    itemBorderColor?: string;
    hoverBgColor?: string;
    hoverTextColor?: string;
    hoverBorderColor?: string;
    nextPreviousBgColor?: string;
    nextPreviousBorderColor?: string;
    nextPreviousTextColor?: string;
    nextPreviousHoverBgColor?: string;
    nextPreviousHoverBorderColor?: string;
    nextPreviousHoverTextColor?: string;
    textColor?: string;
    borderColor?: string;
}
interface PaginationItemProps {
    value?: number;
    isCurrent?: boolean;
    onItemClick?: () => void;
}
interface PaginationNavProps {
    icon?: keyof typeof Icons;
    disabled?: boolean;
    nextPreviousType?: 'next' | 'previous';
}
export interface PaginationProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof PaginationVariants>, PaginationConfig, PaginationColors, PaginationItemProps, PaginationNavProps {
    className?: string;
    children?: React.ReactNode;
    testId?: string;
    active?: boolean;
}
export { PaginationVariants };
