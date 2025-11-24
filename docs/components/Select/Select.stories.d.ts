import { StoryObj } from '@storybook/react';
import { SelectItemsType } from './Select.props';

declare const meta: {
    title: string;
    component: {
        (props: import('./Select.props').SelectProps): import("react/jsx-runtime").JSX.Element;
        Sizes: {
            readonly Small: "small";
            readonly Medium: "medium";
        };
        Types: {
            readonly Standard: "standard";
            readonly Shadow: "shadow";
        };
        FilterBehaviors: typeof import('./SelectFilter.props').SelectFilterEnums;
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
        items: SelectItemsType;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const ArrayOfStrings: Story;
export declare const ArrayOfSimpleObjects: Story;
export declare const ArrayOfPreformattedObjects: Story;
export declare const CustomObjectsWithMapping: Story;
export declare const CustomObjectsWithCustomRenderer: Story;
export declare const ExternalSearchImplementation: Story;
