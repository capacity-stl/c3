import { TableCellProps, TableCellVariants } from './Table.props'
import { Text } from '@components/Text/Text'
import { cn } from '@utils/cn'

const TableCell = ({
  children,
  className,
  ...tableCellProps
}: TableCellProps) => {
  const mergedProps = {
    ...tableCellProps,
    p: '3' as const,
    testId: tableCellProps.testId ?? 'table-cell-component',
    fontProps: {
      type: 'body-small' as const,
      align: 'left' as const,
    },
  }

  console.log('mergedProps.fontProps.align', mergedProps)

  return (
    <td className={cn(TableCellVariants({ ...mergedProps }), className)}>
      {typeof children === 'string' || typeof children === 'number' ? (
        <Text
          type={mergedProps.fontProps.type}
          color={mergedProps.color}
          align={mergedProps.align}
        >
          {children}
        </Text>
      ) : (
        children
      )}
    </td>
  )
}

export { TableCell }
