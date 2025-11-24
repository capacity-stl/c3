import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: ({ className, children, content, testId, position, offsetX, offsetY, gap, ...props }: import('./Tooltip.props').TooltipProps) => import("react/jsx-runtime").JSX.Element;
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
        position: {
            options: string[];
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
        content: {
            description: string;
            table: {
                type: {
                    summary: string;
                };
            };
        };
        children: {
            description: string;
            table: {
                type: {
                    summary: string;
                };
            };
        };
        offsetX: {
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
        offsetY: {
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
        gap: {
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
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
