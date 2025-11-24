import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: {
        ({ className, children, p, borderRadius, hoverEffect, bgColor, onClick, testId, ...cardProps }: import('./Card.props').CardProps): import("react/jsx-runtime").JSX.Element;
        Header: ({ className, children, title, description, ...cardProps }: import('./Card.props').CardHeaderProps) => import("react/jsx-runtime").JSX.Element;
        Body: ({ className, children, ...cardProps }: import('./Card.props').CardBodyProps) => import("react/jsx-runtime").JSX.Element;
        Footer: ({ className, children, justifyContent, ...cardProps }: import('./Card.props').CardFooterProps) => import("react/jsx-runtime").JSX.Element;
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
        children: {
            defaultValue: string;
            control: {
                type: string;
            };
            table: {
                type: {
                    summary: string;
                };
            };
        };
        hoverEffect: {
            defaultValue: boolean;
            control: {
                type: string;
            };
        };
        bgColor: {
            defaultValue: string;
            options: string[];
            control: {
                type: string;
            };
            table: {
                type: {
                    summary: string;
                };
                defaultValue: {
                    summary: undefined;
                };
            };
        };
        borderRadius: {
            defaultValue: string;
            control: {
                type: string;
            };
            options: string[];
        };
        p: {
            defaultValue: string;
            control: {
                type: string;
            };
            options: string[];
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WithHeaderAndBody: Story;
export declare const WithActionFooter: Story;
export declare const WidthAndHeight: Story;
export declare const HoverEffect: Story;
export declare const Shadow: Story;
export declare const ClickEvent: Story;
