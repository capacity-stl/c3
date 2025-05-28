import { cva, type VariantProps } from 'class-variance-authority'
import { DirectionMappingShape } from './useDefaultSortHandler'
import { fontSizes } from '@props/font.props'

const rootVariants = cva(['border-separate', 'border-spacing-0'], {
  variants: {},
})
const headerSectionVariants = cva(['sticky', 'top-0', 'z-10'], { variants: {} })
const headerRowVariants = cva([], {
  variants: {},
})
const headerCellVariants = cva(
  ['text-left', 'bg-white', 'border-b', 'border-meteor-200'],
  {
    variants: {},
  },
)
const headerCellDefaultContentVariants = cva(['whitespace-nowrap', 'p-3'], {
  variants: {},
})

const dataRowVariants = cva([], {
  variants: {
    clickable: {
      true: ['cursor-pointer', 'hover:bg-meteor-100'],
      false: [],
    },
  },
})
const dataCellVariants = cva(['border-b', 'border-meteor-200'], {
  variants: {},
})
const dataCellDefaultContentVariants = cva(['p-3', 'whitespace-nowrap'], {
  variants: {},
})

const componentVariants = (props: object) => {
  return {
    rootClassString: rootVariants(props),
    headerSectionClassString: headerSectionVariants(props),
    headerRowClassString: headerRowVariants(props),
    headerCellClassString: headerCellVariants(props),
    headerCellDefaultContentClassString:
      headerCellDefaultContentVariants(props),
    dataRowClassString: dataRowVariants(props),
    dataCellClassString: dataCellVariants(props),
    dataCellDefaultContentClassString: dataCellDefaultContentVariants(props),
  }
}

export interface ColumnSchema {
  dataKeys: Array<string>

  // If `header` is a function component, use `children` to position the sort controls
  header: null | string | React.FunctionComponent

  // Sorting the array is the responsibility of the implementation, but `sort` lets you
  // define what key you want passed back when the controls are clicked for this column
  sort?: string

  // `placeholder` can be used to customize the default renderer
  // This string will render instead if the `dataKeys` extration for the row is null
  placeholder?: string

  // `delimiter` can be used to customize the default renderer
  // If more than one key is provided in `dataKeys`, it will concatenate them with this
  delimiter?: string

  // `textType` can be used to customize the default renderer
  // This will apply to the `type` prop of the Text component inside the default cell
  textType?: keyof typeof fontSizes

  // `valueMapping` can be used for simple transforms using the default cell renderer
  // The key is the incoming value from the data, and the value is the desired output
  valueMapping?: { [key: string]: string }

  // `keyPropMapping` can be used for implementing custom components
  // The key is the incoming `dataKeys` name, and the value is desired the prop name
  keyPropMapping?: { [key: string]: string | null | undefined }

  // `component` can be passed to override the default cell content renderer
  // It will receive the `dataKeys` as props, so you can provide custom formatting
  component?: React.FunctionComponent<any> //eslint-disable-line @typescript-eslint/no-explicit-any

  // `key` is used as part of the React key prop when mapping cells in this column
  // This is required for the array, so we will attempt to infer a key if not provided
  key?: string
}

export interface SortSchema {
  onSort: (newColumn: string) => void
  column: string
  order: string
  orderKey: DirectionMappingShape
}

export interface DataTableProps
  extends React.HTMLAttributes<HTMLTableElement>,
    VariantProps<typeof rootVariants> {
  columns: Array<ColumnSchema>
  data: Array<{ [key: string]: any }> //eslint-disable-line @typescript-eslint/no-explicit-any
  uniqueKey?: string
  sort?: SortSchema
  rowClickAction?: (rowData: object) => void
  selectable?: boolean
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
  componentVariants,
}
