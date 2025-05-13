import { TableHeadProps, TableHeadVariants } from './Table.props'
import { cn } from '@utils/cn'

const TableHead = ({
  children,
  className,
  ...tableHeadProps
}: TableHeadProps) => {
  return (
    <thead className={cn(TableHeadVariants({ ...tableHeadProps }), className)}>
      {children}
    </thead>
  )
}

export { TableHead }
