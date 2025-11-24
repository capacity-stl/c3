import { ColumnSchema, SortSchema } from './DataTable.props';

declare const DataTableHeaderCell: <T extends object>({ columnSchema, headerCellClassString, headerCellDefaultContentClassString, headerCellSorterOptionalClassString, sort, }: {
    columnSchema: ColumnSchema<T>;
    headerCellClassString?: string | undefined;
    headerCellDefaultContentClassString?: string | undefined;
    headerCellSorterOptionalClassString?: string | undefined;
    sort?: SortSchema | undefined;
}) => import("react/jsx-runtime").JSX.Element;
declare const DataTableHeaderRow: <T extends object>({ columns, selectState, sort, headerSectionClassString, headerRowClassString, headerCellClassString, headerCellDefaultContentClassString, headerCellSorterOptionalClassString, isSelectable, onSelectAll, }: {
    columns: ColumnSchema<T>[];
    selectState: number;
    sort?: SortSchema | undefined;
    headerSectionClassString?: string | undefined;
    headerRowClassString?: string | undefined;
    headerCellClassString?: string | undefined;
    headerCellDefaultContentClassString?: string | undefined;
    headerCellSorterOptionalClassString?: string | undefined;
    isSelectable?: boolean | undefined;
    onSelectAll?: (() => void) | undefined;
}) => import("react/jsx-runtime").JSX.Element;
export { DataTableHeaderRow, DataTableHeaderCell };
