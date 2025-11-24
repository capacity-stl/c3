import { ColumnSchema } from './DataTable.props';

type QueueExampleDataShape = {
    slug: string;
    uuid: string;
    title: string;
    description: string;
};
declare const queueExampleColumns: ColumnSchema<QueueExampleDataShape>[];
export { queueExampleColumns };
