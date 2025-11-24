import { TextBoxProps } from './TextBox.props';

declare const TextBox: {
    (props: TextBoxProps): import("react/jsx-runtime").JSX.Element;
    Sizes: {
        [key: string]: "small" | "medium";
    };
    Types: {
        [key: string]: "standard" | "shadow";
    };
};
export { TextBox };
