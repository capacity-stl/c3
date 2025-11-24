import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: {
        ({ className, icon, size, as: Tag, testId, ...iconProps }: import('./Icon.props').IconProps): import("react/jsx-runtime").JSX.Element;
        Glyph: typeof import('./Glyphs').Icons;
        asType: typeof import('./Icon.props').asTypes;
    };
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
        layout: string;
    };
    argTypes: {
        color: {
            options: string[];
            control: {
                type: string;
            };
        };
        icon: {
            options: string[];
            control: {
                type: string;
            };
        };
        size: {
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
