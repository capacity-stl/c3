import { cn } from '@utils/cn'
import { Icon } from '@components/Icon/Icon'
import { CardListItemProps } from './CardList.props'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const CardListItem = <T extends Record<string, any>>({
  item,
  titleKey,
  descriptionKey,
  datetimeKey,
  referenceKey,
  isSelected,
  bottomLeftContent,
  bottomRightContent,
  firstOptionAsButton,
}: CardListItemProps<T>) => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false)
  const firstOption = firstOptionAsButton ? item.options?.[0] : null
  const restOptions = firstOptionAsButton
    ? item.options?.slice(1)
    : item.options

  /**
   * WE CAN EXTRACT THIS TO A UTILITY FUNCTION
   * Get the time ago from a datetime string
   * @param datetime - The datetime string to get the time ago from
   * @returns The time ago
   */
  const getTimeAgo = (datetime: string): string => {
    const now = new Date()
    const date = new Date(datetime)
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000)
    const minutes = Math.floor(seconds / 60)
    const hours = Math.floor(minutes / 60)
    const days = Math.floor(hours / 24)
    const months = Math.floor(days / 30)
    const years = Math.floor(months / 12)

    if (years > 0) return `${years}y`
    if (months > 0) return `${months}mo`
    if (days > 0) return `${days}d`
    if (hours > 0) return `${hours}h`
    if (minutes > 0) return `${minutes}min`
    return 'now'
  }

  return (
    <article className="w-full select-none" aria-label={item[titleKey]}>
      <div className="flex flex-row gap-2">
        {item.icon && (
          <div role="presentation">
            {isSelected ? (
              <input
                tabIndex={-1}
                className="m-1"
                style={{ width: '16px', height: '16px' }}
                type="checkbox"
                checked={true}
                readOnly
              />
            ) : (
              <span
                className={cn(
                  `flex items-center justify-center rounded-full p-1 bg-${item.iconColor} leading-none`,
                  item.iconColor,
                )}
              >
                <Icon
                  color="white"
                  size="tiny"
                  icon={
                    Icon.Glyph[
                      (item.icon as keyof typeof Icon.Glyph) ??
                        Icon.Glyph.Action
                    ]
                  }
                />
              </span>
            )}
          </div>
        )}
        <div className="flex flex-col gap-1 truncate">
          <div className="flex flex-row justify-between gap-2">
            {item[titleKey] && (
              <span className="truncate text-sm font-medium">
                {item[titleKey]}
              </span>
            )}
            {item[datetimeKey] && (
              <time
                className="text-sm font-light text-meteor-300"
                dateTime={item[datetimeKey]}
              >
                {getTimeAgo(item[datetimeKey])}
              </time>
            )}
          </div>
          {item[descriptionKey] && (
            <p className="truncate text-sm font-light">
              {item[descriptionKey]}
            </p>
          )}
          {item[referenceKey] && (
            <p className="text-xs font-light text-meteor-300">
              {item[referenceKey]}
            </p>
          )}
        </div>
      </div>

      {(item?.options || bottomLeftContent || bottomRightContent) && (
        <div
          role="toolbar"
          className="mt-2 flex flex-row items-center justify-between gap-2"
        >
          <div className="flex flex-row">
            {bottomLeftContent && (
              <div className="flex flex-row gap-1">
                {bottomLeftContent(item)}
              </div>
            )}
          </div>

          <div className="flex flex-row items-center justify-between gap-2">
            {bottomRightContent && (
              <div className="flex flex-row items-center justify-end gap-1">
                {bottomRightContent(item)}
              </div>
            )}
            {item?.options && (
              <>
                {firstOption && (
                  // TODO: Replace with future Button component
                  <input
                    type="button"
                    aria-label={firstOption.label}
                    value={firstOption.label}
                    className="rounded-md bg-earth-300 px-1 py-1 text-xs text-white"
                  />
                )}
                {restOptions && restOptions.length > 0 && (
                  // TODO: Replace with future 3 Dot Menu component
                  <button type="button" role="menu" aria-label="More options">
                    <Icon
                      size="tiny"
                      icon={Icon.Glyph.More}
                      aria-hidden="true"
                    />
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </article>
  )
}
