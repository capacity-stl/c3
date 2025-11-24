import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: (props: import('./CollapsibleDrawer.props').CollapsibleDrawerProps) => import("react/jsx-runtime").JSX.Element;
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
        layout: string;
        controls: {
            exclude: string[];
        };
    };
    tags: string[];
    argTypes: {
        bgColor: {
            options: string[];
            mapping: {
                'Not Defined': undefined;
            };
            control: {
                type: string;
            };
            table: {
                type: {
                    summary: string;
                };
                defaultValue: {
                    summary: string;
                };
            };
        };
        borderColor: {
            options: string[];
            mapping: {
                'Not Defined': undefined;
            };
            control: {
                type: string;
            };
            table: {
                type: {
                    summary: string;
                };
                defaultValue: {
                    summary: string;
                };
            };
        };
        dropToSide: {
            mapping: {
                [key: string]: "left" | "right";
            };
            options: string[];
            control: {
                type: string;
            };
            table: {
                type: {
                    summary: string;
                };
                defaultValue: {
                    summary: string;
                };
            };
        };
        openSectionId: {
            control: {
                type: string;
            };
            table: {
                type: {
                    summary: string;
                };
                defaultValue: {
                    summary: string;
                };
            };
        };
        w: {
            control: {
                type: string;
            };
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
export declare const PageExample: Story;
