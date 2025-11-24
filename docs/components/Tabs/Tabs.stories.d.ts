import { StoryObj } from '@storybook/react';
import { TabListProps } from './Tabs.props';

declare const meta: {
    title: string;
    component: ({ activeTabKey, className, tabs, onChangingTab, testId, hasBottomBorder, ...tabListProps }: TabListProps) => import("react/jsx-runtime").JSX.Element;
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
        tabs: {
            description: string;
        };
        activeTabKey: {
            control: string;
            description: string;
        };
        onChangingTab: {
            description: string;
            action: string;
        };
        className: {
            description: string;
        };
        hasBottomBorder: {
            description: string;
            control: string;
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const TabsDefault: Story;
export declare const TabsNoBottomBorder: Story;
