import {
  DefaultSelectValueProps,
  componentVariants,
} from './DefaultSelectValue.props'

const DefaultSelectValue = (props: DefaultSelectValueProps) => {
  const { selected, placeholder, dataKeyMapping } = props
  const { rootClassString } = componentVariants(props)

  // `selected` can be a single value or an array which could have zero, one, or multipe items
  const isArray = Array.isArray(selected)

  // If `selected` is falsey or is an empty array, render the placeholder
  if (!selected || (isArray && selected?.length === 0))
    return <div className={rootClassString}>{placeholder}</div>

  // If `selected` is an array with multiple items, show the number of items selected
  if (isArray && selected?.length > 1)
    return (
      <div className={rootClassString}>{selected.length} items selected</div>
    )

  const item = isArray ? selected[0] : selected

  return typeof item === 'object' ? (
    <div className={rootClassString}>{String(item[dataKeyMapping.label])}</div>
  ) : (
    <div className={rootClassString}>{item}</div>
  )
}

export { DefaultSelectValue }
