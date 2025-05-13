import { cn } from '@utils/cn'
import { TableRowVariants, TableRowProps } from './Table.props'

const TableRow = ({ className, children, ...tableRowProps }: TableRowProps) => {
  const mergedProps = {
    ...tableRowProps,
    border: 'default' as const,
  }

  console.log('mergedProps', mergedProps)
  return (
    <tr className={cn(TableRowVariants({ ...mergedProps }), className)}>
      {children}
    </tr>
  )
}

export { TableRow }
