import { cn } from '../../utils/cn'
import { FlexProps, flexVariants } from './Flex.props'

const Flex = ({
  className,
  children,
  testId = 'flex-component',
  ...flexProps
}: FlexProps) => {
  return (
    <div
      className={cn(flexVariants({ ...flexProps }), className)}
      data-testid={testId}
      {...flexProps}
    >
      {children}
    </div>
  )
}

export { Flex }
