import { VariantProps } from 'class-variance-authority';

declare const rootVariants: (props?: ({
    type?: null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const componentVariants: (props: object) => {
    rootClassString: string;
    inputClassString: string;
};
export declare enum SelectFilterEnums {
    None = "none",
    Filter = "filter",
    AdaptiveFilter = "adaptiveFilter",
    Search = "search"
}
export interface SelectFilterProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>, VariantProps<typeof rootVariants> {
    filterBehavior: SelectFilterEnums;
    filterValue?: string;
    filterPlaceholder: string;
    itemCount: number;
    onChange?: (arg: string) => void;
}
export { rootVariants, componentVariants };
