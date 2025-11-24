import { DataTableProps } from './DataTable.props';

declare const DataTable: <T extends object>({ columns, data, className, uniqueKey, sort, onClickRow, isSelectable, selectedIndexes, onSelectRow, onSelectAll, ...styleProps }: DataTableProps<T>) => import("react/jsx-runtime").JSX.Element;
export { DataTable };
