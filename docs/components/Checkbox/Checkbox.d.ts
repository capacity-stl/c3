import { CheckboxProps } from './Checkbox.props';

declare const Checkbox: {
    (props: CheckboxProps): import("react/jsx-runtime").JSX.Element;
    State: {
        readonly Default: "default";
        readonly Disabled: "disabled";
        readonly Error: "error";
    };
};
export { Checkbox };
