import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: ({ className, children, htmlFor, required, disabled, testId, ...labelProps }: import('./Label.props').LabelProps) => import("react/jsx-runtime").JSX.Element;
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
        controls: {
            exclude: string[];
        };
    };
    tags: string[];
    argTypes: {
        children: {
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
        htmlFor: {
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
        type: {
            control: {
                type: string;
            };
            options: string[];
            table: {
                type: {
                    summary: string;
                };
                defaultValue: {
                    summary: string;
                };
            };
        };
        color: {
            control: {
                type: string;
            };
            options: string[];
            table: {
                type: {
                    summary: string;
                };
                defaultValue: {
                    summary: string;
                };
            };
        };
        required: {
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
        disabled: {
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
export declare const Required: Story;
export declare const Disabled: Story;
export declare const RequiredAndDisabled: Story;
export declare const SmallLabel: Story;
export declare const StrongLabel: Story;
export declare const CustomColor: Story;
