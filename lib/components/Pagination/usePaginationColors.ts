import { PAGINATION_DEFAULTS } from './Pagination.defaults'
import { PaginationProps } from './Pagination.props'

export const usePaginationColors = (props: PaginationProps) => {
  return {
    // Item colors - prioritize individual props, fallback to defaults
    itemColors: {
      bgColor: props.itemBgColor || PAGINATION_DEFAULTS.item.bgColor,
      textColor: props.itemTextColor || PAGINATION_DEFAULTS.item.textColor,
      borderColor:
        props.itemBorderColor || PAGINATION_DEFAULTS.item.borderColor,
    },

    // Active colors - prioritize individual props, fallback to defaults
    activeColors: {
      bgColor: props.activeBgColor || PAGINATION_DEFAULTS.activeColors.bgColor,
      textColor:
        props.activeTextColor || PAGINATION_DEFAULTS.activeColors.textColor,
      borderColor:
        props.activeBorderColor || PAGINATION_DEFAULTS.activeColors.borderColor,
    },

    // Hover colors - prioritize individual props, fallback to defaults
    hoverColors: {
      bgColor: props.hoverBgColor || PAGINATION_DEFAULTS.hover.bgColor,
      textColor: props.hoverTextColor || PAGINATION_DEFAULTS.hover.textColor,
      borderColor:
        props.hoverBorderColor || PAGINATION_DEFAULTS.hover.borderColor,
    },

    // Next/Previous colors - prioritize individual props, fallback to defaults
    nextPreviousColors: {
      bgColor:
        props.nextPreviousBgColor || PAGINATION_DEFAULTS.nextPrevious.bgColor,
      borderColor:
        props.nextPreviousBorderColor ||
        PAGINATION_DEFAULTS.nextPrevious.borderColor,
      textColor:
        props.nextPreviousTextColor ||
        PAGINATION_DEFAULTS.nextPrevious.textColor,
      hoverBgColor:
        props.nextPreviousHoverBgColor ||
        PAGINATION_DEFAULTS.nextPrevious.hoverBgColor,
      hoverBorderColor:
        props.nextPreviousHoverBorderColor ||
        PAGINATION_DEFAULTS.nextPrevious.hoverBorderColor,
      hoverTextColor:
        props.nextPreviousHoverTextColor ||
        PAGINATION_DEFAULTS.nextPrevious.hoverTextColor,
    },
  }
}
