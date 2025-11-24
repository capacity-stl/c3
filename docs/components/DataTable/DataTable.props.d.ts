import { VariantProps } from 'class-variance-authority';
import { fontSizes } from '../../props/font.props';

declare const rootVariants: (props?: ({} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const headerSectionVariants: (props?: ({} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const headerRowVariants: (props?: ({} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const headerCellVariants: (props?: ({} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const headerCellDefaultContentVariants: (props?: ({} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const dataRowVariants: (props?: ({
    isClickable?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const dataCellVariants: (props?: ({} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const dataCellDefaultContentVariants: (props?: ({} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const sortButtonVariants: (props?: ({
    isDefault?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const sortButtonArrowVariants: (props?: ({
    direction?: "up" | "down" | null | undefined;
    isActive?: boolean | null | undefined;
    isAscending?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const componentVariants: (props: object) => {
    rootClassString: string;
    headerSectionClassString: string;
    headerRowClassString: string;
    headerCellClassString: string;
    headerCellSorterOptionalClassString: string;
    headerCellDefaultContentClassString: string;
    dataRowClassString: string;
    dataCellClassString: string;
    dataCellDefaultContentClassString: string;
};
export interface ColumnSchema<T extends object> {
    header: null | string | React.FunctionComponent<{
        children?: React.ReactElement;
    }>;
    dataKeys?: Array<keyof T>;
    align?: 'left' | 'center' | 'right';
    headerCellClassName?: string;
    dataCellClassName?: string;
    sortKey?: keyof T;
    placeholder?: string;
    delimiter?: string;
    textType?: keyof typeof fontSizes;
    valueMapping?: {
        [key: string]: string;
    };
    keyPropMapping?: {
        [key in keyof T]: string | null | undefined;
    };
    component?: React.FunctionComponent<T>;
    tooltip?: string;
    key?: string;
}
export interface SortSchema {
    onSort: (column: string) => void;
    sortKey: string;
    isAscending: boolean;
}
export interface DataTableProps<T extends object> extends React.HTMLAttributes<HTMLTableElement>, VariantProps<typeof rootVariants> {
    columns: Array<ColumnSchema<T>>;
    data: Array<T>;
    uniqueKey?: string;
    sort?: SortSchema;
    align?: 'left' | 'center' | 'right';
    onClickRow?: (rowData: Partial<T>) => void;
    isSelectable?: boolean;
    selectedIndexes?: Array<number>;
    onSelectRow?: (rowData: T, selected: boolean) => void;
    onSelectAll?: () => void;
    borderColor?: string;
    testId?: string;
}
export { rootVariants, headerSectionVariants, headerRowVariants, headerCellVariants, headerCellDefaultContentVariants, dataRowVariants, dataCellVariants, dataCellDefaultContentVariants, sortButtonVariants, sortButtonArrowVariants, componentVariants, };
