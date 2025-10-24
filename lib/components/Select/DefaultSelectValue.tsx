import {
  DefaultSelectValueProps,
  componentVariants,
} from './DefaultSelectValue.props'
import { SelectItemRenderingContext } from './Select.props'

const DefaultSelectValue = (props: DefaultSelectValueProps) => {
  const { selected, placeholder, dataKeyMapping, renderItem } = props
  const classNames = componentVariants(props)

  // `selected` can be a single value or an array which could have zero, one, or multipe items
  const isArray = Array.isArray(selected)

  // If `selected` is falsey or is an empty array, render the placeholder
  if (!selected || (isArray && selected?.length === 0))
    return <div className={classNames.rootClassString}>{placeholder}</div>

  // If `selected` is an array with multiple items, show the number of items selected
  if (isArray && selected?.length > 1)
    return (
      <div className={classNames.rootClassString}>
        {selected.length} items selected
      </div>
    )

  const item = isArray ? selected[0] : selected

  return (
    <div className={classNames.rootClassString}>
      {renderItem({
        item,
        classNames,
        renderContext: SelectItemRenderingContext.SelectedSingle,
        isSelected: false,
        dataKeyMapping,
      })}
    </div>
  )
}

export { DefaultSelectValue }
