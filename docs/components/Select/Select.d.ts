import { SelectProps } from './Select.props';
import { SelectFilterEnums } from './SelectFilter.props';

declare const Select: {
    (props: SelectProps): import("react/jsx-runtime").JSX.Element;
    Sizes: {
        readonly Small: "small";
        readonly Medium: "medium";
    };
    Types: {
        readonly Standard: "standard";
        readonly Shadow: "shadow";
    };
    FilterBehaviors: typeof SelectFilterEnums;
};
export { Select };
