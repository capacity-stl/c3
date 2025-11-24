import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: {
        (props: import('./TextBox.props').TextBoxProps): import("react/jsx-runtime").JSX.Element;
        Sizes: {
            [key: string]: "small" | "medium";
        };
        Types: {
            [key: string]: "standard" | "shadow";
        };
    };
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
        type: {
            mapping: {
                [key: string]: "standard" | "shadow";
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
        size: {
            mapping: {
                [key: string]: "small" | "medium";
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
        color: {
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
        leadingIcon: {
            mapping: {
                'No Icon': null;
            };
            options: string[];
            control: {
                type: string;
            };
            table: {
                type: {
                    summary: string;
                };
            };
        };
        leadingIconColor: {
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
        trailingIcon: {
            mapping: {
                'No Icon': null;
            };
            options: string[];
            control: {
                type: string;
            };
            table: {
                type: {
                    summary: string;
                };
            };
        };
        trailingIconColor: {
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
        placeholder: {
            table: {
                type: {
                    summary: string;
                };
            };
        };
        isError: {
            options: boolean[];
        };
        hasLeadingIcon: {
            control: boolean;
            table: {
                type: {
                    summary: string;
                };
                disabled: boolean;
            };
        };
        hasTrailingIcon: {
            control: boolean;
            table: {
                type: {
                    summary: string;
                };
                disabled: boolean;
            };
        };
        testId: {
            control: boolean;
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Search: Story;
export declare const MediumInput: Story;
export declare const ErrorState: Story;
