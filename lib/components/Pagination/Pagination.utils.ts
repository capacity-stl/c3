const getMiddlePageRange = ({
  count,
  currentPage,
  totalItemsShown,
  siblingRange,
}: {
  count: number
  currentPage: number
  totalItemsShown: number
  siblingRange: number
}) => {
  const NUM_MIDDLE_PAGES_WHEN_AT_ENDS = totalItemsShown - 3
  if (count <= 1) {
    return []
  }

  // If 7 or fewer pages, show all pages
  if (count <= totalItemsShown) {
    return Array.from({ length: count - 2 }, (_, i) => i + 2)
  }

  // If we are near the first page, show pages near start
  if (currentPage < siblingRange + 1) {
    return Array.from(
      { length: Math.min(count - 1, NUM_MIDDLE_PAGES_WHEN_AT_ENDS) },
      (_, i) => i + 2,
    )
  }

  // If we are near the last page, show pages near end
  if (currentPage + siblingRange >= count) {
    return Array.from(
      { length: NUM_MIDDLE_PAGES_WHEN_AT_ENDS },
      (_, i) => count - NUM_MIDDLE_PAGES_WHEN_AT_ENDS + i,
    )
  }

  return Array.from({ length: 3 }, (_, i) => currentPage - 1 + i)
}

const showStartEllipsis = (
  currentPage: number,
  totalPages: number,
  totalItemsShown: number,
  siblingRange: number,
) => currentPage > siblingRange && totalPages > totalItemsShown
const showEndEllipsis = (
  currentPage: number,
  totalPages: number,
  totalItemsShown: number,
  siblingRange: number,
) => currentPage < totalPages - siblingRange && totalPages > totalItemsShown

export { getMiddlePageRange, showStartEllipsis, showEndEllipsis }
