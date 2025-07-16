import { cn } from '../../utils/cn'
import { TextProps, textVariants, asTypes } from './Text.props'

const Text = ({
  className,
  as: Tag = asTypes.div,
  children,
  ...textProps
}: TextProps) => {
  const mergedProps = {
    ...textProps,
    color: textProps.color ?? '',
    type: textProps.type ?? 'body',
    align: textProps.align ?? 'left',
    testId: textProps.testId ?? 'text-component',
  }

  return (
    <Tag
      className={cn(textVariants({ ...mergedProps }), className)}
      data-testid={mergedProps.testId}
    >
      {children}
    </Tag>
  )
}

export { Text }
