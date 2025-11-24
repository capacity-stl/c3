import { VariantProps } from 'class-variance-authority';
import { SelectFilterEnums } from './SelectFilter.props';

export declare const SelectSizes: {
    readonly Small: "small";
    readonly Medium: "medium";
};
export declare const SelectTypes: {
    readonly Standard: "standard";
    readonly Shadow: "shadow";
};
export declare const SelectItemRenderingContext: {
    readonly SelectedSingle: "selected";
    readonly SelectedMultiple: "selectedaslist";
    readonly SelectedChip: "selectedaschip";
    readonly Flyout: "inflyout";
};
declare const rootVariants: (props?: ({
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
    type?: "standard" | "shadow" | null | undefined;
    size?: "small" | "medium" | null | undefined;
    hasLeadingIcon?: boolean | null | undefined;
    hasTrailingIcon?: boolean | null | undefined;
    isError?: boolean | null | undefined;
    isOpen?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const componentVariants: (props: object) => {
    rootClassString: string;
};
export type KeyedDataObject = {
    [key: string]: string | number | boolean | object;
};
export type SelectItemType = string | number | boolean | KeyedDataObject;
export type SelectItemsType = Array<string> | Array<number> | Array<boolean> | Array<KeyedDataObject>;
export type ItemToStringType = (item: SelectItemType) => string;
export type RenderItemType = (props: {
    item: SelectItemType;
    classNames: {
        rootClassString: string;
        leadingIconClassString: string;
        trailingIconClassString: string;
        labelContainerClassString: string;
        labelClassString: string;
        subLabelClassString: string;
    };
    renderContext: (typeof SelectItemRenderingContext)[keyof typeof SelectItemRenderingContext];
    isSelected: boolean;
    dataKeyMapping: KeyMappingShape;
}) => JSX.Element;
export type KeyMappingShape = {
    label: string;
    value?: string;
    subLabel?: string;
    leadingIcon?: string;
    trailingIcon?: string;
};
export interface SelectProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>, VariantProps<typeof rootVariants> {
    items: SelectItemsType;
    onChange: (item: SelectItemType | SelectItemsType) => void;
    value?: SelectItemType | SelectItemsType;
    placeholder?: string;
    className?: string;
    multi?: boolean;
    size?: (typeof SelectSizes)[keyof typeof SelectSizes];
    type?: (typeof SelectTypes)[keyof typeof SelectTypes];
    isError?: boolean;
    isLoading?: boolean;
    selectAsChips?: boolean;
    dataKeyMapping?: KeyMappingShape;
    renderItem?: RenderItemType;
    itemToString?: ItemToStringType;
    filterBoxDirect?: boolean;
    filterBehavior?: SelectFilterEnums;
    filterPlaceholder?: string;
    filterValue?: string;
    onFilterValueChange?: (filterValue: string) => void;
    testId?: string;
}
export { rootVariants, componentVariants };
