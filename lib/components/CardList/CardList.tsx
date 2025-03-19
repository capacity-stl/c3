import { useState } from 'react'
import { cn } from '@utils/cn'
import { CardListProps, cardlistVariants, ListItemType } from './CardList.props'
import { List } from '@components/List/List'
import { CardListItem } from './CardListItem'

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
      const isSelected = selectedItems.some((i: T) => i[titleKey] === item[titleKey])
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
    <>
      <List
        data-testid="card-component"
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
          `${className} w-full max-w-md bg-white rounded-lg border-b-1`,
        )}
        {...listProps}
      />
    </>
  )
}

// CardList.Item = ListItem
export { CardList }
