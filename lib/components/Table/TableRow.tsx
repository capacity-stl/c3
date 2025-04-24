import { cn } from '@utils/cn'
import { TableRowVariants, TableRowProps } from './Table.props'
import { flexRender } from '@tanstack/react-table'

const TableRow = ({
  className,
  children,
  rows,
  ...tableRowProps
}: TableRowProps) => {
  return rows.map((row) => (
    <tr
      key={row.id}
      className={cn(TableRowVariants({ ...tableRowProps }), className)}
    >
      {row.getVisibleCells().map((cell) => (
        <td key={cell.id}>
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </td>
      ))}
    </tr>
  ))
}

export { TableRow }
