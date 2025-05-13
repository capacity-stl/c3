import { TableFooterProps, TableFooterVariants } from './Table.props'
import { cn } from '@utils/cn'

const TableFooter = ({
  children,
  className,
  ...tableFooterProps
}: TableFooterProps) => {
  return (
    <tfoot
      className={cn(TableFooterVariants({ ...tableFooterProps }), className)}
    >
      {children}
    </tfoot>
  )
}

export { TableFooter }
