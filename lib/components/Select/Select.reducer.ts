/* eslint-disable @typescript-eslint/no-explicit-any */
import { useReducer, useMemo, useEffect } from 'react'
import { incrementWithinBounds } from '@utils/numbers'
import {
  SelectItemType,
  SelectItemsType,
  ItemToStringType,
} from './Select.props'

export type SelectState = {
  isOpen: boolean
  items: SelectItemsType
  filterValueState: string
  filteredItems: SelectItemsType
  selectedItems: SelectItemsType
  selectedIndexes: Array<number>
  activeIndex: number | null
  itemCount: number
  filteredItemCount: number
  lastActiveIndexChangeType: string
}

export type SelectActions = {
  setState: (newState: object) => void
  setIsOpen: (isOpen: boolean) => void
  setLastActiveIndexChangeType: (type: string) => void
  setActiveIndex: (index: number) => void
  selectItem: (
    selectedItem: SelectItemType,
    index: number,
    isSelected: boolean,
    multi: boolean,
  ) => void
  clearSelection: () => void
  setFilter: (filter: string) => void
  clearFilter: () => void
  incrementActiveIndex: () => void
  decrementActiveIndex: () => void
}

type SelectAction = {
  payload: any
  type: string
}

const defaultItemToString = (item: SelectItemType): string => {
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

const getFilteredItems = ({
  items,
  filterValue = '',
  itemToString = defaultItemToString,
}: {
  items: SelectItemsType
  filterValue?: string
  itemToString?: ItemToStringType
}) => {
  const formattedFilterValue = filterValue.toLowerCase().trim()

  return formattedFilterValue !== ''
    ? items.filter((item) => {
        const stringValue = itemToString(item).toLowerCase()

        return stringValue.indexOf(formattedFilterValue) >= 0
      })
    : items
}

const findSelectedItemIndexes = ({
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

const processValueAndFilterItems = ({
  items,
  value,
  filterValue,
  itemToString,
}: {
  items: SelectItemsType
  value: SelectItemType | SelectItemsType | undefined
  filterValue?: string
  itemToString?: ItemToStringType
}) => {
  const selectedItems = value
    ? Array.isArray(value)
      ? value
      : ([value] as SelectItemsType)
    : []

  const filteredItems = getFilteredItems({
    items,
    ...(filterValue ? { filterValue } : {}),
    ...(typeof itemToString === 'function' ? { itemToString } : {}),
  })

  return {
    items,
    filterValueState: filterValue,
    filteredItems,
    selectedItems,
    selectedIndexes: findSelectedItemIndexes({
      items: filteredItems,
      selectedItems,
    }),
    itemCount: items.length,
    filteredItemCount: filteredItems.length,
  }
}

const deriveInitialState = ({
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

const handleSelectedItemByBehaviorType = (
  selectedItem: SelectItemType,
  selectedItems: SelectItemsType,
  selectedIndexes: Array<number>,
  index: number,
  isSelected: boolean,
  multi: boolean,
) => {
  if (!multi)
    return {
      selectedItems: [selectedItem],
      selectedIndexes: [index],
      isOpen: multi,
    }

  if (isSelected) {
    return {
      selectedItems: selectedItems.filter(
        (item) => JSON.stringify(item) !== JSON.stringify(selectedItem),
      ),
      selectedIndexes: selectedIndexes.filter((i) => i !== index),
      isOpen: multi,
    }
  }

  return {
    selectedItems: [...selectedItems, selectedItem],
    selectedIndexes: [...selectedIndexes, index],
    isOpen: multi,
  }
}

const selectReducer = (state: SelectState, action: SelectAction) => {
  switch (action.type) {
    case 'SET_STATE':
      return { ...state, ...action.payload }
    case 'SET_OPEN':
      return {
        ...state,
        isOpen: action.payload,
        activeIndex: null,
      }
    case 'SET_ACTIVE_INDEX':
      return {
        ...state,
        activeIndex: action.payload,
      }
    case 'SELECT_ITEM':
      return {
        ...state,
        ...handleSelectedItemByBehaviorType(
          action.payload.selectedItem,
          state.selectedItems,
          state.selectedIndexes,
          action.payload.index,
          action.payload.isSelected,
          action.payload.multi,
        ),
      }
    case 'CLEAR_SELECTION':
      return {
        ...state,
        selectedItems: [],
        selectedIndexes: [],
        isOpen: false,
      }
    case 'INCREMENT_ACTIVE_INDEX':
      return {
        ...state,
        activeIndex: incrementWithinBounds(
          state.activeIndex,
          1,
          0,
          state.filteredItemCount - 1,
          true,
          true,
        ),
        isOpen: true,
        lastActiveIndexChangeType: 'keyboard',
      }
    case 'DECREMENT_ACTIVE_INDEX':
      return {
        ...state,
        activeIndex: incrementWithinBounds(
          state.activeIndex,
          -1,
          0,
          state.filteredItemCount - 1,
          true,
          true,
        ),
        isOpen: true,
        lastActiveIndexChangeType: 'keyboard',
      }
    case 'SET_LAST_ACTIVE_INDEX_CHANGE_TYPE':
      return {
        ...state,
        lastActiveIndexChangeType: action.payload,
      }
    default:
      return state
  }
}

const useSelectReducer = ({
  items,
  value,
  itemToString = defaultItemToString,
}: {
  items: SelectItemsType
  value: SelectItemType | SelectItemsType | undefined
  itemToString: ItemToStringType
}): { state: SelectState; actions: SelectActions } => {
  const [state, dispatcher] = useReducer(
    selectReducer,
    deriveInitialState({ items, value, itemToString }),
  )

  const setState = useMemo(
    () => (newState: object) =>
      dispatcher({ type: 'SET_STATE', payload: newState }),
    [],
  )
  const setIsOpen = useMemo(
    () => (isOpen: boolean) =>
      dispatcher({ type: 'SET_OPEN', payload: isOpen }),
    [],
  )
  const setLastActiveIndexChangeType = useMemo(
    () => (type: string) =>
      dispatcher({
        type: 'SET_LAST_ACTIVE_INDEX_CHANGE_TYPE',
        payload: type,
      }),
    [],
  )
  const setActiveIndex = useMemo(
    () => (index: number) =>
      dispatcher({ type: 'SET_ACTIVE_INDEX', payload: index }),
    [],
  )
  const incrementActiveIndex = useMemo(
    () => () => dispatcher({ type: 'INCREMENT_ACTIVE_INDEX', payload: null }),
    [],
  )
  const decrementActiveIndex = useMemo(
    () => () => dispatcher({ type: 'DECREMENT_ACTIVE_INDEX', payload: null }),
    [],
  )
  const selectItem = useMemo(
    () =>
      (
        selectedItem: SelectItemType,
        index: number,
        isSelected: boolean,
        multi: boolean,
      ) =>
        dispatcher({
          type: 'SELECT_ITEM',
          payload: { selectedItem, index, isSelected, multi },
        }),
    [],
  )
  const clearSelection = useMemo(
    () => () =>
      dispatcher({
        type: 'CLEAR_SELECTION',
        payload: null,
      }),
    [],
  )
  const setFilter = useMemo(
    () => (newFilter: string) => {
      dispatcher({
        type: 'SET_STATE',
        payload: processValueAndFilterItems({
          items,
          value,
          filterValue: newFilter,
          itemToString,
        }),
      })
    },
    [items, value], //eslint-disable-line react-hooks/exhaustive-deps
  )
  const clearFilter = useMemo(
    () => () => dispatcher({ type: 'SET_FILTER_STRING', payload: '' }),
    [],
  )

  useEffect(
    () =>
      setState(
        processValueAndFilterItems({
          items,
          value,
          filterValue: state.filterValue,
          itemToString,
        }),
      ),
    [items, value, setState], //eslint-disable-line react-hooks/exhaustive-deps
  )

  return {
    state,
    actions: {
      setState,
      setIsOpen,
      setLastActiveIndexChangeType,
      setActiveIndex,
      selectItem,
      clearSelection,
      setFilter,
      clearFilter,
      incrementActiveIndex,
      decrementActiveIndex,
    },
  }
}

export { useSelectReducer }
