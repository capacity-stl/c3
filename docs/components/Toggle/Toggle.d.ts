import { ToggleProps } from './Toggle.props';

declare const Toggle: {
    (props: ToggleProps): import("react/jsx-runtime").JSX.Element;
    State: {
        readonly Default: "default";
        readonly Disabled: "disabled";
        readonly Error: "error";
    };
};
export { Toggle };
