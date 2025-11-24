import { ListItemProps } from './List.props';

declare const ListItem: <T>({ item, renderItem, dense, onItemClick, isSelected, }: ListItemProps<T>) => import("react/jsx-runtime").JSX.Element;
export { ListItem };
