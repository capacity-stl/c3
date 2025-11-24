import { StoryObj } from '@storybook/react';
import { asTypes } from './Text.props';

declare const meta: {
    title: string;
    component: ({ className, as: Tag, children, ...textProps }: import('./Text.props').TextProps) => import("react/jsx-runtime").JSX.Element;
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
        as: {
            control: {
                type: string;
            };
            options: asTypes[];
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
        align: {
            control: {
                type: string;
                options: string[];
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
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const HeadingXL: Story;
export declare const HeadingLarge: Story;
export declare const Heading: Story;
export declare const Subheading: Story;
export declare const Body: Story;
export declare const BodyLarge: Story;
export declare const BodyStrong: Story;
export declare const BodySmall: Story;
export declare const BodySmallStrong: Story;
export declare const SmallCaps: Story;
export declare const Code: Story;
export declare const CodeSmall: Story;
export declare const Truncate: Story;
