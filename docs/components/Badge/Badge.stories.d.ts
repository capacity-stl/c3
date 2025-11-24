import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: ({ className, children, dense, color, onRemove, value, icon, shape, size, testId, }: import('./Badge.props').BadgeProps) => import("react/jsx-runtime").JSX.Element;
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
        color: {
            options: string[];
            mapping: {
                'Not Defined': undefined;
            };
            control: {
                type: string;
            };
            description: string;
            table: {
                type: {
                    summary: string;
                };
                defaultValue: {
                    summary: string;
                };
            };
        };
        icon: {
            options: string[];
            mapping: {
                'Not Defined': undefined;
            };
            control: {
                type: string;
            };
            description: string;
            table: {
                type: {
                    summary: string;
                };
            };
        };
        shape: {
            options: string[];
            mapping: {
                'Not Defined': undefined;
            };
            control: {
                type: string;
            };
            description: string;
            table: {
                type: {
                    summary: string;
                };
                defaultValue: {
                    summary: string;
                };
            };
        };
        size: {
            options: string[];
            mapping: {
                'Not Defined': undefined;
            };
            control: {
                type: string;
            };
            description: string;
            table: {
                type: {
                    summary: string;
                };
                defaultValue: {
                    summary: string;
                };
            };
        };
        value: {
            description: string;
            table: {
                type: {
                    summary: string;
                };
                defaultValue: {
                    summary: string;
                };
            };
        };
        onRemove: {
            description: string;
            table: {
                type: {
                    summary: string;
                };
            };
            defaultValue: {
                summary: string;
            };
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Size: Story;
export declare const Dense: Story;
export declare const Shape: Story;
export declare const Color: Story;
export declare const Icon: Story;
export declare const RichContent: Story;
export declare const OnRemove: Story;
