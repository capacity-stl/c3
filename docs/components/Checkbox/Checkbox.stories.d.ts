import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: {
        (props: import('./Checkbox.props').CheckboxProps): import("react/jsx-runtime").JSX.Element;
        State: {
            readonly Default: "default";
            readonly Disabled: "disabled";
            readonly Error: "error";
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
    tags: string[];
    argTypes: {
        state: {
            control: string;
            options: ("default" | "error" | "disabled")[];
            description: string;
            defaultValue: "default";
        };
        label: {
            control: string;
            description: string;
        };
        checked: {
            control: string;
            description: string;
        };
        defaultChecked: {
            control: string;
            description: string;
        };
        indeterminate: {
            control: string;
            description: string;
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Checked: Story;
export declare const Disabled: Story;
export declare const DisabledChecked: Story;
export declare const Error: Story;
export declare const WithoutLabel: Story;
export declare const Indeterminate: Story;
export declare const IndeterminateError: Story;
export declare const IndeterminateDisabled: Story;
export declare const MultipleCheckboxes: Story;
export declare const ParentChildExample: Story;
