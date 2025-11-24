import { IconProps, asTypes } from './Icon.props';
import { Icons } from './Glyphs';

declare const Icon: {
    ({ className, icon, size, as: Tag, testId, ...iconProps }: IconProps): import("react/jsx-runtime").JSX.Element;
    Glyph: typeof Icons;
    asType: typeof asTypes;
};
export { Icon };
