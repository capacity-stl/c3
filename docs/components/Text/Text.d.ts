import { TextProps } from './Text.props';

declare const Text: ({ className, as: Tag, children, ...textProps }: TextProps) => import("react/jsx-runtime").JSX.Element;
export { Text };
