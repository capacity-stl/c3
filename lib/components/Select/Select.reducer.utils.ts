import {
  SelectItemType,
  SelectItemsType,
  ItemToStringType,
} from './Select.props'

export const getFilteredItems = ({
  items,
  itemToString,
  filterValue = '',
}: {
  items: SelectItemsType
  itemToString: ItemToStringType
  filterValue?: string
}) => {
  const formattedFilterValue = filterValue.toLowerCase().trim()

  const filteredItems =
    formattedFilterValue !== ''
      ? (items.filter((item) => {
          const stringValue = itemToString(item).toLowerCase()

          return stringValue.indexOf(formattedFilterValue) >= 0
        }) as SelectItemsType)
      : items

  return filteredItems
}

export const findSelectedItemIndexes = ({
  items,
  selectedItems,
}: {
  items: SelectItemsType
  selectedItems: SelectItemsType
}) => {
  const selectedIndexes = [] as Array<number>
  const stringifiedSelectedItems = selectedItems.map((selectedItem) =>
    JSON.stringify(selectedItem),
  )

  items.map((item, index) => {
    const stringified = JSON.stringify(item)

    if (stringifiedSelectedItems.indexOf(stringified) >= 0)
      selectedIndexes.push(index)
  })

  return selectedIndexes
}

export const processValueAndFilterItems = ({
  items,
  value,
  filterValue,
  itemToString,
}: {
  items: SelectItemsType
  value: SelectItemType | SelectItemsType | undefined
  itemToString: ItemToStringType
  filterValue?: string
}) => {
  const selectedItems = value
    ? Array.isArray(value)
      ? value
      : ([value] as SelectItemsType)
    : []

  const filteredItems = getFilteredItems({
    items,
    itemToString,
    ...(filterValue ? { filterValue } : {}),
  })

  return {
    items,
    filterValue,
    filteredItems,
    selectedItems,
    itemCount: items.length,
    filteredItemCount: filteredItems.length,
  }
}

export const deriveInitialState = ({
  items,
  value,
  itemToString,
}: {
  items: SelectItemsType
  value: SelectItemType | SelectItemsType | undefined
  itemToString: ItemToStringType
}) => ({
  isOpen: false,
  activeIndex: null,
  lastActiveIndexChangeType: 'mouse',
  ...processValueAndFilterItems({ items, value, itemToString }),
})

export const handleSelectedItemByBehaviorType = (
  selectedItem: SelectItemType,
  selectedItems: SelectItemsType,
  isSelected: boolean,
  multi: boolean,
) => {
  if (!multi)
    return {
      selectedItems: [selectedItem] as SelectItemsType,
      isOpen: multi,
    }

  if (isSelected) {
    return {
      selectedItems: selectedItems.filter(
        (item) => JSON.stringify(item) !== JSON.stringify(selectedItem),
      ) as SelectItemsType,
      isOpen: multi,
    }
  }

  return {
    selectedItems: [...selectedItems, selectedItem] as SelectItemsType,
    isOpen: multi,
  }
}
