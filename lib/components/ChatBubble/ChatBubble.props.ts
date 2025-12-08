import { cva } from 'class-variance-authority'

const CHAT_BUBBLE_TYPES = {
  Sent: 'sent',
  Received: 'received',
} as const

// Needed to set the border radius of the chat bubble to arbitrary values because the default tw classes where not working as expected.
const chatBubbleTypeVariants = {
  type: {
    sent: 'bg-earth-50 rounded-[20px] rounded-tl-[4px] p-3',
    received: 'bg-earth-100 rounded-[20px] rounded-tr-[4px] p-3',
  },
}

const chatBubbleVariants = cva('inline-block max-w-md text-sm leading-5', {
  variants: {
    ...chatBubbleTypeVariants,
  },
  defaultVariants: {
    type: 'sent',
  },
})

export interface ChatBubbleProps {
  /** The message text content */
  message?: string
  /** If true, renders the message as HTML */
  allowHTML?: boolean
  /** The name of the user */
  userName: string
  /** The type of message (sent or received) */
  type?: (typeof CHAT_BUBBLE_TYPES)[keyof typeof CHAT_BUBBLE_TYPES]
  /** Loading state shows three dots instead of message */
  loading?: boolean
  /** Avatar image source. Avatar is only shown if avatarSrc or avatarInitials is provided */
  avatarSrc?: string
  /** Avatar fallback text/initials. Avatar is only shown if avatarSrc or avatarInitials is provided */
  avatarInitials?: string
  /** Avatar background color */
  avatarBgColor?: string
  /** Test ID for testing */
  testId?: string
  /** Additional className */
  className?: string
  /** Top label text */
  topLabel?: string
  /** Bottom label text */
  bottomLabel?: string
  /** Callback function when thumbs up button is clicked */
  onThumbUpClick?: () => void
  /** Callback function when thumbs down button is clicked */
  onThumbDownClick?: () => void
}

export { chatBubbleVariants, CHAT_BUBBLE_TYPES }
