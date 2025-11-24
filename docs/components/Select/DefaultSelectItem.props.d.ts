import { VariantProps } from 'class-variance-authority';
import { KeyMappingShape, SelectItemType, RenderItemType } from './Select.props';

declare const rootVariants: (props?: ({
    isActive?: boolean | null | undefined;
    isSelected?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const leadingIconVariants: (props?: ({} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const trailingIconVariants: (props?: ({} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const labelContainerVariants: (props?: ({} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const labelVariants: (props?: ({} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const subLabelVariants: (props?: ({} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const componentVariants: (props: object) => {
    rootClassString: string;
    leadingIconClassString: string;
    trailingIconClassString: string;
    labelContainerClassString: string;
    labelClassString: string;
    subLabelClassString: string;
};
export interface DefaultSelectItemProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onSelect'>, VariantProps<typeof rootVariants> {
    dataKeyMapping: KeyMappingShape;
    index: number;
    item: SelectItemType;
    onHover: (index: number) => void;
    onSelect: (item: SelectItemType, index: number, isSelected: boolean) => void;
    renderItem: RenderItemType;
    isActive?: boolean;
    isSelected?: boolean;
}
export { rootVariants, leadingIconVariants, trailingIconVariants, labelContainerVariants, labelVariants, subLabelVariants, componentVariants, };
