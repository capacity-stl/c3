import { TableCaptionProps, TableCaptionVariants } from './Table.props'
import { cn } from '@utils/cn'
import { Text } from '@components/Text/Text'
const TableCaption = ({
  children,
  className,
  ...tableCaptionProps
}: TableCaptionProps) => {
  const mergedProps = {
    ...tableCaptionProps,
    p: '3' as const,
    fontProps: {
      type: 'body-small' as const,
      align: 'left' as const,
    },
  }
  return (
    <caption
      className={cn(TableCaptionVariants({ ...mergedProps }), className)}
    >
      <Text
        type={mergedProps.fontProps.type}
        color={mergedProps.color}
        align={mergedProps.align}
      >
        {children}
      </Text>
    </caption>
  )
}

export { TableCaption }
