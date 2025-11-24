import { CardListProps, ListItemType } from './CardList.props';

declare const CardList: {
    <T extends Record<string, any>>({ className, items, noItems, titleKey, descriptionKey, datetimeKey, referenceKey, header, dense, divider, selectionMode, textSelectable, onSelectionChange, loading, bottomLeftContent, bottomRightContent, firstOptionAsButton, defaultSelectedItems, testId, ...listProps }: CardListProps<T & Partial<ListItemType>>): import("react/jsx-runtime").JSX.Element;
    Item: <T_1 extends Record<string, any>>({ item, titleKey, descriptionKey, datetimeKey, referenceKey, isSelected, bottomLeftContent, bottomRightContent, firstOptionAsButton, textSelectable, }: import('./CardList.props').CardListItemProps<T_1>) => import("react/jsx-runtime").JSX.Element;
};
export { CardList };
