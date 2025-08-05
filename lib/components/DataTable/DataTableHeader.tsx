import React, { useRef, useEffect } from 'react'
import {
  ColumnSchema,
  SortSchema,
  sortButtonVariants,
  sortButtonArrowVariants,
} from './DataTable.props'
import { getKeyFromColumnSchema } from './DataTable.utils'
import { Text } from '@components/Text/Text'
import { Tooltip } from '@components/Tooltip/Tooltip'
import { Icon } from '@components/Icon/Icon'

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

const DataTableHeaderCell = <T extends object>({
  columnSchema,
  headerCellClassString,
  headerCellDefaultContentClassString,
  headerCellSorterOptionalClassString,
  sort,
}: {
  columnSchema: ColumnSchema<T>
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
  const textAlign = columnSchema?.align ?? 'left'
  const textAlignClass =
    textAlign === 'center'
      ? 'text-center'
      : textAlign === 'right'
        ? 'text-right'
        : ''

  if (typeof columnSchema?.header === 'function') {
    return (
      <th
        className={`${headerCellClassString} ${columnSchema?.headerCellClassName ?? ''} ${textAlignClass}`}
      >
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
    <th className={`${headerCellClassString} ${textAlignClass}`}>
      <DataTableSortContainer
        className={headerCellSorterOptionalClassString}
        onClick={handleSort}
      >
        <div
          className={`${headerCellDefaultContentClassString} flex items-center`}
        >
          <Text as="span" type="body-small-strong">
            {columnSchema?.header}
          </Text>
          {columnSchema?.tooltip && (
            <Tooltip content={columnSchema.tooltip}>
              <Icon
                className="ml-1"
                icon={Icon.Glyph.Info}
                size="4"
                color="earth-300"
              />
            </Tooltip>
          )}
        </div>
        <DataTableHeaderSortButtons
          {...{ isSortable, isActive, isAscending, isDefault: true }}
        />
      </DataTableSortContainer>
    </th>
  )
}

const DataTableHeaderRow = <T extends object>({
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
  columns: Array<ColumnSchema<T>>
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
            <>
              <DataTableHeaderCell
                key={key}
                {...{
                  columnSchema,
                  headerCellClassString: `${headerCellClassString} ${columnSchema?.headerCellClassName ?? ''}`,
                  headerCellSorterOptionalClassString,
                  headerCellDefaultContentClassString,
                  sort,
                }}
              />
            </>
          )
        })}
      </tr>
    </thead>
  )
}

export { DataTableHeaderRow, DataTableHeaderCell }
