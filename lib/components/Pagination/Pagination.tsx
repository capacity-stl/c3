import { cn } from '@utils/cn'
import { PaginationProps, PaginationVariants } from './Pagination.props'
import { PaginationNext } from './PaginationNext'
import { PaginationPrevious } from './PaginationPrevious'
import { PaginationLink } from './PaginationLink'
import { PaginationEllipsis } from './PaginationEllipsis'
import {
  getMiddlePageRange,
  showStartEllipsis,
  showEndEllipsis,
} from './Pagination.utils'

const Pagination = ({ className, ...PaginationProps }: PaginationProps) => {
  const mergedProps = {
    totalPages: 10,
    currentPage: 1,
    setCurrentPage: () => {},
    totalItemsShown: 7,
    siblingRange: 3,
    activeBgColor: 'earth-300',
    activeTextColor: 'white',
    itemBgColor: 'white',
    bgColor: 'white',
    color: 'earth-300',
    hoverBgColor: 'earth-100',
    ...PaginationProps,
    testId: PaginationProps.testId ?? 'pagination-component',
  }

  const {
    totalPages,
    currentPage,
    setCurrentPage,
    totalItemsShown,
    siblingRange,
    itemBgColor,
    color,
    activeBgColor,
    activeTextColor,
    hoverBgColor,
  } = mergedProps

  const selectPage = (page: number) => {
    if (page >= 1 && page <= totalPages && setCurrentPage) {
      setCurrentPage(page)
    }
  }

  return (
    <div
      className={cn(PaginationVariants({ ...mergedProps }), className)}
      data-testid={mergedProps.testId}
    >
      <PaginationPrevious
        bgColor="white"
        icon="ArrowLeft"
        disabled={currentPage <= 1}
        onClick={() => selectPage(currentPage - 1)}
      />

      <PaginationLink
        key={1}
        value={1}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        color={color}
        itemBgColor={itemBgColor}
        activeBgColor={activeBgColor}
        activeTextColor={activeTextColor}
        hoverBgColor={hoverBgColor}
      />

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
        <PaginationLink
          key={page}
          itemBgColor={itemBgColor}
          value={page}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          color={color}
          activeBgColor={activeBgColor}
          activeTextColor={activeTextColor}
          hoverBgColor={hoverBgColor}
        />
      ))}

      {showEndEllipsis(
        currentPage,
        totalPages,
        totalItemsShown,
        siblingRange,
      ) && <PaginationEllipsis />}

      {totalPages > 1 && (
        <PaginationLink
          key={totalPages}
          value={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          color={color}
          itemBgColor={itemBgColor}
          activeBgColor={activeBgColor}
          activeTextColor={activeTextColor}
          hoverBgColor={hoverBgColor}
        />
      )}

      <PaginationNext
        bgColor="white"
        icon="ArrowRight"
        disabled={currentPage >= totalPages}
        onClick={() => selectPage(currentPage + 1)}
      />
    </div>
  )
}

export { Pagination }
