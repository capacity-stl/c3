const marginKeys = ['m', 'mx', 'my', 'mt', 'mr', 'mb', 'ml'] as const
const marginProps = {
  m: {
    '1': 'm-1',
    '2': 'm-2',
    '3': 'm-3',
    '4': 'm-4',
    '5': 'm-5',
    '6': 'm-6',
    '7': 'm-7',
    '8': 'm-8',
    '9': 'm-9',
  },
  mx: {
    '1': 'mx-1',
    '2': 'mx-2',
    '3': 'mx-3',
    '4': 'mx-4',
    '5': 'mx-5',
    '6': 'mx-6',
    '7': 'mx-7',
    '8': 'mx-8',
    '9': 'mx-9',
  },
  my: {
    '1': 'my-1',
    '2': 'my-2',
    '3': 'my-3',
    '4': 'my-4',
    '5': 'my-5',
    '6': 'my-6',
    '7': 'my-7',
    '8': 'my-8',
    '9': 'my-9',
  },
  mt: {
    '1': 'mt-1',
    '2': 'mt-2',
    '3': 'mt-3',
    '4': 'mt-4',
    '5': 'mt-5',
    '6': 'mt-6',
    '7': 'mt-7',
    '8': 'mt-8',
    '9': 'mt-9',
  },
  mr: {
    '1': 'mr-1',
    '2': 'mr-2',
    '3': 'mr-3',
    '4': 'mr-4',
    '5': 'mr-5',
    '6': 'mr-6',
    '7': 'mr-7',
    '8': 'mr-8',
    '9': 'mr-9',
  },
  mb: {
    '1': 'mb-1',
    '2': 'mb-2',
    '3': 'mb-3',
    '4': 'mb-4',
    '5': 'mb-5',
    '6': 'mb-6',
    '7': 'mb-7',
    '8': 'mb-8',
    '9': 'mb-9',
  },
  ml: {
    '1': 'ml-1',
    '2': 'ml-2',
    '3': 'ml-3',
    '4': 'ml-4',
    '5': 'ml-5',
    '6': 'ml-6',
    '7': 'ml-7',
    '8': 'ml-8',
    '9': 'ml-9',
  },
}
/** Type for margin prop values */
export type MarginValue = keyof typeof marginProps.m

/** Interface for components that support margin props */
export interface MarginPropTypes {
  /** Margin on all sides */
  m?: MarginValue | null
  /** Horizontal margin (left and right) */
  mx?: MarginValue | null
  /** Vertical margin (top and bottom) */
  my?: MarginValue | null
  /** Top margin */
  mt?: MarginValue | null
  /** Right margin */
  mr?: MarginValue | null
  /** Bottom margin */
  mb?: MarginValue | null
  /** Left margin */
  ml?: MarginValue | null
}

export { marginProps, marginKeys }
