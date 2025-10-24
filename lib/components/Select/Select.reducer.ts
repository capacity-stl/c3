/* eslint-disable @typescript-eslint/no-explicit-any */
import { useReducer, useMemo, useEffect } from 'react'
import { incrementWithinBounds } from '@utils/numbers'
import {
  SelectItemType,
  SelectItemsType,
  ItemToStringType,
} from './Select.props'
import {
  getFilteredItems,
  findSelectedItemIndexes,
  processValueAndFilterItems,
  deriveInitialState,
  handleSelectedItemByBehaviorType,
} from './Select.reducer.utils'

/*
  General concepts
  `SelectState` should contain things that are directly settable. Actions for
  those variables should be exposed as functions returned via tha `actions`
  object from the main `useSelectReducer` hook

    isOpen: boolean
    items: SelectItemsType
    filterValue: string
    selectedItems: SelectItemsType
    activeIndex: number | null
    itemCount: number
    lastActiveIndexChangeType: string
    
  `SelectStateWithDerivitives` should be the return from `useSelectReducer`,
  and should incude derived data to help with rendering
    
    filteredItems: SelectItemsType
    filteredItemCount: number
    selectedIndexes: Array<number>
*/

export type SelectState = {
  isOpen: boolean
  items: SelectItemsType
  filterValue: string
  selectedItems: SelectItemsType
  activeIndex: number | null
  itemCount: number
  lastActiveIndexChangeType: string
}

export type SelectStateWithDerivitives = SelectState & {
  filteredItems: SelectItemsType
  filteredItemCount: number
  selectedIndexes: Array<number>
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
    case 'SELECT_ITEM':
      return {
        ...state,
        ...handleSelectedItemByBehaviorType(
          action.payload.selectedItem,
          state.selectedItems,
          action.payload.isSelected,
          action.payload.multi,
        ),
      }
    case 'CLEAR_SELECTION':
      return {
        ...state,
        selectedItems: [],
        isOpen: false,
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
  itemToString,
}: {
  items: SelectItemsType
  value: SelectItemType | SelectItemsType | undefined
  itemToString: ItemToStringType
}): { state: SelectStateWithDerivitives; actions: SelectActions } => {
  const [state, dispatcher]: [SelectState, React.Dispatch<SelectAction>] =
    useReducer(
      selectReducer,
      deriveInitialState({ items, value, itemToString }),
    )

  const filteredItems = getFilteredItems({
    items,
    itemToString,
    ...(state.filterValue ? { filterValue: state.filterValue } : {}),
  })

  const selectedIndexes = findSelectedItemIndexes({
    items: filteredItems,
    selectedItems: state.selectedItems,
  })

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
      dispatcher({ type: 'SET_STATE', payload: { activeIndex: index } }),
    [],
  )
  const incrementActiveIndex = useMemo(
    () => () =>
      dispatcher({
        type: 'SET_STATE',
        payload: {
          activeIndex: incrementWithinBounds(
            state.activeIndex,
            1,
            0,
            filteredItems.length - 1,
            true,
            true,
          ),
          isOpen: true,
          lastActiveIndexChangeType: 'keyboard',
        },
      }),
    [state, filteredItems],
  )
  const decrementActiveIndex = useMemo(
    () => () =>
      dispatcher({
        type: 'SET_STATE',
        payload: {
          activeIndex: incrementWithinBounds(
            state.activeIndex,
            -1,
            0,
            filteredItems.length - 1,
            true,
            true,
          ),
          isOpen: true,
          lastActiveIndexChangeType: 'keyboard',
        },
      }),
    [state, filteredItems],
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
    () => () => {
      dispatcher({
        type: 'SET_STATE',
        payload: processValueAndFilterItems({
          items,
          value,
          filterValue: '',
          itemToString,
        }),
      })
    },
    [items, value], //eslint-disable-line react-hooks/exhaustive-deps
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
    state: {
      ...state,
      selectedIndexes,
      filteredItems,
      filteredItemCount: filteredItems.length,
    },
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
