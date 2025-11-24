declare const getMiddlePageRange: ({ count, currentPage, totalItemsShown, siblingRange, }: {
    count: number;
    currentPage: number;
    totalItemsShown: number;
    siblingRange: number;
}) => number[];
declare const showStartEllipsis: (currentPage: number, totalPages: number, totalItemsShown: number, siblingRange: number) => boolean;
declare const showEndEllipsis: (currentPage: number, totalPages: number, totalItemsShown: number, siblingRange: number) => boolean;
declare const getColorClasses: (isCurrentPage: boolean, activeBgColor: string, activeTextColor: string, activeBorderColor: string, hoverBgColor: string, hoverTextColor: string, hoverBorderColor: string, itemBgColor: string, itemBorderColor: string, color?: string) => string;
declare const getNextPreviousColorClasses: (disabled: boolean, nextPreviousBgColor: string, nextPreviousBorderColor: string, nextPreviousTextColor: string, nextPreviousHoverBgColor: string, nextPreviousHoverBorderColor: string, nextPreviousHoverTextColor: string) => string;
export { getMiddlePageRange, showStartEllipsis, showEndEllipsis, getColorClasses, getNextPreviousColorClasses, };
