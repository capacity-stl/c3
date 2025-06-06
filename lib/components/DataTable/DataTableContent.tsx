import React from 'react'
import { ColumnSchema } from './DataTable.props'
import { getKeyFromColumnSchema } from './DataTable.utils'
import { Text } from '@components/Text/Text'

const DataTableDataCell = ({
  columnSchema,
  dataCellClassString,
  dataCellDefaultContentClassString,
  ...props
}: {
  columnSchema: ColumnSchema
  dataCellClassString?: string
  dataCellDefaultContentClassString?: string
}) => {
  if (columnSchema?.component)
    return (
      <td className={dataCellClassString}>
        {React.createElement(columnSchema.component, props)}
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
      <div className={dataCellDefaultContentClassString}>
        <Text type={columnSchema?.textType ?? 'body'}>
          {formattedDefaultContent}
        </Text>
      </div>
    </td>
  )
}

const DataTableDataRow = ({
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
  columns: Array<ColumnSchema>
  rowData: { [key: string]: any } //eslint-disable-line @typescript-eslint/no-explicit-any
  rowKey: string
  dataRowClassString?: string
  dataCellClassString?: string
  dataCellDefaultContentClassString?: string
  onClick: () => void
  onSelect: () => void
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
        const props = columnSchema?.dataKeys?.reduce((previous, dataKey) => {
          const propKey = columnSchema?.keyPropMapping?.[dataKey] ?? dataKey

          return {
            ...previous,
            [propKey]: rowData?.[dataKey],
          }
        }, {})

        const key = `data-cell-${getKeyFromColumnSchema(columnSchema)}-${rowKey}`

        return (
          <DataTableDataCell
            key={key}
            {...{
              columnSchema,
              dataCellClassString,
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
