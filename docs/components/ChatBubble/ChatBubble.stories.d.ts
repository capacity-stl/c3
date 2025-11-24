import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: {
        ({ message, userName, type, loading, avatarSrc, avatarInitials, avatarBgColor, testId, className, topLabel, bottomLabel, onThumbUpClick, onThumbDownClick, }: import('./ChatBubble.props').ChatBubbleProps): import("react/jsx-runtime").JSX.Element;
        Type: {
            readonly Sent: "sent";
            readonly Received: "received";
        };
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
    args: {
        onThumbUpClick: undefined;
        onThumbDownClick: undefined;
    };
    argTypes: {
        type: {
            control: string;
            options: ("sent" | "received")[];
            description: string;
            defaultValue: "sent";
        };
        message: {
            control: string;
            description: string;
        };
        userName: {
            control: string;
            description: string;
        };
        loading: {
            control: string;
            description: string;
        };
        avatarSrc: {
            control: string;
            description: string;
        };
        avatarInitials: {
            control: string;
            description: string;
        };
        avatarBgColor: {
            control: string;
            options: string[];
            description: string;
        };
        topLabel: {
            control: string;
            description: string;
        };
        bottomLabel: {
            control: string;
            description: string;
        };
        onThumbUpClick: {
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
            };
        };
        onThumbDownClick: {
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
            };
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const SentShort: Story;
export declare const SentLong: Story;
export declare const SentLoading: Story;
export declare const ReceivedShort: Story;
export declare const ReceivedLong: Story;
export declare const ReceivedLoading: Story;
export declare const Conversation: Story;
export declare const WithoutAvatar: Story;
export declare const WithTopLabel: Story;
export declare const WithBottomLabel: Story;
export declare const WithBothLabels: Story;
export declare const ConversationWithLabels: Story;
export declare const WithFeedbackButtons: Story;
