import { VariantProps } from 'class-variance-authority';

declare const cardVariants: (props?: ({
    w?: "20" | "0" | "1" | "full" | "screen" | "auto" | "1/4" | "1/3" | "1/2" | "2/3" | "3/4" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "14" | "16" | "24" | "28" | "32" | "36" | "40" | "44" | "48" | "52" | "56" | "60" | "64" | "72" | "80" | "96" | "13" | "15" | null | undefined;
    wMin?: "0" | "1" | "full" | "screen" | "auto" | "1/4" | "1/3" | "1/2" | "2/3" | "3/4" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | null | undefined;
    wMax?: "0" | "1" | "full" | "screen" | "auto" | "1/4" | "1/3" | "1/2" | "2/3" | "3/4" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | null | undefined;
    h?: "0" | "1" | "full" | "screen" | "auto" | "1/4" | "1/3" | "1/2" | "2/3" | "3/4" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "24" | null | undefined;
    hMin?: "0" | "1" | "full" | "screen" | "auto" | "1/4" | "1/3" | "1/2" | "2/3" | "3/4" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | null | undefined;
    hMax?: "0" | "1" | "full" | "screen" | "auto" | "1/4" | "1/3" | "1/2" | "2/3" | "3/4" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | null | undefined;
    borderRadius?: "tiny" | "small" | "medium" | "large" | null | undefined;
    boxshadow?: "tiny" | "small" | "medium" | "large" | "huge" | null | undefined;
    bgColor?: string | number | null | undefined;
    p?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | null | undefined;
    px?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | null | undefined;
    py?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | null | undefined;
    pt?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | null | undefined;
    pr?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | null | undefined;
    pb?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | null | undefined;
    pl?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface CardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {
    className?: string;
    children?: React.ReactNode;
    hoverEffect?: boolean;
    testId?: string;
    onClick?: () => void;
}
export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {
    className?: string;
    children?: React.ReactNode;
    title?: string;
    description?: string;
}
export interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {
    className?: string;
    children?: React.ReactNode;
}
export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {
    className?: string;
    children?: React.ReactNode;
    justifyContent?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
}
export { cardVariants };
