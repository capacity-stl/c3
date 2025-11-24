import { StoryObj } from '@storybook/react';

interface InteractionType {
    text: string;
}
declare const meta: {
    title: string;
    component: {
        ({ className, items, noItems, renderItem, header, dense, divider, selectedItems, onItemClick, loading, ...listProps }: import('./List.props').ListProps<InteractionType>): import("react/jsx-runtime").JSX.Element;
        Item: <T>({ item, renderItem, dense, onItemClick, isSelected, }: import('./List.props').ListItemProps<T>) => import("react/jsx-runtime").JSX.Element;
    };
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
        layout: string;
    };
    tags: string[];
    argTypes: {
        items: {
            description: string;
        };
        renderItem: {
            description: string;
            table: {
                type: {
                    summary: string;
                };
            };
        };
        dense: {
            description: string;
            table: {
                type: {
                    summary: string;
                };
            };
        };
        selectedItems: {
            description: string;
            table: {
                type: {
                    summary: string;
                };
            };
        };
        onItemClick: {
            description: string;
            table: {
                type: {
                    summary: string;
                };
            };
        };
        noItems: {
            description: string;
            table: {
                type: {
                    summary: string;
                };
            };
            control: {
                type: string;
            };
        };
        header: {
            description: string;
            table: {
                type: {
                    summary: string;
                };
            };
            control: {
                type: string;
            };
        };
        divider: {
            description: string;
            table: {
                type: {
                    summary: string;
                };
            };
        };
        loading: {
            description: string;
            table: {
                type: {
                    summary: string;
                };
            };
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const ListDefault: Story;
export declare const ListCustomized: Story;
export declare const ListEmpty: Story;
