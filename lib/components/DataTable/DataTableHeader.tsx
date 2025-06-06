import React, { useRef, useEffect } from 'react'
import {
  ColumnSchema,
  SortSchema,
  sortButtonVariants,
  sortButtonArrowVariants,
} from './DataTable.props'
import { getKeyFromColumnSchema } from './DataTable.utils'
import { Text } from '@components/Text/Text'

const DataTableHeaderSortButtons = ({
  isSortable,
  isActive,
  isAscending,
  isDefault,
}: {
  isSortable: boolean
  isActive: boolean
  isAscending: boolean
  isDefault: boolean
}) => {
  const sortButtonClassString = sortButtonVariants({ isDefault })
  const sortButtonUpArrowClassString = sortButtonArrowVariants({
    direction: 'up',
    isActive,
    isAscending,
  })
  const sortButtonDownArrowClassString = sortButtonArrowVariants({
    direction: 'down',
    isActive,
    isAscending,
  })

  if (!isSortable) return null

  return (
    <div className={sortButtonClassString}>
      <div className={sortButtonUpArrowClassString} />
      <div className={sortButtonDownArrowClassString} />
    </div>
  )
}

const DataTableSortContainer = ({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode
  className?: string
  onClick?: (() => void) | null
}) => {
  return onClick ? (
    <div className={className} onClick={onClick} tabIndex={0}>
      {children}
    </div>
  ) : (
    <div className={className}>{children}</div>
  )
}

const DataTableHeaderCell = ({
  columnSchema,
  headerCellClassString,
  headerCellDefaultContentClassString,
  headerCellSorterOptionalClassString,
  sort,
}: {
  columnSchema: ColumnSchema
  headerCellClassString?: string
  headerCellDefaultContentClassString?: string
  headerCellSorterOptionalClassString?: string
  sort?: SortSchema
}) => {
  const isSortable =
    Boolean(columnSchema?.sortKey) && typeof sort?.onSort === 'function'
  const isActive = sort?.sortKey === columnSchema?.sortKey
  const isAscending = sort?.isAscending ?? true
  const handleSort =
    typeof sort?.onSort === 'function' &&
    typeof columnSchema?.sortKey === 'string'
      ? () => sort.onSort(String(columnSchema.sortKey))
      : null

  if (typeof columnSchema?.header === 'function') {
    return (
      <th className={headerCellClassString}>
        <DataTableSortContainer
          className={headerCellSorterOptionalClassString}
          onClick={handleSort}
        >
          {React.createElement(
            columnSchema.header,
            {},
            <DataTableHeaderSortButtons
              {...{ isSortable, isActive, isAscending, isDefault: false }}
            />,
          )}
        </DataTableSortContainer>
      </th>
    )
  }

  return (
    <th className={headerCellClassString}>
      <DataTableSortContainer
        className={headerCellSorterOptionalClassString}
        onClick={handleSort}
      >
        <div className={headerCellDefaultContentClassString}>
          <Text type="body-small-strong">{columnSchema?.header}</Text>
        </div>
        <DataTableHeaderSortButtons
          {...{ isSortable, isActive, isAscending, isDefault: true }}
        />
      </DataTableSortContainer>
    </th>
  )
}

const DataTableHeaderRow = ({
  columns,
  selectState,
  sort,
  headerSectionClassString,
  headerRowClassString,
  headerCellClassString,
  headerCellDefaultContentClassString,
  headerCellSorterOptionalClassString,
  isSelectable,
  onSelectAll,
}: {
  columns: Array<ColumnSchema>
  selectState: number
  sort?: SortSchema
  headerSectionClassString?: string
  headerRowClassString?: string
  headerCellClassString?: string
  headerCellDefaultContentClassString?: string
  headerCellSorterOptionalClassString?: string
  isSelectable?: boolean
  onSelectAll?: () => void
}) => {
  const checkboxRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (checkboxRef.current)
      checkboxRef.current.indeterminate = selectState === 1
  }, [selectState])

  return (
    <thead className={headerSectionClassString}>
      <tr className={headerRowClassString}>
        {isSelectable ? (
          <td className={headerCellClassString}>
            <div className={headerCellDefaultContentClassString}>
              {typeof onSelectAll === 'function' ? (
                <input
                  className="block"
                  style={{ width: '16px', height: '16px' }}
                  type="checkbox"
                  checked={selectState > 0}
                  onChange={onSelectAll}
                  readOnly
                  ref={checkboxRef}
                />
              ) : (
                ''
              )}
            </div>
          </td>
        ) : null}
        {columns?.map((columnSchema) => {
          const key = `header-cell-${getKeyFromColumnSchema(columnSchema)}`

          return (
            <DataTableHeaderCell
              key={key}
              {...{
                columnSchema,
                headerCellClassString,
                headerCellSorterOptionalClassString,
                headerCellDefaultContentClassString,
                sort,
              }}
            />
          )
        })}
      </tr>
    </thead>
  )
}

export { DataTableHeaderRow, DataTableHeaderCell }
