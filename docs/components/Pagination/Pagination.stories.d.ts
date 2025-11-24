import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: ({ className, totalPages, currentPage, setCurrentPage, totalItemsShown, siblingRange, icon, testId, ...props }: import('./Pagination.props').PaginationProps) => import("react/jsx-runtime").JSX.Element;
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
        controls: {
            exclude: string[];
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
        activeBgColor: {
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
        activeTextColor: {
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
        activeBorderColor: {
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
        itemBgColor: {
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
        itemTextColor: {
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
        itemBorderColor: {
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
        hoverTextColor: {
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
        hoverBgColor: {
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
        hoverBorderColor: {
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
        nextPreviousBgColor: {
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
        nextPreviousBorderColor: {
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
        nextPreviousTextColor: {
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
        nextPreviousHoverBgColor: {
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
        nextPreviousHoverBorderColor: {
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
        nextPreviousHoverTextColor: {
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
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
