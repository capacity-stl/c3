import { ChatBubbleProps } from './ChatBubble.props';

declare const ChatBubble: {
    ({ message, userName, type, loading, avatarSrc, avatarInitials, avatarBgColor, testId, className, topLabel, bottomLabel, onThumbUpClick, onThumbDownClick, }: ChatBubbleProps): import("react/jsx-runtime").JSX.Element;
    Type: {
        readonly Sent: "sent";
        readonly Received: "received";
    };
};
export { ChatBubble };
