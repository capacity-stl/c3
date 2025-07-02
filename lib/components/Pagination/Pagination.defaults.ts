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
    bgColor: 'white',
    textColor: 'night',
    borderColor: 'meteor-200',
  },

  // Active state colors
  activeColors: {
    bgColor: 'earth-300',
    textColor: 'white',
    borderColor: 'earth-300',
  },

  // Hover state colors
  hover: {
    bgColor: 'earth-300',
    textColor: 'white',
    borderColor: 'earth-100',
  },

  // Next/Previous button colors
  nextPrevious: {
    bgColor: 'white',
    borderColor: 'earth-300',
    textColor: 'earth-300',
    hoverBgColor: 'earth-300',
    hoverBorderColor: 'earth-300',
    hoverTextColor: 'white',
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
