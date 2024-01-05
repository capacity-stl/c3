/// <reference types="react" />
import { type VariantProps } from "class-variance-authority";
declare const buttonVariants: (props?: ({
    variant?: "primary" | "secondary" | "destructive" | "success" | "link" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
}
declare function ButtonTW({ className, variant, children, ...props }: ButtonProps): import("react/jsx-runtime").JSX.Element;
export { ButtonTW };
