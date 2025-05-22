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
          return (
            <DataTableHeaderCell
              columnSchema={columnSchema}
              headerCellClassString={headerCellClassString}
              headerCellDefaultContentClassString={
                headerCellDefaultContentClassString
              }
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
}: {
  columns: Array<ColumnSchema>
  rowData: { [key: string]: any } //eslint-disable-line @typescript-eslint/no-explicit-any
  sort?: SortSchema
  dataRowClassString?: string
  dataCellClassString?: string
  dataCellDefaultContentClassString?: string
  onClick?: (data: object) => void
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

        return (
          <DataTableDataCell
            columnSchema={columnSchema}
            dataCellClassString={dataCellClassString}
            dataCellDefaultContentClassString={
              dataCellDefaultContentClassString
            }
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
        headerSectionClassString={headerSectionClassString}
        headerRowClassString={headerRowClassString}
        headerCellClassString={headerCellClassString}
        headerCellDefaultContentClassString={
          headerCellDefaultContentClassString
        }
      />
      {data?.map((rowData) => (
        <DataTableDataRow
          rowData={rowData}
          columns={columns}
          dataRowClassString={dataRowClassString}
          dataCellClassString={dataCellClassString}
          dataCellDefaultContentClassString={dataCellDefaultContentClassString}
          onClick={rowClickAction}
        />
      ))}
    </table>
  )
}

DataTable.SortOrder = SORT_ORDER

export { DataTable }
