import { cn } from '@utils/cn'
import { BoxProps, boxVariants } from './Box.props'

const Box = ({
  className,

  children,
  ...boxProps
}: BoxProps) => {

  return (
    <div
      className={cn(boxVariants({ ...boxProps }), className)}
      data-testid="box-component"
    >
      {children}
    </div>
  )
}

export { Box }
