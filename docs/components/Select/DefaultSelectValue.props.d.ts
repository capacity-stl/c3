import { VariantProps } from 'class-variance-authority';
import { SelectItemType, SelectItemsType, KeyMappingShape, RenderItemType } from './Select.props';

declare const rootVariants: (props?: ({} & import('class-variance-authority/types').ClassProp) | undefined) => string;
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
export interface DefaultSelectValueProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof rootVariants> {
    selected: SelectItemType | SelectItemsType;
    placeholder: string;
    dataKeyMapping: KeyMappingShape;
    selectAsChips?: boolean;
    renderItem: RenderItemType;
}
export { rootVariants, leadingIconVariants, trailingIconVariants, labelContainerVariants, labelVariants, subLabelVariants, componentVariants, };
