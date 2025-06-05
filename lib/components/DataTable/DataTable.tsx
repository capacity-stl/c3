import { cn } from '@utils/cn'
import { DataTableProps, componentVariants } from './DataTable.props'
import { getKeyFromDataObject } from './DataTable.utils'
import { DataTableHeaderRow } from './DataTableHeader'
import { DataTableDataRow } from './DataTableContent'

const DataTable = ({
  columns,
  data,
  className,
  uniqueKey,
  sort,
  onClickRow,
  isSelectable,
  selectedIndexes,
  onSelectRow,
  onSelectAll,
  ...styleProps
}: DataTableProps) => {
  const hasClickHandler = typeof onClickRow === 'function'
  const hasSelecthandler = typeof onSelectRow === 'function'
  const {
    rootClassString,
    headerSectionClassString,
    headerRowClassString,
    headerCellClassString,
    headerCellSorterOptionalClassString,
    headerCellDefaultContentClassString,
    dataRowClassString,
    dataCellClassString,
    dataCellDefaultContentClassString,
  } = componentVariants({
    ...styleProps,
    isClickable: hasClickHandler,
    isSelectable: hasSelecthandler,
  })

  const selectState =
    Array.isArray(selectedIndexes) && selectedIndexes.length > 0
      ? selectedIndexes.length === data.length
        ? 2
        : 1
      : 0

  return (
    <table className={cn(className, rootClassString)}>
      <DataTableHeaderRow
        {...{
          columns,
          sort,
          isSelectable,
          selectState,
          onSelectAll,
          headerSectionClassString,
          headerRowClassString,
          headerCellClassString,
          headerCellSorterOptionalClassString,
          headerCellDefaultContentClassString,
        }}
      />
      <tbody>
        {data?.map((rowData, index) => {
          const key = `row-${getKeyFromDataObject(rowData, index, uniqueKey)}`
          const isSelected =
            Array.isArray(selectedIndexes) &&
            selectedIndexes?.indexOf(index) >= 0
          const onClick = hasClickHandler ? () => onClickRow(rowData) : () => {}
          const onSelect = hasSelecthandler
            ? () => {
                console.log(
                  'DataTable map onSelect',
                  rowData,
                  !isSelected,
                  onSelectRow,
                )

                onSelectRow(rowData, !isSelected)
              }
            : () => {}
          const isClickable =
            hasClickHandler || (hasSelecthandler && isSelectable)

          return (
            <DataTableDataRow
              key={key}
              {...{
                columns,
                rowData,
                rowKey: key,
                dataCellClassString,
                dataCellDefaultContentClassString,
                dataRowClassString,
                onClick,
                onSelect,
                isClickable,
                isSelectable,
                isSelected,
              }}
            />
          )
        })}
      </tbody>
    </table>
  )
}

export { DataTable }
