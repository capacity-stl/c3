const paddingKeys = ['p', 'px', 'py', 'pt', 'pr', 'pb', 'pl']
const paddingProps = {
  p: {
    '1': 'p-1',
    '2': 'p-2',
    '3': 'p-3',
    '4': 'p-4',
    '5': 'p-5',
    '6': 'p-6',
    '7': 'p-7',
    '8': 'p-8',
    '9': 'p-9',
    '10': 'p-10',
    '11': 'p-11',
    '12': 'p-12',
    '13': 'p-13',
  },
  px: {
    '1': 'px-1',
    '2': 'px-2',
    '3': 'px-3',
    '4': 'px-4',
    '5': 'px-5',
    '6': 'px-6',
    '7': 'px-7',
    '8': 'px-8',
    '9': 'px-9',
    '10': 'px-10',
    '11': 'px-11',
    '12': 'px-12',
    '13': 'px-13',
  },
  py: {
    '1': 'py-1',
    '2': 'py-2',
    '3': 'py-3',
    '4': 'py-4',
    '5': 'py-5',
    '6': 'py-6',
    '7': 'py-7',
    '8': 'py-8',
    '9': 'py-9',
    '10': 'py-10',
    '11': 'py-11',
    '12': 'py-12',
    '13': 'py-13',
  },
  pt: {
    '1': 'pt-1',
    '2': 'pt-2',
    '3': 'pt-3',
    '4': 'pt-4',
    '5': 'pt-5',
    '6': 'pt-6',
    '7': 'pt-7',
    '8': 'pt-8',
    '9': 'pt-9',
    '10': 'pt-10',
    '11': 'pt-11',
    '12': 'pt-12',
    '13': 'pt-13',
  },
  pr: {
    '1': 'pr-1',
    '2': 'pr-2',
    '3': 'pr-3',
    '4': 'pr-4',
    '5': 'pr-5',
    '6': 'pr-6',
    '7': 'pr-7',
    '8': 'pr-8',
    '9': 'pr-9',
    '10': 'pr-10',
    '11': 'pr-11',
    '12': 'pr-12',
    '13': 'pr-13',
  },
  pb: {
    '1': 'pb-1',
    '2': 'pb-2',
    '3': 'pb-3',
    '4': 'pb-4',
    '5': 'pb-5',
    '6': 'pb-6',
    '7': 'pb-7',
    '8': 'pb-8',
    '9': 'pb-9',
    '10': 'pb-10',
    '11': 'pb-11',
    '12': 'pb-12',
    '13': 'pb-13',
  },
  pl: {
    '1': 'pl-1',
    '2': 'pl-2',
    '3': 'pl-3',
    '4': 'pl-4',
    '5': 'pl-5',
    '6': 'pl-6',
    '7': 'pl-7',
    '8': 'pl-8',
    '9': 'pl-9',
    '10': 'pl-10',
    '11': 'pl-11',
    '12': 'pl-12',
    '13': 'pl-13',
  },
}
/** Type for padding prop values */
export type PaddingValue = keyof typeof paddingProps.p

/** Interface for components that support padding props */
export interface PaddingPropTypes {
  /** Padding on all sides */
  p?: PaddingValue | null
  /** Horizontal padding (left and right) */
  px?: PaddingValue | null
  /** Vertical padding (top and bottom) */
  py?: PaddingValue | null
  /** Top padding */
  pt?: PaddingValue | null
  /** Right padding */
  pr?: PaddingValue | null
  /** Bottom padding */
  pb?: PaddingValue | null
  /** Left padding */
  pl?: PaddingValue | null
}

export { paddingProps, paddingKeys }
