import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: {
        (props: import('./Toggle.props').ToggleProps): import("react/jsx-runtime").JSX.Element;
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
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Checked: Story;
export declare const Disabled: Story;
export declare const DisabledChecked: Story;
export declare const Error: Story;
export declare const ErrorChecked: Story;
export declare const WithoutLabel: Story;
export declare const MultipleToggles: Story;
