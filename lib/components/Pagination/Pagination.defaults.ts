export const PAGINATION_DEFAULTS = {
  // Layout defaults
  totalPages: 10,
  currentPage: 1,
  totalItemsShown: 7,
  siblingRange: 3,
  icon: 'CaretRight' as const,
  testId: 'pagination-component',

  // Item colors
  item: {
    bgColor: 'bg-white',
    textColor: 'text-night',
    borderColor: 'border-meteor-200',
  },

  // Active state colors
  activeColors: {
    bgColor: 'bg-earth-300',
    textColor: 'text-white',
    borderColor: 'border-earth-300',
  },

  // Hover state colors
  hover: {
    bgColor: 'hover:bg-earth-300',
    textColor: 'hover:text-white',
    borderColor: 'hover:border-earth-300',
  },

  // Next/Previous button colors
  nextPrevious: {
    bgColor: 'bg-white',
    borderColor: 'border-earth-300',
    textColor: 'text-earth-300',
    hoverBgColor: 'hover:bg-earth-300',
    hoverBorderColor: 'hover:border-earth-300',
    hoverTextColor: 'hover:text-white',
  },
}

export type PaginationColorTheme = {
  item: {
    bgColor: string
    textColor: string
    borderColor: string
  }
  activeColors: {
    bgColor: string
    textColor: string
    borderColor: string
  }
  hover: {
    bgColor: string
    textColor: string
    borderColor: string
  }
  nextPrevious: {
    bgColor: string
    borderColor: string
    textColor: string
    hoverBgColor: string
    hoverBorderColor: string
    hoverTextColor: string
  }
}
