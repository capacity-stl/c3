import { cn } from '@utils/cn'
import { TableBodyProps, TableBodyVariants } from './Table.props'

const TableBody = ({
  className,
  children,
  ...tableBodyProps
}: TableBodyProps) => {
  return (
    <tbody className={cn(TableBodyVariants({ ...tableBodyProps }), className)}>
      {children}
    </tbody>
  )
}

export { TableBody }
