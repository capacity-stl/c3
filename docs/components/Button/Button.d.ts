import { ButtonProps } from './Button.props';

declare const Button: {
    (props: ButtonProps): import("react/jsx-runtime").JSX.Element;
    Type: {
        readonly Primary: "primary";
        readonly Secondary: "secondary";
        readonly Minimal: "minimal";
        readonly Destructive: "destructive";
    };
    Size: {
        readonly Small: "small";
        readonly Medium: "medium";
    };
    State: {
        readonly Initial: "initial";
        readonly Loading: "loading";
        readonly Success: "success";
        readonly Error: "error";
        readonly Disabled: "disabled";
    };
    Display: {
        readonly Block: "block";
        readonly Inline: "inline-block";
    };
};
export { Button };
