import { cn } from '@utils/cn'

const ListItem = <T,>({ item, renderItem, dense = false, onItemClick = undefined, isSelected }: any) => {
  return (
    <li
      role="option"
      tabIndex={0}
      className={cn(
        'flex items-center px-3',
        { 'cursor-pointer': onItemClick },
        { 'py-1': dense, 'py-3': !dense },
        { 'bg-earth-100': isSelected },
      )}
      onClick={() => onItemClick?.(item)}
      onKeyUp={e => (e.key === 'Enter' || e.key === ' ' ? onItemClick?.(item) : null)}
      aria-selected={isSelected}
    >
      {renderItem ? renderItem({ ...item, isSelected }) : 'No Render Prop was passed'}
    </li>
  )
}

export { ListItem }
