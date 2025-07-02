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

import { colorNames } from '@props/color.props'

// Generic function to create color class mappings
const createColorMapping = (prefix: string): Record<string, string> =>
  colorNames.reduce(
    (map, colorName) => ({
      ...map,
      [colorName]: `${prefix}-${colorName}`,
    }),
    {} as Record<string, string>,
  )

// Create all color mappings using the generic function
const hoverBgColorMap = createColorMapping('hover:bg')
const borderColorMap = createColorMapping('border')
const hoverBorderColorMap = createColorMapping('hover:border')
const hoverTextColorMap = createColorMapping('hover:text')
const bgColorMap = createColorMapping('bg')
const textColorMap = createColorMapping('text')

const getColorClasses = (
  isCurrentPage: boolean,
  activeBgColor: string,
  activeTextColor: string,
  activeBorderColor: string,
  hoverBgColor: string,
  hoverTextColor: string,
  hoverBorderColor: string,
  itemBgColor: string,
  itemBorderColor: string,
  color?: string,
) => {
  if (isCurrentPage) {
    const activeBorderClass =
      borderColorMap[activeBorderColor] || 'border-earth-300'
    return `${activeBorderClass} bg-${activeBgColor} text-${activeTextColor} shadow-md`
  }

  const hoverBgClass = hoverBgColorMap[hoverBgColor] || 'hover:bg-earth-100'
  const hoverBorderClass =
    hoverBorderColorMap[hoverBorderColor] || 'hover:border-earth-300'
  const hoverTextClass = hoverTextColorMap[hoverTextColor] || 'hover:text-night'
  const itemBorderClass = borderColorMap[itemBorderColor] || 'border-earth-300'

  return `${itemBorderClass} ${hoverBorderClass} ${hoverBgClass} ${hoverTextClass} hover:shadow-md bg-${itemBgColor} ${color ? `text-${color}` : ''}`
}

const getNextPreviousColorClasses = (
  disabled: boolean,
  nextPreviousBgColor: string,
  nextPreviousBorderColor: string,
  nextPreviousTextColor: string,
  nextPreviousHoverBgColor: string,
  nextPreviousHoverBorderColor: string,
  nextPreviousHoverTextColor: string,
) => {
  if (disabled) {
    return 'cursor-not-allowed opacity-50'
  }

  const bgClass = bgColorMap[nextPreviousBgColor] || 'bg-white'
  const textClass = textColorMap[nextPreviousTextColor] || 'text-night'
  const borderClass =
    borderColorMap[nextPreviousBorderColor] || 'border-earth-300'
  const hoverBgClass =
    hoverBgColorMap[nextPreviousHoverBgColor] || 'hover:bg-earth-100'
  const hoverBorderClass =
    hoverBorderColorMap[nextPreviousHoverBorderColor] ||
    'hover:border-earth-300'
  const hoverTextClass =
    hoverTextColorMap[nextPreviousHoverTextColor] || 'hover:text-earth-300'

  return `cursor-pointer ${bgClass} ${textClass} ${borderClass} ${hoverBgClass} ${hoverBorderClass} ${hoverTextClass} hover:shadow-md`
}

export {
  getMiddlePageRange,
  showStartEllipsis,
  showEndEllipsis,
  getColorClasses,
  getNextPreviousColorClasses,
}
