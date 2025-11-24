import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: {
        (props: import('./Button.props').ButtonProps): import("react/jsx-runtime").JSX.Element;
        Type: {
            readonly Primary: "primary";
            readonly Secondary: "secondary";
            readonly Minimal: "minimal";
            readonly Destructive: "destructive";
        };
        Size: {
            readonly Small: "small";
            readonly Medium: "medium";
        };
        State: {
            readonly Initial: "initial";
            readonly Loading: "loading";
            readonly Success: "success";
            readonly Error: "error";
            readonly Disabled: "disabled";
        };
        Display: {
            readonly Block: "block";
            readonly Inline: "inline-block";
        };
    };
    tags: string[];
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
        layout: string;
    };
    argTypes: {
        type: {
            mapping: {
                readonly Primary: "primary";
                readonly Secondary: "secondary";
                readonly Minimal: "minimal";
                readonly Destructive: "destructive";
            };
            options: string[];
            control: {
                type: string;
            };
        };
        size: {
            mapping: {
                readonly Small: "small";
                readonly Medium: "medium";
            };
            options: string[];
            control: {
                type: string;
            };
        };
        state: {
            mapping: {
                readonly Initial: "initial";
                readonly Loading: "loading";
                readonly Success: "success";
                readonly Error: "error";
                readonly Disabled: "disabled";
            };
            options: string[];
            control: {
                type: string;
            };
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const ButtonSizeExamples: Story;
export declare const ButtonTypeExamples: Story;
export declare const ButtonStateExamples: Story;
