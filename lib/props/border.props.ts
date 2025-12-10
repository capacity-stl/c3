const borderProps = {
  border: {
    default: 'border border-meteor-200',
    error: 'border border-mars-300',
    focus:
      'border border-meteor-200 focus:border focus:border-transparent focus:shadow-outline-focus focus:outline-none',
    focusWithin:
      'border border-meteor-200 focus-within:border focus-within:border-transparent focus-within:shadow-outline-focus focus-within:outline-none',
    focused: 'border border-transparent shadow-outline-focus outline-none',
    focusedWithin:
      'border border-transparent shadow-outline-focus outline-none',
    dashed: 'border border-dashed border-meteor-300',
    transparent: 'border border-transparent',
  },
  borderTop: {
    default: 'border-t border-meteor-200',
    error: 'border-t border-mars-300',
    focus:
      'border-t border-meteor-200 focus:border-earth-300 focus:shadow-outlined focus:shadow-earth-300',
    focusWithin:
      'border-t border-meteor-200 focus-within:border-t focus-within:border-transparent focus-within:shadow-outline-focus',
    dashed: 'border-t border-dashed border-meteor-300',
    transparent: 'border-t border-transparent',
  },
  borderBottom: {
    default: 'border-b border-meteor-200',
    error: 'border-b border-mars-300',
    focus:
      'border-b border-meteor-200 focus:border-earth-300 focus:shadow-outlined focus:shadow-earth-300',
    focusWithin:
      'border-b border-meteor-200 focus-within:border-b focus-within:border-transparent focus-within:shadow-outline-focus',
    dashed: 'border-b border-dashed border-meteor-300',
    transparent: 'border-b border-transparent',
  },
  borderLeft: {
    default: 'border-l border-meteor-200',
    error: 'border-l border-mars-300',
    focus:
      'border-l border-meteor-200 focus:border-earth-300 focus:shadow-outlined focus:shadow-earth-300',
    focusWithin:
      'border-l border-meteor-200 focus-within:border-l focus-within:border-transparent focus-within:shadow-outline-focus',
    dashed: 'border-l border-dashed border-meteor-300',
    transparent: 'border-l border-transparent',
  },
  borderRight: {
    default: 'border-r border-meteor-200',
    error: 'border-r border-mars-300',
    focus:
      'border-r border-meteor-200 focus:border-earth-300 focus:shadow-outlined focus:shadow-earth-300',
    focusWithin:
      'border-r border-meteor-200 focus-within:border-r focus-within:border-transparent focus-within:shadow-outline-focus',
    dashed: 'border-r border-dashed border-meteor-300',
    transparent: 'border-r border-transparent',
  },
}

/** Type for border prop values */
export type BorderValue = keyof typeof borderProps.border

/** Type for borderTop prop values */
export type BorderTopValue = keyof typeof borderProps.borderTop

/** Type for borderBottom prop values */
export type BorderBottomValue = keyof typeof borderProps.borderBottom

/** Type for borderLeft prop values */
export type BorderLeftValue = keyof typeof borderProps.borderLeft

/** Type for borderRight prop values */
export type BorderRightValue = keyof typeof borderProps.borderRight

/** Interface for components that support border props */
export interface BorderPropTypes {
  /** Border style */
  border?: BorderValue | null
  /** Top border style */
  borderTop?: BorderTopValue | null
  /** Bottom border style */
  borderBottom?: BorderBottomValue | null
  /** Left border style */
  borderLeft?: BorderLeftValue | null
  /** Right border style */
  borderRight?: BorderRightValue | null
}

export { borderProps }
