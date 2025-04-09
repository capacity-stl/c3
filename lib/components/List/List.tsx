import { cn } from '@utils/cn'
import { ListProps, listVariants } from './List.props'
import { ListItem } from './ListItem'

const List = <T,>({
  className,
  items,
  noItems,
  renderItem,
  header,
  dense = false,
  divider = true,
  selectedItems = [],
  onItemClick,
  loading = false,
  ...listProps
}: ListProps<T>) => {
  return (
    <div
      data-testid="list-component"
      className={cn(
        listVariants({ ...listProps }),
        dense ? 'p-2' : 'p-4',
        `${className} w-full max-w-md rounded-lg bg-white`,
      )}
    >
      {/* If there is a header, show it */}
      {header && (
        <div
          role="heading"
          aria-level={1}
          className={cn(
            'border-meteor-200 border-b p-2',
            dense ? 'py-1' : 'py-2',
          )}
        >
          {header}
        </div>
      )}

      {/* If there are no items, show the noItems message */}
      {!items ||
        (items.length === 0 && (
          <div role="status" className="text-meteor-300 text-center">
            {noItems ?? 'No items found'}
          </div>
        ))}

      {/* If there are items, show the list */}
      {items?.length > 0 && (
        <ul
          role="listbox"
          className={cn({ 'divide-meteor-200 divide-y': divider })}
        >
          {items.map((item, index) => {
            const isSelected = selectedItems?.includes(item) ?? false
            return (
              <ListItem
                key={index}
                item={item}
                renderItem={renderItem}
                isSelected={isSelected}
                onItemClick={onItemClick}
                dense={dense}
              />
            )
          })}
        </ul>
      )}

      {loading && (
        <div
          role="status"
          aria-live="polite"
          className="mt-2 flex items-center justify-center"
        >
          {/* TODO: Switch by a loading spinner component */}
          <svg
            className="size-5 animate-spin text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="stroke-earth-300 opacity-25"
              cx="12"
              cy="12"
              r="10"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
      )}
    </div>
  )
}

List.Item = ListItem
export { List }
