import { default as React } from 'react';
import { VariantProps } from 'class-variance-authority';

declare const gridItemVariants: (props?: ({
    colSpan?: "1" | "full" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | null | undefined;
    rowSpan?: "1" | "full" | "2" | "3" | "4" | "5" | "6" | null | undefined;
    colStart?: "1" | "auto" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | null | undefined;
    colEnd?: "1" | "auto" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | null | undefined;
    rowStart?: "1" | "auto" | "2" | "3" | "4" | "5" | "6" | "7" | null | undefined;
    rowEnd?: "1" | "auto" | "2" | "3" | "4" | "5" | "6" | "7" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface GridItemProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof gridItemVariants> {
    className?: string;
    children?: React.ReactNode;
    testId?: string;
}
export { gridItemVariants };
