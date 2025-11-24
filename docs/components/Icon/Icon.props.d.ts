import { VariantProps } from 'class-variance-authority';
import { Icons } from './Glyphs';

declare enum asTypes {
    div = "div",
    span = "span"
}
declare const iconVariants: (props?: ({
    as?: "div" | "span" | null | undefined;
    color?: string | number | null | undefined;
    size?: "tiny" | "small" | "medium" | "large" | "huge" | "20" | "0" | "1" | "full" | "screen" | "auto" | "1/4" | "1/3" | "1/2" | "2/3" | "3/4" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "14" | "16" | "24" | "28" | "32" | "36" | "40" | "44" | "48" | "52" | "56" | "60" | "64" | "72" | "80" | "96" | "xsmall" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type IconProps = VariantProps<typeof iconVariants> & React.ComponentProps<typeof iconVariants> & {
    icon: keyof typeof Icons;
    as?: React.ElementType;
    testId?: string;
};
export { iconVariants, asTypes };
