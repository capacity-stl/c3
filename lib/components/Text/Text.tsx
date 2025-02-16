import { cn } from '../../utils/cn'
import { TextProps, textVariants, asTypes } from './Text.props'
import { Slot } from '../Slot/Slot'

const Text = ({
  className,
  asChild,
  as: Tag = asTypes.div,
  children,
  ...textProps
}: TextProps) => {
  const Comp = asChild ? Slot : Tag

  return (
    <Comp
      className={cn(textVariants({ ...textProps }), className)}
      data-testid="text-component"
    >
      {children}
    </Comp>
  )
}

export { Text }
