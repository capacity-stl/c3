import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { cn } from '@utils/cn'
import { Text } from '../Text/Text'
import { TableProps, TableVariants } from './Table.props'
import { TableRow } from './TableRow'
import { TableBody } from './TableBody'
const Table = ({
  className,
  children,
  data,
  columns,
  ...TableProps
}: TableProps) => {
  const tableData = [...data]

  const mergedProps = {
    ...TableProps,
    testId: TableProps.testId ?? 'text-component',
  }

  const table = useReactTable({
    data: tableData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  const rows = table.getRowModel().rows

  return (
    <table className={cn(TableVariants({ ...mergedProps }), className)}>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
                {header.isPlaceholder ? null : (
                  <Text type="body-small-strong">
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                  </Text>
                )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <TableBody>
        <TableRow rows={rows} border="default" p="2" />
      </TableBody>
      <tfoot>
        {table.getFooterGroups().map((footerGroup) => (
          <tr key={footerGroup.id}>
            {footerGroup.headers.map((header) => (
              <th key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.footer,
                      header.getContext(),
                    )}
              </th>
            ))}
          </tr>
        ))}
      </tfoot>
    </table>
  )
}

export { Table }
