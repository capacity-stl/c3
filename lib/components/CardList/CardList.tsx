import { useState } from 'react'
import { cn } from '@utils/cn'
import { CardListProps, cardlistVariants, ListItemType } from './CardList.props'
import { List } from '@components/List/List'
import { CardListItem } from './CardListItem'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CardList = <T extends Record<string, any>>({
  className,
  items,
  noItems,
  titleKey = 'title',
  descriptionKey = 'description',
  datetimeKey = 'datetime',
  referenceKey = 'reference',
  header,
  dense = false,
  divider = true,
  selectionMode = 'single',
  onSelectionChange,
  loading = false,
  bottomLeftContent,
  bottomRightContent,
  firstOptionAsButton = false,
  testId = 'cardlist-component',
  ...listProps
}: CardListProps<T & Partial<ListItemType>>) => {
  const [selectedItems, setSelectedItems] = useState<T[]>([])

  const handleItemClick = (item: T) => {
    if (selectionMode === 'none') {
      return
    }
    if (selectionMode === 'single') {
      const newSelectedItems = [item]
      setSelectedItems(newSelectedItems)
      onSelectionChange?.(newSelectedItems, item)
    }

    if (selectionMode === 'multiple') {
      const isSelected = selectedItems.some(
        (i: T) => i[titleKey] === item[titleKey],
      )
      const newSelectedItems = isSelected
        ? selectedItems.filter((i: T) => i[titleKey] !== item[titleKey])
        : [...selectedItems, item]
      setSelectedItems(newSelectedItems)
      onSelectionChange?.(newSelectedItems, item)
    }
  }

  const renderItem = (item: T & Partial<ListItemType>) => {
    return (
      <CardListItem
        item={item}
        titleKey={titleKey}
        descriptionKey={descriptionKey}
        datetimeKey={datetimeKey}
        referenceKey={referenceKey}
        isSelected={item.isSelected}
        bottomLeftContent={bottomLeftContent}
        bottomRightContent={bottomRightContent}
        firstOptionAsButton={firstOptionAsButton}
      />
    )
  }

  return (
    <List
      data-testid={testId}
      items={items}
      renderItem={renderItem}
      dense={dense}
      divider={divider}
      selectedItems={selectedItems}
      header={header?.(selectedItems, items)}
      noItems={noItems}
      onItemClick={handleItemClick}
      loading={loading}
      className={cn(
        cardlistVariants({ ...listProps }),
        dense ? 'p-2' : 'p-4',
        `${className} w-full max-w-md rounded-lg bg-white`,
      )}
      {...listProps}
    />
  )
}

// CardList.Item = ListItem
export { CardList }
