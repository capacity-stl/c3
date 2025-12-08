import { cn } from '@utils/cn'
import { Avatar } from '@components/Avatar/Avatar'
import { Text } from '@components/Text/Text'
import { Icon } from '@components/Icon/Icon'
import {
  ChatBubbleProps,
  chatBubbleVariants,
  CHAT_BUBBLE_TYPES,
} from './ChatBubble.props'

const LoadingDots = () => (
  <div className="flex space-x-1">
    <span className="h-1.5 w-1.5 animate-bounceDot1 rounded-full bg-meteor-400"></span>
    <span className="h-1.5 w-1.5 animate-bounceDot2 rounded-full bg-meteor-400"></span>
    <span className="h-1.5 w-1.5 animate-bounceDot3 rounded-full bg-meteor-400"></span>
  </div>
)

const ChatBubble = ({
  message,
  allowHTML = false,
  userName,
  type = CHAT_BUBBLE_TYPES.Sent,
  loading = false,
  avatarSrc,
  avatarInitials,
  avatarBgColor,
  testId = 'chat-bubble',
  className,
  topLabel,
  bottomLabel,
  onThumbUpClick,
  onThumbDownClick,
}: ChatBubbleProps) => {
  const isReceived = type === 'received'
  const showAvatar = avatarSrc || avatarInitials

  return (
    <div
      className={cn(
        'flex w-full gap-3',
        isReceived ? 'flex-row-reverse' : 'flex-row',
        className,
      )}
      data-testid={testId}
    >
      {showAvatar && (
        <Avatar
          src={avatarSrc}
          size="medium"
          bgColor={avatarBgColor}
          testId={`${testId}-avatar`}
          className="mt-5"
        >
          {avatarInitials}
        </Avatar>
      )}

      <div
        className={cn(
          'flex flex-col gap-1',
          isReceived ? 'items-end' : 'items-start',
        )}
      >
        <div
          className={cn(
            'flex items-center gap-2',
            isReceived ? 'flex-row-reverse' : 'flex-row',
          )}
        >
          <Text
            type="body-small-strong"
            color="deep-space"
            className={isReceived ? 'text-right' : 'text-left'}
          >
            {userName}
          </Text>
          {topLabel && (
            <Text
              type="body-small-strong"
              color="meteor-400"
              className={isReceived ? 'text-right' : 'text-left'}
            >
              {topLabel}
            </Text>
          )}
        </div>

        <div
          className={cn(chatBubbleVariants({ type }), 'break-words')}
          data-testid={`${testId}-content`}
        >
          {loading ? (
            <LoadingDots />
          ) : allowHTML ? (
            <div
              className="text-sm leading-5 text-deep-space"
              dangerouslySetInnerHTML={{ __html: message || '' }}
            />
          ) : (
            <Text type="body" color="deep-space">
              {message}
            </Text>
          )}
        </div>
        {bottomLabel && (
          <Text
            type="body-small-strong"
            color="meteor-400"
            className={isReceived ? 'text-right' : 'text-left'}
          >
            {bottomLabel}
          </Text>
        )}
        {(onThumbUpClick || onThumbDownClick) && (
          <div className="flex gap-2 pt-1">
            {onThumbUpClick && (
              <button
                className="h-6 w-8 rounded-sm border border-meteor-400  text-meteor-400 hover:bg-meteor-400 hover:text-white focus:bg-meteor-400 focus:text-white focus:outline-none"
                onClick={onThumbUpClick}
                data-testid={`${testId}-thumb-up`}
                aria-label="Thumb up"
              >
                <Icon icon={Icon.Glyph.ThumbUp} size="tiny" />
              </button>
            )}
            {onThumbDownClick && (
              <button
                onClick={onThumbDownClick}
                className="h-6 w-8 rounded-sm border border-meteor-400  text-meteor-400 hover:bg-meteor-400 hover:text-white focus:bg-meteor-400 focus:text-white focus:outline-none"
                data-testid={`${testId}-thumb-down`}
                aria-label="Thumb down"
              >
                <Icon icon={Icon.Glyph.ThumbDown} size="tiny" />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

ChatBubble.Type = CHAT_BUBBLE_TYPES

export { ChatBubble }
