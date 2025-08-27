/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLayoutEffect, useRef, useEffect } from 'react'
import { cn } from '@utils/cn'
import { keyboardEventMapper } from '@utils/keyboard'
import { useScrollIntoView } from '../../hooks/useScrollIntoView'
import { useClickOutside } from '../../hooks/useClickOutside'
import { Icon } from '@components/Icon/Icon'
import { Icons } from '@components/Icon/Glyphs'
import { Flyout } from '@components/Flyout/Flyout'
import { SelectFilter } from './SelectFilter'
import { DefaultSelectItem } from './DefaultSelectItem'
import { DefaultSelectItemProps } from './DefaultSelectItem.props'
import { DefaultSelectValue } from './DefaultSelectValue'
import {
  SelectProps,
  SelectSizes,
  SelectTypes,
  componentVariants,
  KeyMappingShape,
  ItemToStringType,
  RenderItemType,
  SelectItemRenderingContext,
} from './Select.props'
import { SelectFilterEnums } from './SelectFilter.props'
import { useSelectReducer } from './Select.reducer'

const activeItemClassName = 'select-item-active'

const defaultKeyMapping = {
  id: 'id',
  label: 'label',
  subLabel: 'subLabel',
  value: 'value',
  leadingIcon: 'leadingIcon',
  trailingIcon: 'trailingIcon',
} as KeyMappingShape

const defaultItemToString: ItemToStringType = (item) => {
  switch (typeof item) {
    case 'number':
    case 'boolean':
      return String(item)
    case 'object':
      return Object.values(item).join('|')
    default:
      return item
  }
}

const deriveItemShape = (
  item: DefaultSelectItemProps['item'],
  mapping: KeyMappingShape,
) => {
  switch (typeof item) {
    case 'string':
    case 'number':
    case 'boolean':
      return {
        label: String(item),
        value: item,
      }
    default:
      return {
        label: item[mapping.label],
        ...(mapping.subLabel && { subLabel: item[mapping.subLabel] }),
        ...(mapping.leadingIcon && { leadingIcon: item[mapping.leadingIcon] }),
        ...(mapping.trailingIcon && {
          trailingIcon: item[mapping.trailingIcon],
        }),
        value: mapping.value ? item[mapping.value] : item[mapping.label],
      }
  }
}

const renderIcon = (
  iconData: string | object | boolean | number,
  classString?: string,
) => {
  if (typeof iconData === 'boolean' || typeof iconData === 'number') return null

  if (typeof iconData === 'string') {
    return (
      <Icon className={classString} icon={iconData as keyof typeof Icons} />
    )
  }

  return <span>NSI</span>
}

const defaultRenderItem: RenderItemType = ({
  item,
  classNames,
  renderContext,
  dataKeyMapping,
}) => {
  const { label, leadingIcon, trailingIcon, subLabel } = deriveItemShape(
    item,
    dataKeyMapping,
  )

  switch (renderContext) {
    case SelectItemRenderingContext.SelectedChip:
      return <>Not Implemented</>
    case SelectItemRenderingContext.SelectedMultiple:
      return (
        <div className={cn(classNames.labelContainerClassString, 'flex-auto')}>
          <div className={cn(classNames.labelClassString)}>{String(label)}</div>
        </div>
      )
    case SelectItemRenderingContext.SelectedSingle:
      return (
        <>
          {leadingIcon ? (
            <div className="flex-none">
              {renderIcon(leadingIcon, classNames.leadingIconClassString)}
            </div>
          ) : null}
          <div
            className={cn(classNames.labelContainerClassString, 'flex-auto')}
          >
            <div className={cn(classNames.labelClassString)}>
              {String(label)}
            </div>
          </div>
        </>
      )
    default:
      return (
        <>
          {leadingIcon ? (
            <div className="flex-none">
              {renderIcon(leadingIcon, classNames.leadingIconClassString)}
            </div>
          ) : null}
          <div
            className={cn(classNames.labelContainerClassString, 'flex-auto')}
          >
            <div className={cn(classNames.labelClassString)}>
              {String(label)}
            </div>
            {subLabel ? (
              <div className={cn(classNames.subLabelClassString)}>
                {String(subLabel)}
              </div>
            ) : null}
          </div>
          {trailingIcon ? (
            <div className="flex-none">
              {renderIcon(trailingIcon, classNames.trailingIconClassString)}
            </div>
          ) : null}
        </>
      )
  }
}

const Select = (props: SelectProps) => {
  /* Extract the props ----------------------------------------------------- */
  const {
    /* Base Props */
    items,
    onChange,
    value,
    placeholder,
    className,
    multi,

    /* Display Props */
    size,
    type,
    isError,
    isLoading,
    selectAsChips,

    /* Data Handling Props */
    dataKeyMapping,
    itemToString,
    renderItem,

    /* Filter Settings */
    filterValue: externalFilterValue,
    filterPlaceholder,
    filterBehavior,
    //filterBoxDirect,
    onFilterValueChange,

    testId,
    color,
    m,
    mb,
    ml,
    mr,
    mt,
    mx,
    my,
    w,
    wMax,
    wMin,
    ...selectProps
  } = {
    /* Set defaults -------------------------------------------------------- */
    color: 'night',
    dataKeyMapping: defaultKeyMapping,
    filterBehavior: SelectFilterEnums.AdaptiveFilter,
    filterPlaceholder: 'Filter...',
    isError: false,
    itemToString: defaultItemToString,
    renderItem: defaultRenderItem,
    multi: false,
    placeholder: 'Select an option...',
    size: SelectSizes.Small,
    type: SelectTypes.Standard,
    ...props,
  }

  const anchorRef = useRef<HTMLDivElement>(null)
  const flyoutRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  /* Implement reducer ----------------------------------------------------- */
  const { state, actions } = useSelectReducer({ items, value, itemToString })
  const {
    isOpen,
    activeIndex,
    filteredItems,
    filterValue,
    itemCount,
    selectedItems,
    selectedIndexes,
    lastActiveIndexChangeType,
  } = state

  /* Derive styles --------------------------------------------------------- */
  const { rootClassString } = componentVariants({
    color,
    isError,
    isOpen,
    size,
    type,
    m,
    mb,
    ml,
    mr,
    mt,
    mx,
    my,
    w,
    wMax,
    wMin,
  })

  /* Custom handlers ------------------------------------------------------- */
  const keyboardHandler = keyboardEventMapper(
    {
      ' ': () => {
        if (!state.isOpen) actions.setIsOpen(true)

        if (typeof state.activeIndex === 'number') {
          actions.selectItem(
            filteredItems[state.activeIndex],
            state.activeIndex,
            state.selectedIndexes.includes(state.activeIndex),
            multi,
          )
        }
      },
      Enter: () => {
        if (!state.isOpen) actions.setIsOpen(true)

        if (typeof state.activeIndex === 'number') {
          actions.selectItem(
            filteredItems[state.activeIndex],
            state.activeIndex,
            state.selectedIndexes.includes(state.activeIndex),
            multi,
          )
        }
      },
      Escape: () => actions.setState({ isOpen: false, activeIndex: null }),
      ArrowDown: actions.incrementActiveIndex,
      ArrowUp: actions.decrementActiveIndex,
    },
    { preventDefault: true },
  )
  const scrollIntoView = useScrollIntoView(flyoutRef, activeItemClassName)
  const itemSelectHandler = (item: any, index: number, isSelected: boolean) => {
    actions.selectItem(item, index, isSelected, multi)
  }
  const itemFocusHandler = (index: number) => {
    if (lastActiveIndexChangeType === 'mouse') actions.setActiveIndex(index)
  }
  const mouseMoveHandler = () => actions.setLastActiveIndexChangeType('mouse')

  /* Direct hooks ---------------------------------------------------------- */
  useClickOutside(() => actions.setIsOpen(false), anchorRef)
  useEffect(() => {
    onChange(multi ? selectedItems : selectedItems[0])
  }, [selectedItems, multi, onChange])
  useLayoutEffect(() => {
    if (isOpen) {
      inputRef.current?.focus()
    } else {
      anchorRef.current?.focus()
    }
  }, [isOpen])
  useLayoutEffect(() => {
    if (lastActiveIndexChangeType === 'keyboard') scrollIntoView()
  }, [lastActiveIndexChangeType, scrollIntoView])

  return (
    <div
      className={cn(rootClassString, className)}
      data-testid={testId}
      onKeyDown={keyboardHandler}
      ref={anchorRef}
      tabIndex={0}
      {...selectProps}
    >
      <div
        className="flex h-full items-center justify-between gap-2 px-2"
        onClick={() => actions.setIsOpen(!isOpen)}
      >
        <DefaultSelectValue
          dataKeyMapping={dataKeyMapping}
          placeholder={placeholder}
          renderItem={renderItem}
          selectAsChips={selectAsChips}
          selected={selectedItems}
        />
        {multi && selectedItems.length > 1 ? (
          <button
            onClick={(e) => {
              e.stopPropagation()
              actions.clearSelection()
            }}
          >
            <Icon as={Icon.asType.div} icon={Icon.Glyph.Cancel} size="tiny" />
          </button>
        ) : null}
        <Icon as={Icon.asType.div} icon={Icon.Glyph.CaretDown} size="tiny" />
      </div>
      <Flyout
        onMouseMove={mouseMoveHandler}
        open={isOpen}
        pinTo={anchorRef}
        ref={flyoutRef}
      >
        <SelectFilter
          filterBehavior={filterBehavior}
          filterPlaceholder={filterPlaceholder}
          filterValue={
            filterBehavior === SelectFilterEnums.Search
              ? externalFilterValue
              : filterValue
          }
          itemCount={itemCount ?? 0}
          onChange={
            filterBehavior === SelectFilterEnums.Search
              ? onFilterValueChange
              : actions.setFilter
          }
          ref={inputRef}
        />
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          filteredItems.map((item, index) => {
            const isActive = index === activeIndex
            const isSelected = selectedIndexes?.indexOf(index) >= 0

            return (
              <DefaultSelectItem
                className={isActive ? activeItemClassName : ''}
                dataKeyMapping={dataKeyMapping}
                index={index}
                isActive={isActive}
                isSelected={isSelected}
                item={item}
                onHover={itemFocusHandler}
                onSelect={itemSelectHandler}
                renderItem={renderItem}
              />
            )
          })
        )}
      </Flyout>
    </div>
  )
}

Select.Sizes = SelectSizes
Select.Types = SelectTypes
Select.FilterBehaviors = SelectFilterEnums

export { Select }
