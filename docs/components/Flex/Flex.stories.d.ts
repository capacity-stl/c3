import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: ({ className, children, testId, m, mx, my, mt, mr, mb, ml, p, px, py, pt, pr, pb, pl, h, hMin, hMax, w, wMin, wMax, bgColor, border, borderRadius, borderTop, borderBottom, direction, wrap, grow, shrink, basis, flex, gap, gapX, gapY, justify, align, alignContent, alignSelf, order, ...htmlProps }: import('./Flex.props').FlexProps) => import("react/jsx-runtime").JSX.Element;
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
        numberOfBoxes: {
            control: {
                type: string;
                min: number;
                max: number;
            };
            defaultValue: number;
            table: {
                type: {
                    summary: string;
                };
                defaultValue: {
                    summary: string;
                };
            };
        };
        justify: {
            control: {
                type: string;
            };
            mapping: {
                'No Justify': null;
            };
            options: string[];
            table: {
                type: {
                    summary: string;
                };
            };
        };
        align: {
            control: {
                type: string;
            };
            mapping: {
                'No Align': null;
            };
            options: string[];
            table: {
                type: {
                    summary: string;
                };
            };
        };
        alignContent: {
            control: {
                type: string;
            };
            mapping: {
                'No Align Content': null;
            };
            options: string[];
            table: {
                type: {
                    summary: string;
                };
            };
        };
        alignSelf: {
            control: {
                type: string;
            };
            mapping: {
                'No Align Self': null;
            };
            options: string[];
            table: {
                type: {
                    summary: string;
                };
            };
        };
        direction: {
            control: {
                type: string;
            };
            options: string[];
            defaultValue: string;
            table: {
                type: {
                    summary: string;
                };
                defaultValue: {
                    summary: string;
                };
            };
        };
        wrap: {
            control: {
                type: string;
            };
            options: string[];
            table: {
                type: {
                    summary: string;
                };
            };
        };
        grow: {
            control: {
                type: string;
            };
            table: {
                type: {
                    summary: string;
                };
            };
        };
        shrink: {
            control: {
                type: string;
            };
            table: {
                type: {
                    summary: string;
                };
            };
        };
        basis: {
            control: {
                type: string;
            };
            options: string[];
            table: {
                type: {
                    summary: string;
                };
            };
        };
        gap: {
            control: {
                type: string;
            };
            options: string[];
            table: {
                type: {
                    summary: string;
                };
            };
        };
        gapX: {
            control: {
                type: string;
            };
            options: string[];
            table: {
                type: {
                    summary: string;
                };
            };
        };
        gapY: {
            control: {
                type: string;
            };
            options: string[];
            table: {
                type: {
                    summary: string;
                };
            };
        };
        order: {
            control: {
                type: string;
            };
            options: string[];
            table: {
                type: {
                    summary: string;
                };
            };
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const FlexContainer: Story;
export declare const FlexItems: Story;
