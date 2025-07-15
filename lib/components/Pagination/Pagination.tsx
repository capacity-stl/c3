import { cn } from '@utils/cn'
import { PaginationProps, PaginationVariants } from './Pagination.props'
import { PaginationPreviousNext } from './PaginationPreviousNext'
import { PaginationItem } from './PaginationItem'
import { PaginationEllipsis } from './PaginationEllipsis'
import { PAGINATION_DEFAULTS } from './Pagination.defaults'
import { usePaginationColors } from './usePaginationColors'
import {
  getMiddlePageRange,
  showStartEllipsis,
  showEndEllipsis,
} from './Pagination.utils'

const Pagination = ({
  className,
  totalPages = PAGINATION_DEFAULTS.totalPages,
  currentPage = PAGINATION_DEFAULTS.currentPage,
  setCurrentPage = () => {},
  totalItemsShown = PAGINATION_DEFAULTS.totalItemsShown,
  siblingRange = PAGINATION_DEFAULTS.siblingRange,
  icon = PAGINATION_DEFAULTS.icon,
  testId = PAGINATION_DEFAULTS.testId,
  ...props
}: PaginationProps) => {
  const colors = usePaginationColors(props)

  const selectPage = (page: number) => {
    if (page >= 1 && page <= totalPages && setCurrentPage) {
      setCurrentPage(page)
    }
  }

  console.table(colors)

  const itemProps = {
    currentPage,
    setCurrentPage,
    // Item colors
    bgColor: colors.itemColors.bgColor,
    textColor: colors.itemColors.textColor,
    borderColor: colors.itemColors.borderColor,
    // Active colors
    activeBgColor: colors.activeColors.bgColor,
    activeTextColor: colors.activeColors.textColor,
    activeBorderColor: colors.activeColors.borderColor,
    // Hover colors
    hoverBgColor: colors.hoverColors.bgColor,
    hoverTextColor: colors.hoverColors.textColor,
    hoverBorderColor: colors.hoverColors.borderColor,
  }

  const navProps = {
    icon,
    bgColor: colors.nextPreviousColors.bgColor,
    borderColor: colors.nextPreviousColors.borderColor,
    textColor: colors.nextPreviousColors.textColor,
    hoverBgColor: colors.nextPreviousColors.hoverBgColor,
    hoverBorderColor: colors.nextPreviousColors.hoverBorderColor,
    hoverTextColor: colors.nextPreviousColors.hoverTextColor,
  }

  return (
    <div
      className={cn(PaginationVariants({ ...props }), className)}
      data-testid={testId}
    >
      <PaginationPreviousNext
        {...navProps}
        disabled={currentPage <= 1}
        onClick={() => selectPage(currentPage - 1)}
        nextPreviousType="previous"
      />

      <PaginationItem key={1} value={1} {...itemProps} />

      {showStartEllipsis(
        currentPage,
        totalPages,
        totalItemsShown,
        siblingRange,
      ) && <PaginationEllipsis />}

      {getMiddlePageRange({
        count: totalPages,
        currentPage,
        totalItemsShown,
        siblingRange,
      }).map((page) => (
        <PaginationItem key={page} value={page} {...itemProps} />
      ))}

      {showEndEllipsis(
        currentPage,
        totalPages,
        totalItemsShown,
        siblingRange,
      ) && <PaginationEllipsis />}

      {totalPages > 1 && (
        <PaginationItem key={totalPages} value={totalPages} {...itemProps} />
      )}

      <PaginationPreviousNext
        {...navProps}
        disabled={currentPage >= totalPages}
        onClick={() => selectPage(currentPage + 1)}
        nextPreviousType="next"
      />
    </div>
  )
}

export { Pagination }
