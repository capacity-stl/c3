import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: ({ items, className, style, itemsClassName, itemsStyle, ...sideNavProps }: import('./SideNav.props').SideNavProps) => import("react/jsx-runtime").JSX.Element;
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
        items: {
            control: string;
            description: string;
        };
        className: {
            control: string;
            description: string;
        };
        itemsClassName: {
            control: string;
            description: string;
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const ItemDefault: Story;
export declare const ItemHovered: Story;
export declare const ItemSelected: Story;
export declare const ItemDisabled: Story;
export declare const ItemWithTrailingNumber: Story;
export declare const ItemWithSectionDivider: Story;
export declare const ItemWithSubItems: Story;
