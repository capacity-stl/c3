import { VariantProps } from 'class-variance-authority';

export declare const TextBoxSizes: {
    [key: string]: "small" | "medium";
};
export declare const TextBoxTypes: {
    [key: string]: "standard" | "shadow";
};
export declare const iconSizeMapping: {
    [key: string]: "tiny" | "small";
};
declare const rootVariants: (props?: ({
    w?: "20" | "0" | "1" | "full" | "screen" | "auto" | "1/4" | "1/3" | "1/2" | "2/3" | "3/4" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "14" | "16" | "24" | "28" | "32" | "36" | "40" | "44" | "48" | "52" | "56" | "60" | "64" | "72" | "80" | "96" | "13" | "15" | null | undefined;
    wMin?: "0" | "1" | "full" | "screen" | "auto" | "1/4" | "1/3" | "1/2" | "2/3" | "3/4" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | null | undefined;
    wMax?: "0" | "1" | "full" | "screen" | "auto" | "1/4" | "1/3" | "1/2" | "2/3" | "3/4" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | null | undefined;
    m?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | null | undefined;
    mx?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | null | undefined;
    my?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | null | undefined;
    mt?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | null | undefined;
    mr?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | null | undefined;
    mb?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | null | undefined;
    ml?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | null | undefined;
    type?: string | number | null | undefined;
    size?: string | number | null | undefined;
    hasLeadingIcon?: boolean | null | undefined;
    hasTrailingIcon?: boolean | null | undefined;
    isError?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const inputVariants: (props?: ({
    color?: string | number | null | undefined;
    size?: string | number | null | undefined;
    hasLeadingIcon?: boolean | null | undefined;
    hasTrailingIcon?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const iconContainerVariants: (props?: ({
    size?: string | number | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const componentVariants: (props: object) => {
    rootClassString: string;
    inputClassString: string;
    iconContainerClassString: string;
};
export interface TextBoxProps extends React.HTMLAttributes<HTMLInputElement>, VariantProps<typeof rootVariants> {
    className?: string;
    color?: string;
    isError?: boolean;
    leadingIcon?: string;
    leadingIconColor?: string;
    placeholder?: string;
    size?: 'small' | 'medium';
    testId?: string;
    trailingIcon?: string;
    trailingIconColor?: string;
    value?: string;
}
export { rootVariants, inputVariants, iconContainerVariants, componentVariants };
