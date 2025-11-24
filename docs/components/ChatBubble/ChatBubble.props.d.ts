declare const CHAT_BUBBLE_TYPES: {
    readonly Sent: "sent";
    readonly Received: "received";
};
declare const chatBubbleVariants: (props?: ({
    type?: "sent" | "received" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface ChatBubbleProps {
    /** The message text content */
    message?: string;
    /** The name of the user */
    userName: string;
    /** The type of message (sent or received) */
    type?: (typeof CHAT_BUBBLE_TYPES)[keyof typeof CHAT_BUBBLE_TYPES];
    /** Loading state shows three dots instead of message */
    loading?: boolean;
    /** Avatar image source. Avatar is only shown if avatarSrc or avatarInitials is provided */
    avatarSrc?: string;
    /** Avatar fallback text/initials. Avatar is only shown if avatarSrc or avatarInitials is provided */
    avatarInitials?: string;
    /** Avatar background color */
    avatarBgColor?: string;
    /** Test ID for testing */
    testId?: string;
    /** Additional className */
    className?: string;
    /** Top label text */
    topLabel?: string;
    /** Bottom label text */
    bottomLabel?: string;
    /** Callback function when thumbs up button is clicked */
    onThumbUpClick?: () => void;
    /** Callback function when thumbs down button is clicked */
    onThumbDownClick?: () => void;
}
export { chatBubbleVariants, CHAT_BUBBLE_TYPES };
