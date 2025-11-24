import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: import('react').ForwardRefExoticComponent<import('./Grid.props').GridProps & import('react').RefAttributes<HTMLDivElement>>;
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
        cols: {
            control: {
                type: string;
            };
            options: string[];
            description: string;
        };
        rows: {
            control: {
                type: string;
            };
            options: string[];
            description: string;
        };
        gap: {
            control: {
                type: string;
            };
            options: string[];
            description: string;
        };
        alignItems: {
            control: {
                type: string;
            };
            options: string[];
            description: string;
        };
        justifyItems: {
            control: {
                type: string;
            };
            options: string[];
            description: string;
        };
        flow: {
            control: {
                type: string;
            };
            options: string[];
            description: string;
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WithGridItems: Story;
export declare const AutoFlow: Story;
export declare const ResponsiveGrid: Story;
export declare const TemplateCols: Story;
export declare const TemplateRows: Story;
