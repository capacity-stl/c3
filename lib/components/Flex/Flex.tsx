import { cn } from '../../utils/cn'
import { FlexProps, flexVariants } from './Flex.props'

const Flex = ({ className, children, ...flexProps }: FlexProps) => {
  const mergedProps = {
    ...flexProps,
    testId: flexProps.testId ?? 'flex-component',
  }
  return (
    <div
      className={cn(flexVariants({ ...mergedProps }), className)}
      data-testid={mergedProps.testId}
    >
      {children}
    </div>
  )
}

export { Flex }
