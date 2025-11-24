import { SelectItemType, SelectItemsType, ItemToStringType } from './Select.props';

export type SelectState = {
    isOpen: boolean;
    items: SelectItemsType;
    filterValue: string;
    selectedItems: SelectItemsType;
    activeIndex: number | null;
    itemCount: number;
    lastActiveIndexChangeType: string;
};
export type SelectStateWithDerivitives = SelectState & {
    filteredItems: SelectItemsType;
    filteredItemCount: number;
    selectedIndexes: Array<number>;
};
export type SelectActions = {
    setState: (newState: object) => void;
    setIsOpen: (isOpen: boolean) => void;
    setLastActiveIndexChangeType: (type: string) => void;
    setActiveIndex: (index: number) => void;
    selectItem: (selectedItem: SelectItemType, index: number, isSelected: boolean, multi: boolean) => void;
    clearSelection: () => void;
    setFilter: (filter: string) => void;
    clearFilter: () => void;
    incrementActiveIndex: () => void;
    decrementActiveIndex: () => void;
};
declare const useSelectReducer: ({ items, value, itemToString, }: {
    items: SelectItemsType;
    value: SelectItemType | SelectItemsType | undefined;
    itemToString: ItemToStringType;
}) => {
    state: SelectStateWithDerivitives;
    actions: SelectActions;
};
export { useSelectReducer };
