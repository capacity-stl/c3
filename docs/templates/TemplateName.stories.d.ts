import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: ({ className, children, ...TemplateNameProps }: import('./TemplateName.props').TemplateNameProps) => import("react/jsx-runtime").JSX.Element;
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
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
