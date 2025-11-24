import { default as React } from 'react';
import { ColumnSchema } from './DataTable.props';

declare const DataTableDataCell: <T extends object>({ columnSchema, dataCellClassString, dataCellDefaultContentClassString, ...props }: {
    columnSchema: ColumnSchema<T>;
    dataCellClassString?: string | undefined;
    dataCellDefaultContentClassString?: string | undefined;
}) => import("react/jsx-runtime").JSX.Element;
declare const DataTableDataRow: <T extends object>({ columns, rowData, dataRowClassString, dataCellClassString, dataCellDefaultContentClassString, onClick, rowKey, isSelectable, isSelected, onSelect, }: {
    columns: ColumnSchema<T>[];
    rowData: T;
    rowKey: string;
    dataRowClassString?: string | undefined;
    dataCellClassString?: string | undefined;
    dataCellDefaultContentClassString?: string | undefined;
    onClick: (event: React.MouseEvent<HTMLTableRowElement>) => void;
    onSelect: (event: React.MouseEvent<HTMLTableRowElement>) => void;
    isSelectable?: boolean | undefined;
    isSelected?: boolean | undefined;
}) => import("react/jsx-runtime").JSX.Element;
export { DataTableDataRow, DataTableDataCell };
