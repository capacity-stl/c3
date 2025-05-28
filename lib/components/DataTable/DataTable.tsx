import React from 'react'
import { cn } from '@utils/cn'
import {
  DataTableProps,
  ColumnSchema,
  SortSchema,
  componentVariants,
} from './DataTable.props'
import { Text } from '@components/Text/Text'

const SORT_ORDER = {
  ASC: 'asc',
  DESC: 'desc',
}

const getKeyFromColumnSchema = (columnSchema: ColumnSchema) =>
  columnSchema?.key ?? `${columnSchema.dataKeys.join('-')}`

const getKeyFromDataObject = (
  data: { [key: string]: any }, // eslint-disable-line @typescript-eslint/no-explicit-any
  index: number,
  uniqueKey?: string,
): string => {
  if (typeof uniqueKey === 'string') return JSON.stringify(data?.[uniqueKey])

  if (data?.id) return String(data.id)

  return String(data?.name ? `${data.name}-${index}` : index)
}

const DataTableHeaderCell = ({
  columnSchema,
  headerCellClassString,
  headerCellDefaultContentClassString,
}: {
  columnSchema: ColumnSchema
  headerCellClassString?: string
  headerCellDefaultContentClassString?: string
  sort?: SortSchema
}) => {
  if (typeof columnSchema?.header === 'function') {
    return (
      <th className={headerCellClassString}>
        {React.createElement(columnSchema.header, {})}
      </th>
    )
  }

  return (
    <th className={headerCellClassString}>
      <div className={headerCellDefaultContentClassString}>
        <Text type="body-small-strong">{columnSchema?.header}</Text>
      </div>
    </th>
  )
}

const DataTableHeaderRow = ({
  columns,
  sort,
  headerSectionClassString,
  headerRowClassString,
  headerCellClassString,
  headerCellDefaultContentClassString,
}: {
  columns: Array<ColumnSchema>
  sort?: SortSchema
  headerSectionClassString?: string
  headerRowClassString?: string
  headerCellClassString?: string
  headerCellDefaultContentClassString?: string
}) => {
  return (
    <thead className={headerSectionClassString}>
      <tr className={headerRowClassString}>
        {columns?.map((columnSchema) => {
          const key = `header-cell-${getKeyFromColumnSchema(columnSchema)}`

          return (
            <DataTableHeaderCell
              columnSchema={columnSchema}
              headerCellClassString={headerCellClassString}
              headerCellDefaultContentClassString={
                headerCellDefaultContentClassString
              }
              key={key}
              sort={sort}
            />
          )
        })}
      </tr>
    </thead>
  )
}

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
}: {
  columns: Array<ColumnSchema>
  rowData: { [key: string]: any } //eslint-disable-line @typescript-eslint/no-explicit-any
  sort?: SortSchema
  dataRowClassString?: string
  dataCellClassString?: string
  dataCellDefaultContentClassString?: string
  onClick?: (data: object) => void
  rowKey: string
}) => {
  const clickHandler =
    typeof onClick === 'function' ? () => onClick(rowData) : () => {}

  return (
    <tr className={dataRowClassString} onClick={clickHandler}>
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
            columnSchema={columnSchema}
            dataCellClassString={dataCellClassString}
            dataCellDefaultContentClassString={
              dataCellDefaultContentClassString
            }
            key={key}
            {...props}
          />
        )
      })}
    </tr>
  )
}

const DataTable = ({
  columns,
  data,
  className,
  uniqueKey,
  rowClickAction,
  ...styleProps
}: DataTableProps) => {
  const {
    rootClassString,
    headerSectionClassString,
    headerRowClassString,
    headerCellClassString,
    headerCellDefaultContentClassString,
    dataRowClassString,
    dataCellClassString,
    dataCellDefaultContentClassString,
  } = componentVariants({
    ...styleProps,
    clickable: typeof rowClickAction === 'function',
  })

  return (
    <table className={cn(className, rootClassString)}>
      <DataTableHeaderRow
        columns={columns}
        headerCellClassString={headerCellClassString}
        headerCellDefaultContentClassString={
          headerCellDefaultContentClassString
        }
        headerRowClassString={headerRowClassString}
        headerSectionClassString={headerSectionClassString}
      />
      <tbody>
        {data?.map((rowData, index) => {
          const key = `row-${getKeyFromDataObject(rowData, index, uniqueKey)}`

          return (
            <DataTableDataRow
              columns={columns}
              dataCellClassString={dataCellClassString}
              dataCellDefaultContentClassString={
                dataCellDefaultContentClassString
              }
              dataRowClassString={dataRowClassString}
              key={key}
              onClick={rowClickAction}
              rowData={rowData}
              rowKey={key}
            />
          )
        })}
      </tbody>
    </table>
  )
}

DataTable.SortOrder = SORT_ORDER

export { DataTable }
