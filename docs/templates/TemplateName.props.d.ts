import { VariantProps } from 'class-variance-authority';
import { default as React } from 'react';

declare const TemplateNameVariants: (props?: ({
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
declare enum asTypes {
    div = "div",
    span = "span"
}
export interface TemplateNameProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof TemplateNameVariants> {
    className?: string;
    children?: React.ReactNode;
    as?: asTypes | keyof React.JSX.IntrinsicElements;
    asChild?: boolean;
    testId?: string;
}
export { TemplateNameVariants, asTypes };
