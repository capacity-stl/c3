import { ListProps } from './List.props';

declare const List: {
    <T>({ className, items, noItems, renderItem, header, dense, divider, selectedItems, onItemClick, loading, ...listProps }: ListProps<T>): import("react/jsx-runtime").JSX.Element;
    Item: <T_1>({ item, renderItem, dense, onItemClick, isSelected, }: import('./List.props').ListItemProps<T_1>) => import("react/jsx-runtime").JSX.Element;
};
export { List };
