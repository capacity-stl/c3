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
    color: textProps.color ?? 'deep-space',
    type: textProps.type ?? 'body',
    align: textProps.align ?? 'left',
  }

  return (
    <Tag
      className={cn(textVariants({ ...mergedProps }), className)}
      data-testid="text-component"
    >
      {children}
    </Tag>
  )
}

export { Text }
