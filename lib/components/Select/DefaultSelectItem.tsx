import { cn } from '@utils/cn'
import {
  DefaultSelectItemProps,
  componentVariants,
} from './DefaultSelectItem.props'
import { SelectItemRenderingContext } from './Select.props'

const DefaultSelectItem = (props: DefaultSelectItemProps) => {
  const {
    item,
    dataKeyMapping,
    isActive,
    isSelected,
    index,
    className,
    onHover,
    onSelect,
    renderItem,
  } = {
    isActive: false,
    isSelected: false,
    ...props,
  }

  const classNames = componentVariants({ isActive, isSelected })

  return (
    <div
      className={cn(classNames.rootClassString, className)}
      onMouseEnter={() => onHover(index)}
      onClick={() => onSelect(item, index, isSelected)}
    >
      {renderItem({
        item,
        classNames,
        renderContext: SelectItemRenderingContext.Flyout,
        isSelected,
        dataKeyMapping,
      })}
    </div>
  )
}

export { DefaultSelectItem }
