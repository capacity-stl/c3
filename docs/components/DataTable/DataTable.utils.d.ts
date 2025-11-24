import { ColumnSchema } from './DataTable.props';

declare const getKeyFromDataObject: (data: {
    [key: string]: any;
}, index: number, uniqueKey?: string) => string;
declare const getKeyFromColumnSchema: <T extends object>(columnSchema: ColumnSchema<T>) => string;
export { getKeyFromColumnSchema, getKeyFromDataObject };
