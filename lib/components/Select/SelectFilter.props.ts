import { cva, type VariantProps } from 'class-variance-authority'

const rootVariants = cva(
  ['sticky', 'top-0', 'bg-white', 'w-full', 'p-2', 'z-10'],
  {
    variants: {
      type: {},
    },
  },
)

const inputVariants = cva(
  [
    'bg-meteor-100',
    'w-full',
    'p-2',
    'rounded-xs',
    'border',
    'border-meteor-200',
    'outline-none',
  ],
  {
    variants: {},
  },
)

const componentVariants = (props: object) => {
  return {
    rootClassString: rootVariants(props),
    inputClassString: inputVariants(props),
  }
}

export enum SelectFilterEnums {
  None = 'none',
  Filter = 'filter',
  AdaptiveFilter = 'adaptiveFilter',
  Search = 'search',
}

export interface SelectFilterProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>,
    VariantProps<typeof rootVariants> {
  filterBehavior: SelectFilterEnums
  filterValue?: string
  filterPlaceholder: string
  itemCount: number
  onChange?: (arg: string) => void
}

export { rootVariants, componentVariants }
