import { VariantProps } from 'class-variance-authority';
import { Icons } from '../Icon/Glyphs';

export declare const BUTTON_TYPES: {
    readonly Primary: "primary";
    readonly Secondary: "secondary";
    readonly Minimal: "minimal";
    readonly Destructive: "destructive";
};
export declare const BUTTON_SIZES: {
    readonly Small: "small";
    readonly Medium: "medium";
};
export declare const BUTTON_STATES: {
    readonly Initial: "initial";
    readonly Loading: "loading";
    readonly Success: "success";
    readonly Error: "error";
    readonly Disabled: "disabled";
};
export declare const BUTTON_DISPLAY_STYLES: {
    readonly Block: "block";
    readonly Inline: "inline-block";
};
export declare const buttonTextSizeMapping: {
    readonly small: "label-small-strong";
    readonly medium: "body-small-strong";
};
export declare const buttonIconSizeMapping: {
    readonly small: "tiny";
    readonly medium: "small";
};
export declare const buttonBadgeSizeMapping: {
    readonly small: "large";
    readonly medium: "huge";
};
export declare const buttonStateIconMapping: {
    readonly loading: Icons.Spinner;
    readonly error: Icons.Close;
    readonly success: Icons.Check;
    readonly initial: null;
    readonly disabled: null;
};
declare const buttonVariants: (props?: ({
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
    size?: "small" | "medium" | null | undefined;
    type?: "primary" | "secondary" | "minimal" | "destructive" | null | undefined;
    state?: "initial" | "error" | "disabled" | "loading" | "success" | null | undefined;
    display?: "block" | "inline-block" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const buttonBodyVariants: (props?: ({
    size?: "small" | "medium" | null | undefined;
    type?: "primary" | "secondary" | "minimal" | "destructive" | null | undefined;
    state?: "initial" | "error" | "disabled" | "loading" | "success" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const overlayVariants: (props?: ({
    type?: "primary" | "secondary" | "minimal" | "destructive" | null | undefined;
    state?: "initial" | "error" | "disabled" | "loading" | "success" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const overlayIconVariants: (props?: ({
    state?: "initial" | "error" | "disabled" | "loading" | "success" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const textClassString = "first:ml-1 last:mr-1";
declare const componentVariants: (props: object) => {
    buttonClassString: string;
    buttonBodyClassString: string;
    overlayClassString: string;
    overlayIconClassString: string;
    textClassString: string;
};
export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    className?: string;
    testId?: string;
    type?: (typeof BUTTON_TYPES)[keyof typeof BUTTON_TYPES];
    size?: (typeof BUTTON_SIZES)[keyof typeof BUTTON_SIZES];
    state?: (typeof BUTTON_STATES)[keyof typeof BUTTON_STATES];
    display?: (typeof BUTTON_DISPLAY_STYLES)[keyof typeof BUTTON_DISPLAY_STYLES];
}
export { componentVariants, buttonVariants, buttonBodyVariants, overlayVariants, overlayIconVariants, textClassString, };
