import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: ({ className, src, alt, children, ...avatarProps }: import('./Avatar.props').AvatarProps) => import("react/jsx-runtime").JSX.Element;
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
        theme: {
            options: string[];
            mapping: {
                'Not Defined': undefined;
            };
            control: {
                type: string;
            };
            description: string;
            table: {
                type: {
                    summary: string;
                };
                defaultValue: {
                    summary: null;
                };
            };
        };
        color: {
            options: string[];
            mapping: {
                'Not Defined': undefined;
            };
            control: {
                type: string;
            };
            table: {
                type: {
                    summary: string;
                };
                defaultValue: {
                    summary: string;
                };
            };
            description: string;
        };
        bgColor: {
            options: string[];
            mapping: {
                'Not Defined': undefined;
            };
            control: {
                type: string;
            };
            table: {
                type: {
                    summary: string;
                };
                defaultValue: {
                    summary: string;
                };
            };
            description: string;
        };
        borderColor: {
            options: string[];
            mapping: {
                'Not Defined': undefined;
            };
            control: {
                type: string;
            };
            table: {
                type: {
                    summary: string;
                };
                defaultValue: {
                    summary: string;
                };
            };
            description: string;
        };
        size: {
            options: string[];
            mapping: {
                'Not Defined': undefined;
            };
            control: {
                type: string;
            };
            table: {
                type: {
                    summary: string;
                };
                defaultValue: {
                    summary: string;
                };
            };
            description: string;
        };
        alt: {
            table: {
                type: {
                    summary: string;
                };
                defaultValue: {
                    summary: string;
                };
            };
            description: string;
        };
        shape: {
            table: {
                type: {
                    summary: string;
                };
                defaultValue: {
                    summary: string;
                };
            };
            description: string;
        };
        children: {
            table: {
                type: {
                    summary: string;
                };
            };
            description: string;
        };
        src: {
            table: {
                type: {
                    summary: string;
                };
            };
            description: string;
        };
        border: {
            table: {
                type: {
                    summary: string;
                };
                defaultValue: {
                    summary: string;
                };
            };
            description: string;
        };
    };
    args: {
        color: string;
        bgColor: string;
        borderColor: string;
        shape: "circle";
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const ImageAvatar: Story;
export declare const InitialsAvatar: Story;
