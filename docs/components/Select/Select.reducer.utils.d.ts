import { SelectItemType, SelectItemsType, ItemToStringType } from './Select.props';

export declare const getFilteredItems: ({ items, itemToString, filterValue, }: {
    items: SelectItemsType;
    itemToString: ItemToStringType;
    filterValue?: string | undefined;
}) => SelectItemsType;
export declare const findSelectedItemIndexes: ({ items, selectedItems, }: {
    items: SelectItemsType;
    selectedItems: SelectItemsType;
}) => number[];
export declare const processValueAndFilterItems: ({ items, value, filterValue, itemToString, }: {
    items: SelectItemsType;
    value: SelectItemType | SelectItemsType | undefined;
    itemToString: ItemToStringType;
    filterValue?: string | undefined;
}) => {
    items: SelectItemsType;
    filterValue: string | undefined;
    filteredItems: SelectItemsType;
    selectedItems: SelectItemsType;
    itemCount: number;
    filteredItemCount: number;
};
export declare const deriveInitialState: ({ items, value, itemToString, }: {
    items: SelectItemsType;
    value: SelectItemType | SelectItemsType | undefined;
    itemToString: ItemToStringType;
}) => {
    items: SelectItemsType;
    filterValue: string | undefined;
    filteredItems: SelectItemsType;
    selectedItems: SelectItemsType;
    itemCount: number;
    filteredItemCount: number;
    isOpen: boolean;
    activeIndex: null;
    lastActiveIndexChangeType: string;
};
export declare const handleSelectedItemByBehaviorType: (selectedItem: SelectItemType, selectedItems: SelectItemsType, isSelected: boolean, multi: boolean) => {
    selectedItems: SelectItemsType;
    isOpen: false;
} | {
    selectedItems: SelectItemsType;
    isOpen: true;
};
