import { ListItemProps } from './List.props'
import { Text } from '@components/Text/Text'
const ListItem = <T,>({
  item,
  renderItem,
  dense = false,
  onItemClick = undefined,
  isSelected,
}: ListItemProps<T>) => {
  return (
    <li
      role="option"
      tabIndex={0}
      className={`flex items-center px-3 ${
        onItemClick ? 'cursor-pointer' : ''
      } ${dense ? 'py-1' : 'py-3'} ${isSelected ? 'bg-earth-100' : ''}`}
      onClick={() => onItemClick?.(item)}
      onKeyUp={(e) =>
        e.key === 'Enter' || e.key === ' ' ? onItemClick?.(item) : null
      }
      aria-selected={isSelected}
    >
      {renderItem ? (
        renderItem({ ...item, isSelected })
      ) : (
        <Text type="body-small" className="text-meteor-300">
          No Render Prop was passed
        </Text>
      )}
    </li>
  )
}

export { ListItem }
