declare const useDefaultSortHandler: (initialSortKey: string, initialIsAscending: boolean) => {
    onSort: (newSortKey: string) => void;
    sortKey: string;
    isAscending: boolean;
};
export { useDefaultSortHandler };
