/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLayoutEffect, useRef, useEffect } from 'react'
import { cn } from '@utils/cn'
import { keyboardEventMapper } from '@utils/keyboard'
import { useScrollIntoView } from '../../hooks/useScrollIntoView'
import { useClickOutside } from '../../hooks/useClickOutside'
import { Icon } from '@components/Icon/Icon'
import { Flyout } from '@components/Flyout/Flyout'
import { SelectFilter } from './SelectFilter'
import { DefaultSelectItem } from './DefaultSelectItem'
import { DefaultSelectValue } from './DefaultSelectValue'
import {
  SelectProps,
  SelectSizes,
  SelectTypes,
  componentVariants,
  KeyMappingShape,
} from './Select.props'
import { SelectFilterEnums } from './SelectFilter.props'
import { useSelectReducer, SelectState, SelectActions } from './Select.reducer'

const activeItemClassName = 'select-item-active'

const defaultKeyMapping = {
  label: 'label',
  subLabel: 'subLabel',
  value: 'value',
  leadingIcon: 'leadingIcon',
  trailingIcon: 'trailingIcon',
} as KeyMappingShape

const useSelectKeyboardHandler = (
  state: SelectState,
  actions: SelectActions,
) => {
  const keyboardEventHandler = keyboardEventMapper(
    {
      ' ': () => {
        actions.setIsOpen(!state.isOpen)
      },
      Enter: () => {},
      Escape: () => actions.setState({ isOpen: false, activeIndex: null }),
      ArrowDown: actions.incrementActiveIndex,
      ArrowUp: actions.decrementActiveIndex,
    },
    { preventDefault: true },
  )

  return keyboardEventHandler
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
    getDecoratorsForItem,

    /* Data Handling Props */
    dataKeyMapping,
    itemToString,

    /* Filter Settings */
    filterValue,
    filterPlaceholder,
    filterBehavior,
    filterBoxDirect,
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
    filterValueState,
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
  const keyboardHandler = useSelectKeyboardHandler(state, actions)
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
          getDecoratorsForItem={getDecoratorsForItem}
          placeholder={placeholder}
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
              ? filterValue
              : filterValueState
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
            const isSelected = selectedIndexes.indexOf(index) >= 0

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
