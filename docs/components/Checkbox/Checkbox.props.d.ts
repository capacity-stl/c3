import { VariantProps } from 'class-variance-authority';
import { default as React } from 'react';

export declare const CheckboxStates: {
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
declare const checkboxVariants: (props?: ({
    state?: "default" | "error" | "disabled" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const labelVariants: (props?: ({
    state?: "default" | "error" | "disabled" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const componentVariants: (props: object) => {
    containerClassString: string;
    checkboxClassString: string;
    labelClassString: string;
};
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>, VariantProps<typeof containerVariants> {
    className?: string;
    state?: 'default' | 'disabled' | 'error';
    label?: string;
    testId?: string;
    checked?: boolean;
    defaultChecked?: boolean;
    indeterminate?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export { containerVariants, checkboxVariants, labelVariants, componentVariants };
