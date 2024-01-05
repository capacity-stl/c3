import type { StoryObj } from "@storybook/react";
import { ButtonTW } from "./ButtonTW";
declare const meta: {
    title: string;
    component: typeof ButtonTW;
    parameters: {
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
export declare const Primary: Story;
export declare const Secondary: Story;
export declare const Link: Story;
export declare const Destructive: Story;
export declare const Success: Story;
