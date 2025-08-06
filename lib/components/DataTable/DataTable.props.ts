import { cva, type VariantProps } from 'class-variance-authority'
import { fontSizes } from '@props/font.props'

const rootVariants = cva(['border-separate', 'border-spacing-0'], {
  variants: {},
})
const headerSectionVariants = cva(['sticky', 'top-0'], { variants: {} })
const headerRowVariants = cva([], {
  variants: {},
})
const headerCellVariants = cva(
  ['text-left', 'bg-white', 'border-b', 'border-meteor-200', 'border-solid'],
  {
    variants: {},
  },
)
const headerCellDefaultContentVariants = cva(['whitespace-nowrap', 'p-3'], {
  variants: {},
})

const headerCellSorterOptionalContainerVariants = cva(
  ['flex', 'gap-2', 'items-center', 'group'],
  {
    variants: {
      isSelectable: {
        true: ['cursor-pointer'],
        false: [],
      },
    },
  },
)

const dataRowVariants = cva([], {
  variants: {
    isClickable: {
      true: ['cursor-pointer', 'hover:bg-meteor-100'],
      false: [],
    },
  },
})
const dataCellVariants = cva(
  ['border-b', 'border-solid', 'border-meteor-200', 'align-middle'],
  {
    variants: {},
  },
)
const dataCellDefaultContentVariants = cva(['p-3', 'whitespace-nowrap'], {
  variants: {},
})

const sortButtonVariants = cva(['flex', 'flex-col', 'gap-1'], {
  variants: {
    isDefault: {
      true: ['mr-3'],
      false: [],
    },
  },
})

const sortButtonArrowVariants = cva(['w-3', 'border-solid'], {
  variants: {
    direction: {
      up: [
        'border-b-6',
        'border-l-6',
        'border-r-6',
        'border-l-transparent',
        'border-r-transparent',
      ],
      down: [
        'border-t-6',
        'border-l-6',
        'border-r-6',
        'border-l-transparent',
        'border-r-transparent',
      ],
    },
    isActive: {
      true: [],
      false: [],
    },
    isAscending: {
      true: [],
      false: [],
    },
  },
  compoundVariants: [
    {
      direction: 'up',
      isActive: true,
      isAscending: true,
      class: ['border-b-earth-300'],
    },
    {
      direction: 'up',
      isActive: true,
      isAscending: false,
      class: ['border-b-meteor-200', 'group-hover:border-b-meteor-300'],
    },
    {
      direction: 'up',
      isActive: false,
      isAscending: false,
      class: ['border-b-meteor-200', 'group-hover:border-b-meteor-300'],
    },
    {
      direction: 'up',
      isActive: false,
      isAscending: true,
      class: ['border-b-meteor-200', 'group-hover:border-b-meteor-300'],
    },
    {
      direction: 'down',
      isActive: true,
      isAscending: false,
      class: ['border-t-earth-300'],
    },
    {
      direction: 'down',
      isActive: true,
      isAscending: true,
      class: ['border-t-meteor-200', 'group-hover:border-t-meteor-300'],
    },
    {
      direction: 'down',
      isActive: false,
      isAscending: true,
      class: ['border-t-meteor-200', 'group-hover:border-t-meteor-300'],
    },
    {
      direction: 'down',
      isActive: false,
      isAscending: false,
      class: ['border-t-meteor-200', 'group-hover:border-t-meteor-300'],
    },
  ],
})

const componentVariants = (props: object) => {
  return {
    rootClassString: rootVariants(props),
    headerSectionClassString: headerSectionVariants(props),
    headerRowClassString: headerRowVariants(props),
    headerCellClassString: headerCellVariants(props),
    headerCellSorterOptionalClassString:
      headerCellSorterOptionalContainerVariants(props),
    headerCellDefaultContentClassString:
      headerCellDefaultContentVariants(props),
    dataRowClassString: dataRowVariants(props),
    dataCellClassString: dataCellVariants(props),
    dataCellDefaultContentClassString: dataCellDefaultContentVariants(props),
  }
}

export interface ColumnSchema<T extends object> {
  // `header` will render in the thead section for this column if set.
  // If you provide a function component for a row that is sortable, use `children`
  // to position the sort controls in your custom element structure.
  header:
    | null
    | string
    | React.FunctionComponent<{ children?: React.ReactElement }>

  // `dataKeys` is an array of key names to pull from the object.
  dataKeys?: Array<keyof T>

  // `align` can be used to align the column content.
  align?: 'left' | 'center' | 'right'

  // `headerCellClassName` can be used to customize the header cell.
  headerCellClassName?: string

  // `dataCellClassName` can be used to customize the data cell.
  dataCellClassName?: string

  // Sorting the array is the responsibility of the implementation.
  // If `sortKey` is set, the header will render sort arrows (or provide the block to
  // the custom header as `children`). Clicking the header will pass this string back
  // to callback you provid as `DataTableProps.sort.onSort`. You can implement your
  // own method of toggling direction based on this, but the `useDefaultSortHandler`
  // hook provides some basic functionality that may be sufficient.
  sortKey?: keyof T

  // `placeholder` can be used to customize the default renderer.
  // This string will render instead if the `dataKeys` extration for the row is null.
  placeholder?: string

  // `delimiter` can be used to customize the default renderer.
  // If more than one key is provided in `dataKeys`, it will concatenate them with this.
  delimiter?: string

  // `textType` can be used to customize the default renderer.
  // This will apply to the `type` prop of the Text component inside the default cell.
  textType?: keyof typeof fontSizes

  // `valueMapping` can be used for simple transforms using the default cell renderer.
  // The key is the incoming value from the data, and the value is the desired output.
  valueMapping?: { [key: string]: string }

  // `keyPropMapping` can be used for implementing custom components.
  // The key is the incoming `dataKeys` name, and the value is desired the prop name.
  keyPropMapping?: { [key in keyof T]: string | null | undefined }

  // `component` can be passed to override the default cell content renderer.
  // It will receive the `dataKeys` as props, so you can provide custom formatting.
  component?: React.FunctionComponent<T>

  // `tooltip` can be used to provide a tooltip for the header cell.
  tooltip?: string

  // `key` is used as part of the React key prop when mapping cells in this column.
  // This is required for the array, so we will attempt to infer a key if not provided.
  key?: string
}

export interface SortSchema {
  onSort: (column: string) => void
  sortKey: string
  isAscending: boolean
}

export interface DataTableProps<T extends object>
  extends React.HTMLAttributes<HTMLTableElement>,
    VariantProps<typeof rootVariants> {
  columns: Array<ColumnSchema<T>>
  data: Array<T>
  uniqueKey?: string
  sort?: SortSchema
  align?: 'left' | 'center' | 'right'
  onClickRow?: (rowData: Partial<T>) => void
  isSelectable?: boolean
  selectedIndexes?: Array<number>
  onSelectRow?: (rowData: T, selected: boolean) => void
  onSelectAll?: () => void
  borderColor?: string
  testId?: string
}

export {
  rootVariants,
  headerSectionVariants,
  headerRowVariants,
  headerCellVariants,
  headerCellDefaultContentVariants,
  dataRowVariants,
  dataCellVariants,
  dataCellDefaultContentVariants,
  sortButtonVariants,
  sortButtonArrowVariants,
  componentVariants,
}
