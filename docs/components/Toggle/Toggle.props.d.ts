import { VariantProps } from 'class-variance-authority';
import { default as React } from 'react';

export declare const ToggleStates: {
    readonly Default: "default";
    readonly Disabled: "disabled";
    readonly Error: "error";
};
declare const containerVariants: (props?: ({
    m?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | null | undefined;
    mx?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | null | undefined;
    my?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | null | undefined;
    mt?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | null | undefined;
    mr?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | null | undefined;
    mb?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | null | undefined;
    ml?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const trackVariants: (props?: ({
    state?: "default" | "error" | "disabled" | null | undefined;
    checked?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const thumbVariants: (props?: ({
    checked?: boolean | null | undefined;
    state?: "default" | "error" | "disabled" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const labelVariants: (props?: ({
    state?: "default" | "error" | "disabled" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const componentVariants: (props: object) => {
    containerClassString: string;
    trackClassString: string;
    thumbClassString: string;
    labelClassString: string;
};
export interface ToggleProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>, VariantProps<typeof containerVariants> {
    className?: string;
    state?: 'default' | 'disabled' | 'error';
    label?: string;
    testId?: string;
    checked?: boolean;
    defaultChecked?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export { containerVariants, trackVariants, thumbVariants, labelVariants, componentVariants, };
