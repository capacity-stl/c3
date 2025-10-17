import { cn } from '../../utils/cn'
import { LabelProps, labelVariants } from './Label.props'

const Label = ({
  className,
  children,
  htmlFor,
  required = false,
  disabled = false,
  testId = 'label-component',
  ...labelProps
}: LabelProps) => {
  const mergedProps = {
    ...labelProps,
    color: labelProps.color ?? 'deep-space',
    type: labelProps.type ?? 'body',
    required,
    disabled,
  }

  return (
    <label
      htmlFor={htmlFor}
      className={cn(labelVariants({ ...mergedProps }), className)}
      data-testid={testId}
    >
      {children}
    </label>
  )
}

export { Label }
