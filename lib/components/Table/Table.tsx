import { cn } from '@utils/cn'
import { TableProps, TableVariants } from './Table.props'

const Table = ({ className, children, ...TableProps }: TableProps) => {
  const mergedProps = {
    ...TableProps,
    testId: TableProps.testId ?? 'table-component',
  }

  return (
    <table className={cn(TableVariants({ ...mergedProps }), className)}>
      {children}
    </table>
  )
}

export { Table }
