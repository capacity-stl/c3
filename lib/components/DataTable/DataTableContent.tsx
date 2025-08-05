import React from 'react'
import { ColumnSchema } from './DataTable.props'
import { getKeyFromColumnSchema } from './DataTable.utils'
import { Text } from '@components/Text/Text'

const DataTableDataCell = <T extends object>({
  columnSchema,
  dataCellClassString,
  dataCellDefaultContentClassString,
  ...props
}: {
  columnSchema: ColumnSchema<T>
  dataCellClassString?: string
  dataCellDefaultContentClassString?: string
}) => {
  const textAlign = columnSchema?.align ?? 'left'
  const textAlignClass =
    textAlign === 'center'
      ? 'text-center'
      : textAlign === 'right'
        ? 'text-right'
        : ''

  if (columnSchema?.component)
    return (
      <td className={dataCellClassString}>
        {React.createElement(columnSchema.component, props as T)}
      </td>
    )

  const propsValues = Object.values(props ?? {})
  const formattedDefaultContent =
    propsValues.length > 0
      ? propsValues
          .map(
            (value) =>
              columnSchema?.valueMapping?.[String(value)] ??
              value ??
              columnSchema?.placeholder ??
              '',
          )
          .join(columnSchema?.delimiter ?? ' ')
      : (columnSchema?.placeholder ?? '')

  return (
    <td className={dataCellClassString}>
      <div className={`${dataCellDefaultContentClassString} ${textAlignClass}`}>
        <Text as="span" type={columnSchema?.textType ?? 'body'}>
          {formattedDefaultContent}
        </Text>
      </div>
    </td>
  )
}

const DataTableDataRow = <T extends object>({
  columns,
  rowData,
  dataRowClassString,
  dataCellClassString,
  dataCellDefaultContentClassString,
  onClick,
  rowKey,
  isSelectable,
  isSelected,
  onSelect,
}: {
  columns: Array<ColumnSchema<T>>
  rowData: T
  rowKey: string
  dataRowClassString?: string
  dataCellClassString?: string
  dataCellDefaultContentClassString?: string
  onClick: (event: React.MouseEvent<HTMLTableRowElement>) => void
  onSelect: (event: React.MouseEvent<HTMLTableRowElement>) => void
  isSelectable?: boolean
  isSelected?: boolean
}) => {
  const clickHandler = isSelectable ? onSelect : onClick

  return (
    <tr className={dataRowClassString} onClick={clickHandler}>
      {isSelectable ? (
        <td className={dataCellClassString}>
          <div className={dataCellDefaultContentClassString}>
            <input
              tabIndex={-1}
              className="block"
              style={{ width: '16px', height: '16px' }}
              type="checkbox"
              checked={isSelected}
              readOnly
            />
          </div>
        </td>
      ) : null}
      {columns?.map((columnSchema) => {
        const props = columnSchema?.dataKeys
          ? columnSchema?.dataKeys?.reduce((previous, dataKey) => {
              const propKey = columnSchema?.keyPropMapping?.[dataKey] ?? dataKey

              return {
                ...previous,
                [propKey]: rowData?.[dataKey],
              }
            }, {})
          : rowData

        const key = `data-cell-${getKeyFromColumnSchema(columnSchema)}-${rowKey}`

        return (
          <DataTableDataCell
            key={key}
            {...{
              columnSchema,
              dataCellClassString: `${dataCellClassString} ${columnSchema?.dataCellClassName ?? ''}`,
              dataCellDefaultContentClassString,
              ...props,
            }}
          />
        )
      })}
    </tr>
  )
}

export { DataTableDataRow, DataTableDataCell }
