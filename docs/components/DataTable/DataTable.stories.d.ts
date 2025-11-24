import { StoryObj } from '@storybook/react';
import { SimpleExampleDataShape, QueueExampleDataShape } from './DataTable.stories.data';

declare const meta: {
    title: string;
    component: ({ columns, data, className, uniqueKey, sort, onClickRow, isSelectable, selectedIndexes, onSelectRow, onSelectAll, ...styleProps }: import('./DataTable.props').DataTableProps<SimpleExampleDataShape | QueueExampleDataShape>) => import("react/jsx-runtime").JSX.Element;
    tags: string[];
    argTypes: {
        columns: {
            description: string;
            table: {
                type: {
                    summary: string;
                    detail: string;
                };
            };
        };
        data: {
            description: string;
            table: {
                type: {
                    summary: string;
                };
            };
        };
        uniqueKey: {
            description: string;
            table: {
                type: {
                    summary: string;
                };
            };
        };
        sort: {
            description: string;
            table: {
                type: {
                    summary: string;
                };
            };
        };
        onClickRow: {
            description: string;
            table: {
                type: {
                    summary: string;
                };
            };
        };
        isSelectable: {
            description: string;
            table: {
                type: {
                    summary: string;
                };
            };
        };
        selectedIndexes: {
            description: string;
            table: {
                type: {
                    summary: string;
                };
            };
        };
        onSelectRow: {
            description: string;
            table: {
                type: {
                    summary: string;
                };
            };
        };
        onSelectAll: {
            description: string;
            table: {
                type: {
                    summary: string;
                };
            };
        };
        borderColor: {
            description: string;
            table: {
                type: {
                    summary: string;
                };
            };
        };
        testId: {
            description: string;
            table: {
                type: {
                    summary: string;
                };
            };
        };
        className: {
            description: string;
            table: {
                type: {
                    summary: string;
                };
            };
        };
    };
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
        layout: string;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Simple: Story;
export declare const TicketQueue: Story;
